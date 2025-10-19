import classNames from 'classnames';
import { Checkbox } from '../Checkbox/Checkbox';
import { LOCATIONS, type ILocation } from '../utils/locations';
import styles from './Table.module.css';
import { useEffect, useMemo, useState } from 'react';

const getPreviewImageName = (location: ILocation) =>
    location.pictureVariation
        ? `${location.name.replaceAll(':', '')} ${location.pictureVariation}`
        : location.name.replaceAll(':', '');

const IconCell = ({ state, name }: { state: number; name: string }) => {
    const lowerCaseName = name.toLowerCase().replace('-', '');

    return (
        <td className={styles.iconColumn}>
            <div
                className={classNames(styles.iconContainer, {
                    [styles.iconCollected]: state,
                })}>
                <img
                    src={
                        state
                            ? `/icons/${lowerCaseName}-collected.png`
                            : `/icons/${lowerCaseName}.png`
                    }
                    alt={state ? `${name} found` : `${name} not found`}
                />
            </div>
        </td>
    );
};

const Row = ({
    location,
    gakoState,
    kerotanState,
    showMissionTitle,
}: {
    location: ILocation;
    gakoState: number;
    kerotanState: number;
    showMissionTitle: boolean;
}) => {
    return (
        <>
            {showMissionTitle && (
                <tr>
                    <th className={styles.mission} colSpan={3}>
                        {location.mission}
                    </th>
                </tr>
            )}
            <tr>
                <th
                    scope="row"
                    style={{
                        backgroundImage: `url("/previews/${getPreviewImageName(
                            location
                        )}.png")`,
                    }}
                    className={styles.location}>
                    <p className={styles.locationName}>{location.name}</p>
                </th>
                <IconCell name="Kerotan" state={kerotanState} />
                <IconCell name="GA-KO" state={gakoState} />
            </tr>
        </>
    );
};

export const Table = ({
    kerotansArray,
    gakosArray,
}: {
    kerotansArray: number[];
    gakosArray: number[];
}) => {
    const hasEverything = useMemo(
        () =>
            kerotansArray.every((kerotan) => kerotan) &&
            gakosArray.every((gako) => gako),
        [kerotansArray, gakosArray]
    );
    const hasNothing = useMemo(
        () =>
            kerotansArray.every((kerotan) => !kerotan) &&
            gakosArray.every((gako) => !gako),
        [kerotansArray, gakosArray]
    );

    const [showAll, setShowAll] = useState(hasEverything);

    useEffect(() => setShowAll(hasEverything), [hasEverything]);

    const locations = showAll
        ? LOCATIONS
        : LOCATIONS.filter(
              ({ index }) => !kerotansArray[index] || !gakosArray[index]
          );

    return (
        <>
            <Checkbox
                checked={showAll}
                onChange={setShowAll}
                disabled={hasEverything || hasNothing}>
                Show Collected
            </Checkbox>
            <table className={styles.table}>
                <tbody>
                    {locations.map((location, arrayIndex, array) => (
                        <Row
                            key={`location ${location.index} ${
                                kerotansArray[location.index]
                            } ${gakosArray[location.index]}`}
                            location={location}
                            kerotanState={kerotansArray[location.index]}
                            gakoState={gakosArray[location.index]}
                            showMissionTitle={
                                array[arrayIndex - 1]?.mission !==
                                location.mission
                            }
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};
