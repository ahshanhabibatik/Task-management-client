import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <div className="flex justify-center my-10"><span className="loading loading-spinner text-warning w-12 h-12"></span></div> ;

    if(!user?.email) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;