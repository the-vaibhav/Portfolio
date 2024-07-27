"use client"

import { useEffect, useState } from 'react';

interface TextProp {
    hindiText: string;
    englishText: string;
    style: string;
}

const TextDecodeAnimation: React.FC<TextProp> = ({ hindiText, englishText, style }) => {
    const [displayedText, setDisplayedText] = useState(hindiText);

    useEffect(() => {
        const interval = 200; // Interval between character changes
        let currentIndex = 0;
        let intervalId: NodeJS.Timeout;

        const animateText = () => {
            if (currentIndex < englishText.length) {
                setDisplayedText((prev) => {
                    const newText =
                        englishText.slice(0, currentIndex + 1) +
                        hindiText.slice(currentIndex + 1);
                    return newText;
                });
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        };

        intervalId = setInterval(animateText, interval);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={style}>{displayedText}</div>
    );
};

export default TextDecodeAnimation;