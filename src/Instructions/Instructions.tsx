import { forwardRef, type Ref } from 'react';
import { CopyableText } from '../CopyableText/CopyableText';
import styles from './Instructions.module.css';

export const Instructions = forwardRef((_, ref: Ref<HTMLDetailsElement>) => (
    <details ref={ref}>
        <summary>Instructions</summary>
        <ol>
            <li>
                Type{' '}
                <code>
                    <CopyableText>
                        %LOCALAPPDATA%\MGSDelta\Saved\SaveGames\
                    </CopyableText>
                </code>{' '}
                in address bar in explorer and press Enter
                <img
                    className={styles.image}
                    src="/instructions/instruction_0.webp"
                    alt=""
                />
            </li>
            <li>
                Go to a folder named with random numbers
                <img
                    className={styles.image}
                    src="/instructions/instruction_1.webp"
                    alt=""
                />
            </li>
            <li>
                Find <code>UserProfile_0.sav</code> and upload it here
            </li>
        </ol>
    </details>
));
