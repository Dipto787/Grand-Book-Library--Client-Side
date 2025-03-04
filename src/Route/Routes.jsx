import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Books from "../Pages/Books/Books";
import Register from "../Pages/Authontication/Register";

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
                element:<Books></Books>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);

export default router;