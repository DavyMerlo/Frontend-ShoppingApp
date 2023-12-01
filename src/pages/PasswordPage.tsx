import {GridItem} from "@chakra-ui/react";
import ProfileSideBar from "../components/ProfileSideBar";
import React from "react";
import PasswordBox from "../components/PasswordBox";


const PasswordPage = () => {
    return (
        <>
            <>
                <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                    <ProfileSideBar/>
                </GridItem>
                <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                    <PasswordBox/>
                </GridItem>
            </>
        </>
    )
}

export default PasswordPage;