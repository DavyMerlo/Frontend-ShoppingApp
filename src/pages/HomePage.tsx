import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/SideBar";
import {GridItem} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import React from "react";
import ProfileGrid from "../components/ProfileGrid";
const HomePage = () => {

    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <Sidebar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <ProductGrid/>
            </GridItem>
        </>
    )
}

export default HomePage;