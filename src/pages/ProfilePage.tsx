import React from "react";
import ProfileGrid from "../components/ProfileGrid";
import {GridItem} from "@chakra-ui/react";
import Sidebar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";
import ProfileSideBar from "../components/ProfileSideBar";

const ProfilePage = () => {

    return (
        <>
            <>
                <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                    <ProfileSideBar/>
                </GridItem>
                <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                    <ProfileGrid/>
                </GridItem>
            </>
        </>
    )
}

export default ProfilePage;