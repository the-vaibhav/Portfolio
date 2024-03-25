import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export default function Description() {
    return <div className="mt-5">
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

}