import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Router/AuthProvider";
import MyProfile from "./MyProfie";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);

  const navLink = <>
    <li className="text-xl font-semibold"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white"}>Home</NavLink></li>
    {
      user?.email && <li className="text-xl font-semibold"><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white"}>Dashboard</NavLink></li>
    }
    <li className="text-xl font-semibold"><NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white"}>Contact</NavLink></li>

  </>
  return (
    <div className="bg-lime-600">
      <div className="navbar shadow-lg">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52">
              {
                navLink
              }
            </ul>
          </div>
          <div className="flex ml-2 font-serif">
            <span className="lg:text-2xl font-bold mr-1 lg:mr-2"><img className="w-8" src="https://i.ibb.co/xXK8JbY/46cd20a33efe24abce136ee09cea122a-removebg-preview.png" alt="logo" />  </span> <span className="text-white mt-1.5 lg:mt-0 font-bold lg:text-2xl">ACC Task</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navLink
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ? <>
              <button onClick={logOut} className="btn btn-ghost lg:text-xl text-white font-semibold">LogOut</button>
              <MyProfile></MyProfile>
            </>
              : <li className="text-xl text-white font-semibold"><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline" : "text-white"}>Login</NavLink></li>

          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;