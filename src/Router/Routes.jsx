import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import CreateGroup from "../Pages/CreateGroup";
// import AllGroup from "../Pages/AllGroup";
// import MyGroup from "../Pages/MyGroup";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import GroupDetails from "../Pages/GroupDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateGroup from "../Pages/UpdateGroup";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Support from "../Components/Support";
import DashboardLayout from "../Layout/DashboardLayout";
import AllGroup from "../Pages/DashBoard/AllGroup";
import DashboardOverview from "../Pages/DashBoard/DashboardOverview";
import CreateGroup from "../Pages/DashBoard/CreateGroup";
import MyGroup from "../Pages/DashBoard/MyGroup";
// import DashboardOverview from "../Pages/DashboardOverview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('https://hobby-hub-server-psi.vercel.app/hobby'),
            },
            {
                path: 'allGroups',
                element: <AllGroup></AllGroup>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'support',
                element: <Support></Support>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardOverview></DashboardOverview>
            },

            {
                path: 'allGroup',
                element: <AllGroup></AllGroup>
            },
            {
                path: 'addGroup',
                element: <CreateGroup></CreateGroup>
            },
            {
                path: 'myGroup',
                element: <MyGroup></MyGroup>
            },

        ]
    },
    {
        path: '/group/:id',
        element: <GroupDetails></GroupDetails>
    },
    {
        path: '/updateGroup/:id',
        element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>
    },
    {
        path: 'login',
        element: <Login></Login>,
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/*',
        element: <Error></Error>
    },
]);

export default router;