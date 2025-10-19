import { useState } from 'react';
import { SIGNATURE } from './utils/consts';
import { findArrayByNameInBuffer } from './utils/findArrayByNameInBuffer';
import { Table } from './Table/Table';
import { FileUpload } from './FileUpload/FileUpload';

const KEROTAN_LIST_NAME = 'KerotanList';
const GAKO_LIST_NAME = 'GakoList';

const textDecoder = new TextDecoder();

interface ICollectableCollection {
    kerotansArray: number[];
    gakosArray: number[];
}

function App() {
    const [collection, setCollection] = useState<
        ICollectableCollection | null | string
    >(null);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Reading uploaded file...');
        const buffer = await e.target.files?.item(0)?.arrayBuffer();
        if (buffer === undefined) {
            setCollection('No file provided.');
            return;
        }
        if (textDecoder.decode(buffer.slice(0, 4)) !== SIGNATURE) {
            setCollection('Invalid file format uploaded.');
            return;
        }

        const kerotansArray = findArrayByNameInBuffer(
            buffer,
            KEROTAN_LIST_NAME
        );
        const gakosArray = findArrayByNameInBuffer(buffer, GAKO_LIST_NAME);

        if (
            typeof kerotansArray === 'string' ||
            typeof gakosArray === 'string'
        ) {
            setCollection(
                typeof kerotansArray === 'string'
                    ? kerotansArray
                    : (gakosArray as string)
            );
            return;
        }

        setCollection({
            kerotansArray,
            gakosArray,
        });
    };

    return (
        <>
            <h1 className="logo">
                Kerotan and <span className="nowrap">GA-KO</span> checker{' '}
                <span className="delta">Δ</span>
            </h1>
            <div className="component">
                <p>
                    Check which Kerotans and GA-KOs you missed in Metal Gear
                    Solid
                    <span className="delta">
                        Δ
                    </span>
                    : Snake Eater.
                </p>
                <details>
                    <summary>Instructions</summary>
                    <ol>
                        <li>
                            Go to <code>%LOCALAPPDATA%\MGSDelta\Saved\SaveGames\</code>
                        </li>
                    </ol>
                </details>
            </div>
            <FileUpload onChange={onChange} />
            {typeof collection === 'string' && (
                <p className="component">Error: {collection}</p>
            )}
            {collection && typeof collection !== 'string' && (
                <Table
                    kerotansArray={collection.kerotansArray}
                    gakosArray={collection.gakosArray}
                />
            )}
        </>
    );
}

export default App;
