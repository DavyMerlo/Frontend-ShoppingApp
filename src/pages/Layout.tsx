import Header from "../components/Header";
import {Box} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Box padding={5}>
                <Outlet/>
            </Box>
        </>
    )
}

export default Layout;