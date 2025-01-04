import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

// Parent Component
const Layout = () => {
    return (
      <div>
       <Header />
        {/* Outlet renders the child route components */}
        <Outlet />
        <Footer />
      </div>
    );
  };

export default Layout