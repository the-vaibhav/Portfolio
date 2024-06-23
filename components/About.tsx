import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
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
        <div className="mt-5">
            <div>
                <p>I am a Front-end Developer with passion for creating Interactive and responsive UI/UX User Interface, I have experience working with Javascript, Java, React, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
            </div>
            <li className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
                <a href=""><BsTwitterX className="h-6 w-5"></BsTwitterX></a>
                <a href=""><InstagramIcon></InstagramIcon></a>
                <a href=""><GithubIcon> </GithubIcon></a>
                <a href=""><LinkedinIcon></LinkedinIcon></a>
                <a href=""><MailIcon></MailIcon></a>
            </li>
        </div>
    </div>
}

