"use client"
import * as Tooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import "../styles/profilePic.css";
import ThemeSwitch from './ThemeSwitcher';
const TABS = [
    { path: '/', name: 'Home', icon: <HomeIcon /> },
    { path: '/about', name: 'About', icon: <AboutIcon /> },
    { path: '/projects', name: 'Projects', icon: <ProjectsIcon /> },
];

export function Navbar() {
    let pathname = usePathname() || '/';

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mb-4 flex h-12 mx-auto px-6">
            <div className="pointer-events-auto relative mx-auto flex items-center rounded-xl border border-zinc-950/10 backdrop-filter backdrop-blur-lg p-2 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]">
                {TABS.map((tab, index) => (
                    <Tooltip.Provider key={index} delayDuration={0}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <Link
                                    href={tab.path}
                                    key={index}
                                    data-id={tab.path}
                                    aria-label={tab.name} // Added for accessibility
                                    className={`inline-flex h-9 w-9 items-center justify-center transition-colors duration-100 focus-visible:outline-2 ${tab.path === pathname ? 'text-teal-600 dark:text-teal-600'
                                        : 'text-slate-400 hover:text-slate-500 dark:hover:text-slate-400 dark:text-slate-500'}`}>
                                    {tab.icon}
                                </Link>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content sticky="always" hideWhenDetached={false} data-state="delayed-open" className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={12}>
                                    <span className="block">{tab.name}</span>
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                ))}
                <ThemeSwitch />
            </div>
        </div>
    );
}
/* 
// Icons can be moved to separate components for better readability
function HomeIcon() {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                        <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
                        <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path>
                    </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={18}>
                        Home
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>

    );
}

function AboutIcon() {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
                        <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
                    </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={18}>
                        About
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

function BlogIcon() {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current" width="28" height="28">
                        <path fillOpacity=".16" fillRule="nonzero" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
                    </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={18}>
                        Blog
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

function ProjectsIcon() {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fillOpacity=".16" d="M1 4h18v10H1z"></path>
                        <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path>
                    </svg>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={18}>
                        Projects
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
 */

// Icons can be moved to separate components for better readability
function HomeIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
            <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
            <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path>
        </svg>
    );
}

function AboutIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
            <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
        </svg>
    );
}

function BlogIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current" width="28" height="28">
            <path fillOpacity=".16" fillRule="nonzero" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
        </svg>
    );
}

function ProjectsIcon() {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fillOpacity=".16" d="M1 4h18v10H1z"></path>
            <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path>
        </svg>
    );
}