import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Books from "../Pages/Books/Books";
import Register from "../Pages/Authontication/Register";
import Login from "../Pages/Authontication/Login";
import ProtectedRoute from "../Components/Provider/ProtectedRoute";

let router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/books',
                element:<ProtectedRoute><Books></Books></ProtectedRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);

export default router;