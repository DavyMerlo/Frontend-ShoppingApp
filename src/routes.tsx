import {createBrowserRouter} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage/>,
    },
    {
        path: '/dashboard',
        element: <HomePage/>,
    }
]);

export default router;