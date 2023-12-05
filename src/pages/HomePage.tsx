import {GridItem} from "@chakra-ui/react";
import React from "react";
import HomeSideBar from "../components/HomeSideBar";
import HomeBox from "../components/HomeBox";


const HomePage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <HomeSideBar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <HomeBox/>
            </GridItem>
        </>
    )
}

export default HomePage;