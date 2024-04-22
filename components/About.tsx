import Description from "./Description";
import "./styles/style.css";


export default function About() {
    return <div className="max-w-[700px] relative z-20">
        <div className="pt-8 -mt-[135px]">
            <p className="border rounded-lg text-center  text-black bg-white bg-opacity-40 dark:text-white dark:bg-white dark:bg-opacity-10 p-3 mb-6">Hello, I&apos;m a Software Developer Based in India</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
                <h2 className="font-bold text-4xl">Vaibhav Mhaske</h2>
                <p>Digital Craftman ( Developer / Gamer )
                </p>
            </div>
            <div className="home__img md:w-1/2  mt-4 md:mt-0">
            </div>
        </div>
        <Description></Description>
    </div>
}

