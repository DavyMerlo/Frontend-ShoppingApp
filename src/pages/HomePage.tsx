import ProductGrid from "../components/ProductGrid";
import {GridItem} from "@chakra-ui/react";
import React from "react";
import ProductSidebar from "../components/ProductSideBar";


const HomePage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <ProductSidebar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <ProductGrid/>
            </GridItem>
        </>
    )
}

export default HomePage;