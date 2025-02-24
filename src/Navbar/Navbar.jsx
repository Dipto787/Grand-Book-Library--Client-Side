import { NavLink } from "react-router-dom";

const Navbar = () => {
    let Link = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/books'>Books</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar  fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-black font-bold  text-white  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> <img width={50} src="/src/assets/Logo/logo.png" alt="" /> Grand Book Library</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {Link}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn bg-amber-600 text-white">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;