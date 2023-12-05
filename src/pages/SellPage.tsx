import {GridItem} from "@chakra-ui/react";
import React from "react";
import SellSideBar from "../components/SellSideBar";
import SelBox from "../components/SellBox";


const SellPage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <SellSideBar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <SelBox/>
            </GridItem>
        </>
    )
}

export default SellPage;