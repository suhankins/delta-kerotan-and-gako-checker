import type { ReactNode } from 'react';
import styles from './Checkbox.module.css';
import classNames from 'classnames';

export const Checkbox = ({
    checked,
    onChange,
    children,
    disabled,
}: {
    checked: boolean;
    onChange: (state: boolean) => void;
    children: ReactNode;
    disabled: boolean;
}) => (
    <label
        className={classNames('component interactive', {
            disabled,
        })}>
        <span>{children}</span>
        <input
            disabled={disabled}
            className={styles.input}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
    </label>
);
