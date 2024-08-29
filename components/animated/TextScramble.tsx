"use client"
import React, { useEffect, useRef } from 'react';

interface QueueItem {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
}

class TextScramble {
    el: HTMLElement;
    chars: string;
    queue: QueueItem[] = [];
    frameRequest: number | null = null;
    frame: number = 0;
    resolve!: () => void;

    constructor(el: HTMLElement) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
        }
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const TextScrambleComponent: React.FC = () => {
    const elRef = useRef<HTMLDivElement>(null);
    const phrases = ['Vaibhav Mhaske', 'वैभव म्हस्के'];

    useEffect(() => {
        if (elRef.current) {
            const fx = new TextScramble(elRef.current);
            let counter = 0;

            const next = () => {
                fx.setText(phrases[counter]).then(() => {
                    setTimeout(next, 1500);
                });
                counter = (counter + 1) % phrases.length;
            };

            next();

            return () => {
                if (fx.frameRequest) {
                    cancelAnimationFrame(fx.frameRequest);
                }
            };
        }
    }, []);

    return (
        <div className="subtitle text-center text-2xl font-bold" ref={elRef}></div>
    );
};

export default TextScrambleComponent;
