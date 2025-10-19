import styles from './CopyableText.module.css';
import { useState } from 'react';

export const CopyableText = ({ children }: { children: string }) => {
    const [copied, setCopied] = useState(false);

    const onClick = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <span
            className={styles.container}
            data-tooltip={copied && 'Copied!'}
            onClick={onClick}>
            {children}
        </span>
    );
};
