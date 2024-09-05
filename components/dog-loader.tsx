import React, { forwardRef } from 'react';

export const DogSpinner = () => (
    <div
        className="animate-spin absolute left-1/2 top-1/2"
        style={{
            marginLeft: 'calc(0px - var(--spinner-size) / 2)',
            marginTop: 'calc(0px - var(--spinner-size))',
            width: 'var(--spinner-size)',
            height: 'var(--spinner-size)',
        }}
    >
        <svg
            className="h-full w-full text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
            ></path>
        </svg>
    </div>
);

interface DogContainerProps {
    children: React.ReactNode;
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(
    ({ children }, ref) => (
        <div
            ref={ref}
            className="voxel-dog mx-auto relative mt-[-20px] mb-[-40px] sm:mt-[-60px] sm:mb-[-140px] lg:mt-[-120px] lg:mb-[-200px] w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[640px] lg:h-[640px]"
        >
            {children}
        </div>
    )
);

DogContainer.displayName = 'DogContainer'; // Optionally set displayName for debugging

const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    );
};

export default Loader;
