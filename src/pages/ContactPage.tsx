import {GridItem} from "@chakra-ui/react";
import React from "react";
import ContactSideBar from "../components/ContactSideBar";
import ContactBox from "../components/ContactBox";


const ContactPage = () => {
    return (
        <>
            <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                <ContactSideBar/>
            </GridItem>
            <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                <ContactBox/>
            </GridItem>
        </>
    )
}

export default ContactPage;