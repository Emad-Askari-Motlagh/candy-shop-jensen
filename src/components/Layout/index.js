import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../Header";
import "./Layout.scss";

export default function Layout() {
  //persist product filters and user on server side renders

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
