import { FaAd, FaHome, FaShopify } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex text-black">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-2 p-4">
                    <li>
                        <NavLink to={'/dashboard/home'}>
                            <FaHome size={22}></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="" to={'/dashboard/review'}>
                            <FaAd size={22}></FaAd>
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/myCart'}>
                            <FaCartShopping size={22}></FaCartShopping>
                            My Cart
                        </NavLink>
                    </li>

                    <div className=" ">
                        <div className=" border-black border-b-2 "></div>
                        <li>
                            <NavLink to={'/'}>
                                <FaHome size={22}></FaHome>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'/books'}>
                                <FaShopify size={22}></FaShopify>
                                Shop Now
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="" to={'/contact'}>
                                <MdEmail size={22}></MdEmail>
                                Contact
                            </NavLink>
                        </li>

                    </div>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;