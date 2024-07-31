
"use client"

import { useEffect, useState } from 'react';

interface TextProp {
    hindiText: string;
    englishText: string;
    style: string;
    time: number;
}

const TextDecodeAnimation: React.FC<TextProp> = ({ hindiText, englishText, style, time }) => {
    const [displayedText, setDisplayedText] = useState(hindiText);

    useEffect(() => {
        const interval = time; // Interval between character changes
        let currentIndex = 0;
        let intervalId: NodeJS.Timeout;

        const animateText = () => {
            if (currentIndex < englishText.length) {
                setDisplayedText((prev) => {
                    // Ensure newText does not exceed the length of the English text
                    const newText =
                        englishText.slice(0, currentIndex + 1) +
                        hindiText.slice(currentIndex + 1);
                    return newText;
                });
                currentIndex++;
            } else {
                // Once the English text is fully displayed, stop the animation
                setDisplayedText(englishText);
                clearInterval(intervalId);
            }
        };

        intervalId = setInterval(animateText, interval);
        return () => clearInterval(intervalId);
    }, [englishText, hindiText]);

    return (
        <div className={style}>{displayedText}</div>
    );
};

export default TextDecodeAnimation;
