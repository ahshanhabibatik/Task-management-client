import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import { FaBook, FaProductHunt } from "react-icons/fa";




const Dashboard = () => {
    const { user } = useContext(AuthContext);
    
  
    return (
        <div>
           
        <Navbar></Navbar>
       
         <div className="drawer lg:drawer-open ">
             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
             <div className="drawer-content flex flex-col p-10">
                 <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute left-0 top-2 btn cursor-pointer bg-gray-300 hover:bg-[#9fdb64]">open dashboard</label>
                 <Outlet></Outlet>

                 
             </div>
             <div className="drawer-side">
                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                 <ul className="menu p-4 w-80 h-full bg-gray-300 text-base-content">
                     {/* Sidebar content here */}

                     <div className="p-4">
                         <div className="text-center">
                             <img className="w-20 h-20 rounded-full mx-auto mb-2" src={user.photoURL} alt="Profile" />
                             
                                     <h4 className="text-lg font-bold pb-2">
                                         {user.displayName}
                                         
                                     </h4>
                                     <p className="text-gray-600 ">{user.email}</p>
                                     <p className="pt-3 font-medium">task management dashboard</p>

                         </div>
                     </div>
                     <hr className='border-2 mb-5 border-black' />

                     <li> <Link to="/dashboard/createtask"><FaBook></FaBook> Create New Task</Link> </li>
                         <li className="my-2"> <Link to="/dashboard/alltask"><FaProductHunt></FaProductHunt>See Previous Tasks</Link> </li>
                 </ul>

             </div>
         </div>
         <Footer></Footer>
     </div>
    );
};

export default Dashboard;