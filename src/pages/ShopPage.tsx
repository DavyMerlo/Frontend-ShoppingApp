import ProductBox from "../components/ProductBox";
import {GridItem} from "@chakra-ui/react";
import React from "react";
import ProductSidebar from "../components/ProductSideBar";

const ShopPage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <ProductSidebar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <ProductBox/>
            </GridItem>
        </>
    )
}

export default ShopPage;