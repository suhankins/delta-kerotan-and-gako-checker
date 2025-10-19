import { useDropzone } from 'react-dropzone';
import styles from './FileUpload.module.css';
import classNames from 'classnames';
import { UploadIcon } from './UploadIcon';

export const FileUpload = ({
    onChange,
}: {
    onChange: (file: File) => void;
}) => {
    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) onChange(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        noClick: true,
        onDrop,
    });

    return (
        <label
            className={classNames('component interactive', styles.container)}
            {...getRootProps()}>
            <UploadIcon className="icon" />
            <span>
                {isDragActive
                    ? 'Drop your save file here'
                    : 'Drag and drop, or select your UserProfile_0.sav'}
            </span>
            <input
                className={styles.input}
                type="file"
                {...getInputProps()}
                accept=".sav"
            />
        </label>
    );
};
