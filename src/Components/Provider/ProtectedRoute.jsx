import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let { user, loading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {
        return <h1>LOading.......</h1>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default ProtectedRoute;