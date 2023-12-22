import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import NotFound from "../Layouts/Pages/NotFound";
import Home from "../Layouts/Pages/Home";
import Register from "../Layouts/Pages/Register";
import Login from "../Layouts/Pages/Login";
import Dashboard from "../Layouts/Pages/Dashboard";
import Contact from "../Layouts/Pages/Contact";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../dashboardRoute.jsx/CreateTask";
import AllTask from "../dashboardRoute.jsx/AllTask";
import Update from "../dashboardRoute.jsx/Update";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]

    },
    {
        path: '/dashboard',
        element: (<PrivateRoute><Dashboard></Dashboard></PrivateRoute>),
        children: [
            {
                path: 'createtask',
                element: <CreateTask></CreateTask>
            },
            {
                path: 'alltask',
                element: <AllTask></AllTask>,

            },
            {
                path: 'alltask/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://task-server-rust.vercel.app/usertasks/${params.id}`),
            },

        ]

    }

]);

export default myRouter;