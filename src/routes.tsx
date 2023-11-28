import {createBrowserRouter} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import LogOutPage from "./pages/LogOutPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage/>,
    },
    {
        path: '/dashboard',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
            children: [
                { index:true , element: <HomePage/> },
                { path:'dashboard/home' , element: <HomePage/> },
                { path:'dashboard/profile' , element: <ProfilePage/> },
                { path:'dashboard/logout' , element: <LogOutPage/> }
            ]
    }
]);

export default router;