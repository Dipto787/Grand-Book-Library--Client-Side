import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    let location = useLocation();
    let unable = (location.pathname === '/register') || (location.pathname === '/login');
    console.log(location)
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                {
                    unable || <Navbar></Navbar>
                }
            </div>
            <Outlet></Outlet>
            <div>
                {unable || <Footer></Footer>}
            </div>

        </div>
    );
};

export default Root;