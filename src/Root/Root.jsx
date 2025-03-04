import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    let location = useLocation();
    console.log(location)
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                {location.pathname === '/register' && '/login' ? undefined : <Navbar></Navbar>}
            </div>
            <Outlet></Outlet>
            <div>
                {location.pathname === '/register' && '/login' ? undefined : <Footer></Footer>}
            </div>

        </div>
    );
};

export default Root;