import { useRef, useState } from 'react';
import { GAKO_LIST_NAME, KEROTAN_LIST_NAME, SIGNATURE } from './utils/consts';
import { findArrayByNameInBuffer } from './utils/findArrayByNameInBuffer';
import { Table } from './Table/Table';
import { FileUpload } from './FileUpload/FileUpload';
import { Instructions } from './Instructions/Instructions';

const textDecoder = new TextDecoder();

interface ICollectableCollection {
    kerotansArray: number[];
    gakosArray: number[];
}

function App() {
    const instructionsRef = useRef<HTMLDetailsElement>(null);

    const [collection, setCollection] = useState<
        ICollectableCollection | null | string
    >(null);

    const onChange = async (file: File) => {
        console.log('Reading uploaded file...');
        const buffer = await file.arrayBuffer();
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

        const instructionsCurrent = instructionsRef?.current;
        if (instructionsCurrent) instructionsCurrent.open = false;

        setCollection({
            kerotansArray,
            gakosArray,
        });
    };

    return (
        <>
            <h1 className="logo">
                Kerotan and <span className="nowrap">GA-KO</span> Checker{' '}
                <span className="delta">Δ</span>
            </h1>
            <div className="component">
                <p>
                    Check which Kerotans and GA-KOs have you missed in Metal
                    Gear Solid <span className="delta">Δ</span>: Snake Eater.
                </p>
                <Instructions ref={instructionsRef} />
            </div>
            <FileUpload onChange={onChange} />
            {typeof collection === 'string' && (
                <p className="component">Error: {collection}</p>
            )}
            {collection && typeof collection !== 'string' ? (
                <Table
                    kerotansArray={collection.kerotansArray}
                    gakosArray={collection.gakosArray}
                />
            ) : (
                <img src="/example.png" alt="" className="example" />
            )}
            <footer className="component">
                <p>
                    This website is not affiliated with Konami. All images used
                    on this website are owned by Konami.
                </p>
                <p>
                    This website does not collect any data or use any cookies.
                    All data you upload is processed on your device only.
                </p>
                <p>
                    By Punished Bernadetta. Contribute on{' '}
                    <a href="https://github.com/suhankins/delta-kerotan-and-gako-checker">
                        GitHub
                    </a>
                    .
                </p>
            </footer>
        </>
    );
}

export default App;
