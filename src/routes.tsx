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
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import SellPage from "./pages/SellPage";

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
                    element: <HomePage/>
                },
                {
                    path:'shop' ,
                    element: <ShopPage/>
                },
                {
                    path:'cart' ,
                    element: <CartPage/>
                },
                {
                    path:'sell' ,
                    element: <SellPage/>
                },
                {
                    path:'contact' ,
                    element: <ContactPage/>
                },
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