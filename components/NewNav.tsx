import React from 'react';

const BottomNavBar = () => {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
            <div className="pointer-events-auto relative mx-auto flex h-full items-center overflow-y-scroll rounded-[14px] bg-mauve-light-1 px-0.5 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] dark:bg-mauve-dark-2 dark:shadow-[rgba(111,109,120,0.1)_0px_0px_30px,rgba(60,57,63,0.4)_0px_0px_0px_1px] sm:overflow-y-visible">
                <span className="absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-[6px] px-1 py-1.5 transition-all duration-300" style={{ left: '2px', width: '40px' }}>
                    <span className="h-full w-full rounded-[10px] bg-mauve-light-3 dark:bg-mauve-dark-3"></span>
                </span>
                <a
                    className="font-base z-20 inline-flex cursor-pointer items-center justify-center rounded-full px-2.5 text-center text-sm text-mauve-light-12 transition dark:text-mauve-dark-12 sm:text-base"
                    data-state="closed"
                    aria-label="Home"
                    href="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        className="h-5 w-5 stroke-mauve-light-12 dark:stroke-mauve-dark-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7 20v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.11.494-.11 1.054-.11h2.8c.56 0 .84 0 1.054.11a1 1 0 0 1 .437.437C13 11.76 13 12.04 13 12.6V20M9.018 1.764 2.235 7.039c-.453.353-.68.529-.843.75a2 2 0 0 0-.318.65C1 8.703 1 8.99 1 9.565V16.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 20 3.08 20 4.2 20h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V9.565c0-.575 0-.862-.074-1.126a2 2 0 0 0-.318-.65c-.163-.221-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.463a1 1 0 0 0-.523 0c-.194.053-.37.19-.721.463"
                        />
                    </svg>
                </a>
                <a
                    className="font-base z-20 inline-flex cursor-pointer items-center justify-center rounded-full px-2.5 text-center text-sm text-mauve-light-12 transition dark:text-mauve-dark-12 sm:text-base"
                    data-state="closed"
                    aria-label="Lab"
                    href="/lab"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        className="h-5 w-5 stroke-mauve-light-12 dark:stroke-mauve-dark-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.75"
                            d="M7 1v4.66c0 .218 0 .326-.033.413a.5.5 0 0 1-.138.198c-.07.06-.183.102-.409.185a7.5 7.5 0 1 0 5.16 0c-.226-.083-.339-.125-.409-.185a.47.47 0 0 1-.138-.198C11 5.986 11 5.878 11 5.66V1M5.5 1h7"
                        />
                    </svg>
                </a>
                <a
                    className="font-base z-20 inline-flex cursor-pointer items-center justify-center rounded-full px-2.5 text-center text-sm text-mauve-light-12 transition dark:text-mauve-dark-12 sm:text-base"
                    data-state="closed"
                    aria-label="More"
                    href="/more"
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-mauve-light-12 dark:stroke-mauve-dark-12"
                    >
                        <path
                            d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
                <div className="flex items-center">
                    <button data-state="closed" aria-label="Switch theme">
                        <span className="my-auto flex cursor-pointer select-none px-2.5">
                            <div className="h-5 w-5 rounded-[4px] bg-mauve-light-12"></div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomNavBar;
