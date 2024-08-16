import MainPage from "../components/MainPage";
import Nav from "../components/Navbar";
import NewNav from "../components/NewNav";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen lg:flex lg:justify-center lg:items-center">
      <div className="flex">
        {/* <Nav></Nav> */}
        <NewNav></NewNav>
        <MainPage></MainPage>
      </div>
    </div>
  );
}