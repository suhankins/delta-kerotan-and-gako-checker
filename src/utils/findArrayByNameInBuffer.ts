import { ARRAY_LENGTH, SIGNATURE } from './consts';

const BYTES_AFTER_NAME = 0x32;

const textDecoder = new TextDecoder();

export const findArrayByNameInBuffer = (buffer: ArrayBuffer, text: string) => {
    let pointer = SIGNATURE.length;
    let foundLetters = 0;

    while (pointer < buffer?.byteLength) {
        const letter = textDecoder.decode(buffer.slice(pointer, pointer + 1));
        if (letter === text[foundLetters]) {
            foundLetters++;
        } else {
            foundLetters = 0;
        }

        if (foundLetters === text.length) {
            pointer += BYTES_AFTER_NAME;
            return [
                ...new Int8Array(buffer.slice(pointer, pointer + ARRAY_LENGTH)),
            ];
        }
        pointer++;
    }

    return 'No data found. Are you sure you uploaded UserProfile_0.sav?';
};
