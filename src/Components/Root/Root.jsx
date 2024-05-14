import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../../Routes/ScrollToTop";

const Root = () => {
  return (
    <ScrollToTop>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ScrollToTop>
  );
};

export default Root;
