import { AnimatedTabs } from "../components/AnimatedTabs";
import MainPage from "../components/MainPage";
import Nav from "../components/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen lg:flex lg:justify-center lg:items-center">
      <div className="flex">
        <Nav></Nav>
        {/* <AnimatedTabs /> */}
        <MainPage></MainPage>
      </div>
    </div>
  );
}