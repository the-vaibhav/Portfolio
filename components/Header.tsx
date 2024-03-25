import { CatIcon, DogIcon, FootprintsIcon, PawPrint, PawPrintIcon } from "lucide-react";
import { GiPanda } from "react-icons/gi";
import ThemeSwitch from "./ThemeSwitcher";

export default function Header() {
    return <header>
        <div className="flex items-center justify-between h-16 before:block" >
            <div className=" flex-grow flex justify-between md:justify-end space-x-4">
                <div className="flex flex-col justify-center ml-3" >
                    <a href="/" className="flex flex-row">
                        <DogIcon className="mr-1"></DogIcon>
                        <h1 className=" text-gray-800 dark:text-white font-sans font-bold"> Vaibhav Mhaske</h1>
                    </a>
                </div>
                <div>
                    <ThemeSwitch className="border dark:text-black  text-white rounded-lg p-2 dark:bg-orange-300 dark:hover:bg-orange-500 bg-purple-500 hover:bg-purple-600 w-10 h-10"></ThemeSwitch>
                </div>
            </div>
        </div>
    </header >
}
