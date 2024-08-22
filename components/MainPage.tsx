import { div } from "three/examples/jsm/nodes/Nodes.js";
import About from "./About";
import { default as Header } from "./Header";
import { Shiba } from "./shiba";


export default function MainPage() {
    return <>
        <div className='relative z-10  justify-center items-center max-w-[700px] h-[380px] -mt-20 -mb-36 overflow-hidden'>
            <Shiba></Shiba>
        </div>
        <About></About>
    </>
}