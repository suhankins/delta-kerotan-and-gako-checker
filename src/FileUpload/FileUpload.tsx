import type { ChangeEventHandler } from 'react';
import styles from './FileUpload.module.css';
import classNames from 'classnames';
import { UploadIcon } from './UploadIcon';

export const FileUpload = ({
    onChange,
}: {
    onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
    return (
        <label className={classNames('component interactive', styles.container)} tabIndex={0}>
            <UploadIcon className="icon" />
            <span>Upload your UserSettings_0.sav</span>
            <input
                className={styles.input}
                type="file"
                accept=".sav"
                onInput={onChange}
            />
        </label>
    );
};
