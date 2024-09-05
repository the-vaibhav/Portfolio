import "../styles/profilePic.css";
import { Typewriter } from "./animated/typewriter";

export default function About() {
    return <div className="static max-w-[700px] z-20">
        <div className="pt-8">
            <p className="border rounded-lg text-center  text-black bg-white bg-opacity-40 dark:text-white dark:bg-white dark:bg-opacity-10 p-3 mb-6">Hello, I&apos;m a Software Developer Based in India</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:mr-6">
                <div className="text-center">
                    <Typewriter onStop={true} className="text-4xl font-bold tracking-wide" texts={["वैभव म्हस्के", "Vaibhav Mhaske"]} />
                    <span className="inline-block animate-blink text-4xl font-normal text-black/40 dark:text-white/40 motion-reduce:hidden">
                        |
                    </span>
                </div>
                <p className="text-center text-custom-text-gray dark:text-custom-text-lightgray">Digital Craftman ( Developer / Gamer )</p>
            </div>
            <div className="home__img w-[120px] h-[120px] md:w-[150px] md:h-[150px] mt-5 md:mt-0">
            </div>
        </div>
        <div className="mt-3 md:mt-5">
            <div>
                <p className="text-custom-text-gray dark:text-custom-text-lightgray">I&apos;m a software engineer with a passion for creating seamless, user-friendly experiences. I thrive on turning complex problems into simple, elegant solutions and am always eager to tackle new challenges. Outside of coding, you&apos;ll find me exploring tech, following developments in science, or enjoying manga and manhwa. Let&apos;s connect and make something amazing together!</p>
            </div>
            <li className="flex flex-wrap gap-10 mt-[20px] md:mt-[37px] text-slate-500 dark:text-slate-400">
                <a href="https://github.com/the-vaibhav" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:scale-125">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_9914_10)"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_9914_10"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                </a>
                <a href="https://x.com/code_vaibhav" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" className="enable-background:new 0 0 24 24;" xmlSpace="preserve"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/vaibhavmhaske/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="30" width="30" version="1.1" id="Capa_1" viewBox="0 0 45.959 45.959" xmlSpace="preserve"><g><g><path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489    c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733    C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123    C8.729,6.477,8.416,7.256,7.847,7.811z"></path><path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path><path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711    c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67    C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797    c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473    c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path></g></g></svg>
                </a>
                {/* <a href="" className="flex gap-2 items-center hover:scale-125">
                    <svg height="30" width="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path></g></g></g></svg>
                </a> */}
                <a href="mailto:vaibhavmhaske.here@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center hover:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"></path></svg>
                </a>
            </li>
        </div>
    </div>
}