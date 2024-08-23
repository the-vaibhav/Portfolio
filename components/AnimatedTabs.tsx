"use client"
import AnimatedBackground from '@/components/animated/animated-background';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitcher';

export function AnimatedTabs() {
    const pathname = usePathname();

    const TABS = [
        { href: '/', label: 'Home', icon: <HomeIcon /> },
        { href: '/about', label: 'About', icon: <AboutIcon /> },
        { href: '/blog', label: 'Blog', icon: <BlogIcon /> },
        { href: '/projects', label: 'Projects', icon: <ProjectsIcon /> },
    ];

    return (
        <div className="fixed inset-x-0 bottom-0 z-[1000] mb-4 flex h-12 justify-center px-6">
            <div className="flex items-center rounded-xl border border-zinc-950/10 backdrop-filter backdrop-blur-lg p-2 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]">
                <AnimatedBackground
                    defaultValue={TABS.find(tab => tab.href === pathname)?.label}
                    className='rounded-lg bg-custom-nav-white dark:bg-custom-nav-gray'
                    transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                    }}
                >
                    {TABS.map((tab) => (
                        <Link
                            href={tab.href}
                            key={tab.label}
                            data-id={tab.label}
                            aria-label={tab.label} // Added for accessibility
                            className='inline-flex h-9 w-9 items-center justify-center text-slate-400 dark:text-slate-500 transition-colors duration-100 focus-visible:outline-2'
                        >
                            {tab.icon}
                        </Link>
                    ))}
                </AnimatedBackground>
                <ThemeSwitch />
            </div>
        </div>
    );
}

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
