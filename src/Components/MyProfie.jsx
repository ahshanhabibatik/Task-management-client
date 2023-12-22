import { useContext } from "react";
import { AuthContext } from "../Router/AuthProvider";
import { NavLink } from "react-router-dom";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
   
    return (
        <>
             
           
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={user.photoURL} />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <div className="w-10 ml-20 rounded-full">
                <img src={user?.photoURL} />
                </div>
                <div className="my-4 text-center font-semibold text-xl text-green-600">{user.displayName}'s Account</div>
                <li><button><NavLink to="/addeditems">My Added Food Items</NavLink></button></li>
                <li className="my-3"><button ><NavLink to="/addfood">Add a food item</NavLink></button></li>
                <li><button ><NavLink to="/myorder">My ordered items</NavLink></button></li>

            </ul>
            </div>
                
        </>
    );
};

export default MyProfile;