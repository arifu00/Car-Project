import { Outlet } from "react-router-dom";
import NavBar from "../SharedStyle/NavBar/NavBar";
import Footer from "../SharedStyle/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
