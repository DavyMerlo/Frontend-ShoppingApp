import {GridItem} from "@chakra-ui/react";
import HomeSideBar from "../components/HomeSideBar";
import HomeBox from "../components/HomeBox";
import React from "react";
import CartSideBar from "../components/CartSideBar";
import CartBox from "../components/CartBox";

const CartPage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <CartSideBar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <CartBox/>
            </GridItem>
        </>
    )
}

export default CartPage;