"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import ThemeSwitch from '../ThemeSwitcher';
import "../styles/globals.css";

export default function Nav() {
    const pathname = usePathname(); // Initialize usePathname

    // Function to determine if the link is active
    const isActive = (href: string) => pathname === href ? 'text-teal-600 dark:text-teal-600' : 'text-slate-400 hover:text-slate-500 dark:hover:text-slate-400 dark:text-slate-500';

    return (
        <div className='fixed w-full md:sticky bottom-0 md:top-0 h-16 md:w-24 shrink-0 md:h-screen overflow-y-auto no-scrollbar z-50 backdrop-filter backdrop-blur-lg'>
            <div className='h-full w-full flex flex-row md:flex-col justify-between after:flex-1 after:mt-auto'>
                <div className='hidden md:block md:flex-1'></div>
                <div className='flex-1 grow flex items-center w-full'>
                    <nav className='w-full'>
                        <ul className='md:space-y-4 flex flex-row items-center w-screen justify-evenly md:flex-col md:justify-start md:items-center md:w-24'>
                            {[
                                { href: '/', label: 'Home', icon: <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19"><path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path><path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path></svg> },
                                { href: '/about', label: 'About', icon: <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path><path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path></svg> },
                                { href: '/blog', label: 'Blog', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current" width="28" height="28"><path fillOpacity=".16" fillRule="nonzero" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path></svg> },
                                { href: '/projects', label: 'Projects', icon: <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fillOpacity=".16" d="M1 4h18v10H1z"></path><path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path></svg> },
                            ].map(({ href, label, icon }) => (
                                <li key={href} className='relative md:py-2 group'>
                                    <Link className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top0 after:bottom-0 ${isActive(href)}`} href={href}>
                                        <span className="sr-only">{label}</span>
                                        {icon}
                                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                            <li className='relative md:py-2 group'>
                                <a className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${isActive('/theme')}`}>
                                    <span className="sr-only">Theme</span>
                                    <ThemeSwitch />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 pr-1 text-xs leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Theme
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}