import React, { useState, useEffect, useRef } from 'react';
import styles from './pinCode.module.scss';

const PinCode = ({ onComplete }) => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const filled = code.every((digit) => digit !== '');
        if (filled) {
            onComplete(code.join(''));
        }
    }, [code, onComplete]);

    const handleChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value !== '' && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && code[index] === '') {
            const newCode = [...code];
            newCode[index - 1] = '';
            setCode(newCode);
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <div className={styles.inputCode}>
            {code.map((digit, index) => (
                <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    className={styles.inputField}
                />
            ))}
        </div>
    );
};

export default PinCode;
