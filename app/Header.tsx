import { CatIcon, DogIcon, FootprintsIcon, PawPrint, PawPrintIcon } from "lucide-react";
import { GiPanda } from "react-icons/gi";
import ThemeSwitch from "../components/ThemeSwitcher";
/* 
export default function Header() {
    return (
        <div className='fixed w-full md:sticky top-0 shrink-0 overflow-y-auto no-scrollbar z-50 backdrop-filter backdrop-blur-lg'>
            <div className='h-full w-full flex flex-row justify-between'>
                <nav className='w-full'>
                    <ul className="flex items-center mt-2 px-6 justify-between">
                        <li className="ml-2">
                            <a href="/" className="">
                                <h1>Vaibhav Mhaske</h1>
                            </a>
                        </li>
                        <li className="mr-2">
                            <ThemeSwitch className="border rounded-lg p-2 bg-orange-300 hover:bg-orange-700 dark:bg-slate-700 dark:hover:bg-slate-900 w-10 h-10"></ThemeSwitch>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
 */
export default function Header() {
    return <header>
        <div className="flex items-center justify-between h-16 before:block" >
            <div className="grow flex justify-between md:justify-end space-x-4">
                <div className="flex flex-col justify-center ml-3" >
                    <a href="/" className="flex flex-row">
                        <DogIcon className="mr-1"></DogIcon>
                        <h1 className=" text-gray-800 dark:text-white font-sans font-bold"> Vaibhav Mhaske</h1>
                    </a>
                </div>
                <div>
                    <ThemeSwitch className="border rounded-lg p-2 bg-orange-300 hover:bg-orange-700 dark:bg-slate-700 dark:hover:bg-slate-900 w-10 h-10"></ThemeSwitch>
                </div>
            </div>
        </div>
    </header >
}
