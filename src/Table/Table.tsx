import { Checkbox } from '../Checkbox/Checkbox';
import { LOCATIONS, type ILocation } from '../utils/locations';
import styles from './Table.module.css';
import { useState } from 'react';

const getPreviewImageName = (location: ILocation) =>
    location.pictureVariation
        ? `${location.name.replaceAll(':', '')} ${location.pictureVariation}`
        : location.name.replaceAll(':', '');

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
                <td className={styles.iconColumn}>
                    <div
                        className={`${styles.iconContainer} ${
                            kerotanState ? styles.iconCollected : ''
                        }`}>
                        <img
                            src={
                                kerotanState
                                    ? '/icons/kerotan-collected.png'
                                    : '/icons/kerotan.png'
                            }
                            alt={
                                kerotanState
                                    ? 'Kerotan found'
                                    : 'Kerotan not found'
                            }
                        />
                    </div>
                </td>
                <td className={styles.iconColumn}>
                    <div
                        className={`${styles.iconContainer} ${
                            gakoState ? styles.iconCollected : ''
                        }`}>
                        <img
                            src={
                                gakoState
                                    ? '/icons/gako-collected.png'
                                    : '/icons/gako.png'
                            }
                            alt={gakoState ? 'GA-KO found' : 'GA-KO not found'}
                        />
                    </div>
                </td>
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
    const hasEverything =
        kerotansArray.every((kerotan) => kerotan) &&
        gakosArray.every((gako) => gako);

    const [showAll, setShowAll] = useState(hasEverything);

    const locations = showAll
        ? LOCATIONS
        : LOCATIONS.filter(
              ({ index }) => !kerotansArray[index] || !gakosArray[index]
          );

    return (
        <>
            {!hasEverything && (
                <Checkbox checked={showAll} onChange={setShowAll}>
                    Show Collected
                </Checkbox>
            )}
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
