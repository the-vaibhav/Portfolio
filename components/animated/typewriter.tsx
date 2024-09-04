
"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Typewriter({
    texts,
    className,
}: {
    texts: string[];
    className?: string;
}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isAnimatingBackward, setIsAnimatingBackward] = useState(false);
    const value = useMotionValue(0);
    const roundedValue = useTransform(value, (x) => Math.round(x));
    const textToRender = useTransform(roundedValue, (max) => texts[currentTextIndex].slice(0, max));

    useEffect(() => {
        const length = texts[currentTextIndex].length;
        const animationDuration = length * 0.15;

        const control = animate(value, isAnimatingBackward ? 0 : length, {
            duration: animationDuration,
            delay: 0.5,
            onComplete: () => {
                if (!isAnimatingBackward) {
                    setIsAnimatingBackward(true);
                } else {
                    setIsAnimatingBackward(false);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            },
        });

        return control.stop;
    }, [currentTextIndex, isAnimatingBackward]);

    return <motion.span className={className}>{textToRender}</motion.span>;
}