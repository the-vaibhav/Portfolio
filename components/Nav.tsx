"use client"

import { useKBar } from "kbar";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
    FiBookOpen,
    FiClock,
    FiCommand,
    FiHeadphones,
    FiHome,
    FiMoon,
    FiPaperclip,
    FiSun,
    FiUser,
    FiZap,
} from "react-icons/fi";

const NavbarItems = [
    { name: "Home", slug: "/", icon: FiHome },
    { name: "About", slug: "/about", icon: FiUser },
    { name: "Now", slug: "/now", icon: FiClock },
    { name: "Links", slug: "/links", icon: FiPaperclip },
    { name: "Guestbook", slug: "/guestbook", icon: FiBookOpen },
    { name: "Spotify", slug: "/spotify", icon: FiHeadphones },
    { name: "Dashboard", slug: "/dashboard", icon: FiZap },
];

const NavBarItem = ({ item, isActive, onClick, tooltipVisibility, setTooltipVisibility, index }) => (
    <button
        className={`w-full flex justify-center items-center ${isActive ? "dark:bg-zinc-700 bg-zinc-800" : "dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800"} shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out relative`}
        onMouseLeave={() => setTooltipVisibility({ ...tooltipVisibility, [index]: false })}
        onMouseEnter={() => setTooltipVisibility({ ...tooltipVisibility, [index]: true })}
        onClick={onClick}
    >
        <div className="p-2">
            <item.icon size="1rem" className="text-zinc-100" />
        </div>
        {tooltipVisibility[index] && (
            <span className="absolute text-[0.75rem] leading-none left-full p-[0.62rem] rounded shadow-xl text-zinc-200 dark:bg-zinc-700 bg-zinc-800 transform translate-x-2">
                {item.name}
            </span>
        )}
    </button>
);

export default function NavBar({ path }: { path: string }) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { query } = useKBar();
    const [mounted, setMounted] = useState(false);
    const [tooltipVisibility, setTooltipVisibility] = useState({});

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full min-h-full h-full flex flex-col justify-start items-center pt-6">
            <div className="flex flex-col gap-4">
                {NavbarItems.map((item, index) => (
                    <NavBarItem
                        key={item.slug}
                        item={item}
                        isActive={path === item.slug}
                        onClick={() => router.push(item.slug)}
                        tooltipVisibility={tooltipVisibility}
                        setTooltipVisibility={setTooltipVisibility}
                        index={index}
                    />
                ))}
                <div className="flex flex-col gap-4">
                    {mounted && (
                        <button
                            className="w-full flex justify-center items-center dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <div className="p-2 text-zinc-100">
                                {theme === "dark" ? <FiSun /> : <FiMoon />}
                            </div>
                        </button>
                    )}
                    <button
                        className="w-full flex justify-center items-center dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-700 hover:bg-zinc-800 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
                        onClick={query.toggle}
                    >
                        <div className="p-2">
                            <FiCommand size="1rem" className="text-zinc-100" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="border-r-2 dark:border-zinc-800 border-zinc-500 h-full mt-4"></div>
        </div>
    );
}