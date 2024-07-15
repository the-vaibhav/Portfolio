import MainPage from "../components/MainPage";
import Nav from "../components/Navbar";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto" >
      <div className="min-h-screen flex">
        <Nav></Nav>
        <MainPage></MainPage>
      </div>
    </div>
  );
}
