import {Grid, GridItem} from "@chakra-ui/react";
import {Outlet, } from "react-router-dom";
import React from "react";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Grid
                templateAreas={`"header header"
                  "side main"
                  "side navbar"
                  "side footer"`}
                gridTemplateRows={'160px 1fr'}
                gridTemplateColumns={'400px 1fr'}
                h='200px'
                fontWeight='bold'
            >
                <GridItem area={'header'}>
                    <Header/>
                </GridItem>
                <>
                    <Outlet/>
                </>
            </Grid>
        </>
    )
}

export default Layout;