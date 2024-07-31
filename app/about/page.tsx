import TextDecodeAnimation from "../../components/DecodeText";
import Header from "../../components/Header";
import Nav from "../../components/Navbar";

export default function Resume() {
    return <div className="max-w-7xl mx-auto">
        <div className="min-h-screen flex">
            <Nav></Nav>
            <main className="grow overflow-hidden px-6 mb-10 pb-10">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col relative">
                    <Header></Header>
                    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
                        <div className="grow">
                            <div className="max-w-[700px]">
                                <section>
                                    <TextDecodeAnimation time={100} hindiText="नमस्ते, मैं वैभव म्हस्के हूं!" englishText="Hello, I&apos;m Vaibhav Mhaske!" style="h1 mb-5 text-4xl leading-5 md:font-bold" />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
}