import About from "./About";
import { default as Header } from "./Header";
import { Shiba } from "./shiba";


export default function MainPage() {
    return <main className="grow overflow-hidden px-6 mb-10 pb-10">
        <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col relative">
            <Header></Header>
            <div className='relative z-10  justify-center items-center max-w-[700px] h-[380px] -mt-20 overflow-hidden'>
                <Shiba></Shiba>
            </div>
            <About></About>
        </div>
    </main>
}