import * as Tooltip from '@radix-ui/react-tooltip';
import Link from "next/link";

// @ts-ignore
export default function TooltipIcon({ icon, name, path, isActive }) {
    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Link
                        href={path}
                        data-id={name}
                        aria-label={name}
                        className={`inline-flex h-9 w-9 items-center justify-center transition-colors duration-100 focus-visible:outline-2 ${isActive
                            ? 'text-teal-600 dark:text-teal-600'
                            : 'text-slate-400 hover:text-slate-500 dark:hover:text-slate-400 dark:text-slate-500'
                            }`}>
                        {icon}
                    </Link>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="rounded-lg p-2 text-sm text-custom-text-gray dark:text-custom-text-lightgray leading-none bg-custom-nav-white dark:bg-custom-nav-gray shadow-lg select-none animate duration-400 ease-in-out transform-gpu opacity-100 z-50" sideOffset={12}>
                        {name}
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}