import About from "../components/About";
import UpperNav from "../components/Header";
import Nav from "../components/nav";
import MainPage from "./MainPage";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto" >
      <div className="min-h-screen flex">
        <Nav></Nav>
        <MainPage></MainPage>
        {/* <UpperNav></UpperNav> */}
        {/* <About></About> */}
      </div>
    </div>
  );
}
