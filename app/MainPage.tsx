import About from "../components/About";
import { default as Header, default as UpperNav } from "../components/Header";

export default function MainPage() {
    return <main className="grow overflow-hidden px-6">

        <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col ">
            <Header></Header>
            <About></About>
            {/* <MainSection></MainSection> */}
        </div>
    </main>
}
