import {createBrowserRouter} from "react-router-dom";
import React from "react";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import LogOutPage from "./pages/LogOutPage";
import PasswordBox from "./components/PasswordBox";
import ProfileBox from "./components/ProfileBox";

const router = createBrowserRouter([
    {
        path: 'login',
        element: <AuthPage/>,
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
            children: [
                {
                    index:true ,
                    element: <ShopPage/>
                },
                {
                    path:'shop' ,
                    element: <ShopPage/> },
                {
                    path:'profile' ,
                    element: <ProfilePage/> ,
                    children: [
                        {
                            path:'overview',
                            element: <ProfileBox/> ,
                        },
                        {
                            path:'password',
                            element: <PasswordBox/> ,
                        },
                    ]
                },
                // {
                //     path:'password' ,
                //     element: <PasswordPage/>
                // },
                {
                    path:'logout' ,
                    element: <LogOutPage/>
                }
            ]
    }
]);

export default router;