import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function Resume() {
    return <div className="max-w-7xl mx-auto">
        <div className="min-h-screen flex">
            <Navbar></Navbar>
            <main className="grow overflow-hidden px-6 mb-10 pb-10">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col relative">
                    <Header></Header>
                </div>
            </main>
        </div>
    </div>
}