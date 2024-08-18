import AnimatedBackground from '@/components/animated/animated-background';
import { Home, PhoneCall, Settings, User } from 'lucide-react';

export function AnimatedTabs() {
    const TABS = [
        {
            label: 'Home',
            icon: <Home className='h-5 w-5 dark:stroke-white' />,
        },
        {
            label: 'About',
            icon: <User className='h-5 w-5 dark:stroke-white' />,
        },
        {
            label: 'Services',
            icon: <Settings className='h-5 w-5 dark:stroke-white' />,
        },
        {
            label: 'Contact',
            icon: <PhoneCall className='h-5 w-5 dark:stroke-white' />,
        },
    ];

    return (
        <div className="fixed inset-x-0 bottom-0 z-[1000] mb-4 flex h-12 justify-center px-6">
            <div className="flex items-center rounded-xl border border-zinc-950/10 backdrop-filter backdrop-blur-lg p-2 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px]">
                <AnimatedBackground
                    defaultValue={TABS[0].label}
                    className='rounded-lg dark:bg-slate-700 '
                    transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                    }}
                >
                    {TABS.map((tab) => (
                        <button
                            key={tab.label}
                            data-id={tab.label}
                            type='button'
                            className='inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2'
                        >
                            {tab.icon}
                        </button>
                    ))}
                </AnimatedBackground>
            </div>
        </div>
    );
}
