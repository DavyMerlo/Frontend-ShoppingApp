import React from "react";
import {GridItem} from "@chakra-ui/react";
import ProfileSideBar from "../components/ProfileSideBar";
import {Outlet} from "react-router-dom";

const ProfilePage = () => {
    return (
        <>
            <>
                <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                    <ProfileSideBar/>
                </GridItem>
                <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                    <Outlet/>
                </GridItem>
            </>
        </>
    )
}

export default ProfilePage;