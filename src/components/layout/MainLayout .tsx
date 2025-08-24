import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
