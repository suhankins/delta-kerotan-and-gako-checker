import type { ReactNode } from 'react';
import styles from './Checkbox.module.css';

export const Checkbox = ({
    checked,
    onChange,
    children,
}: {
    checked: boolean;
    onChange: (state: boolean) => void;
    children: ReactNode;
}) => (
    <label className={styles.container}>
        <span className={styles.label}>{children}</span>
        <input
            className={styles.input}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
    </label>
);
