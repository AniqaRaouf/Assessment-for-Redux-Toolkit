import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const TypingText = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentText = '';
        const interval = setInterval(() => {
            currentText += text[currentText.length];
            setDisplayText(currentText);
            if (currentText === text) {
                clearInterval(interval);
            }
        }, delay);

        return () => clearInterval(interval);
    }, []);

    return (
        <Text style={{ color: '#11544a', fontSize: 25, textAlign: 'left', marginHorizontal: 25, fontStyle: 'italic', letterSpacing: 1, marginVertical: 10 }}>{displayText}</Text>
    );
};
export default TypingText 