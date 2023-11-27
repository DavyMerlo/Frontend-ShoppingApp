import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";


const HomePage = () => {

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
               <GridItem paddingLeft={0} bg={"#f2f2f2"} area={'side'}>
                   <Sidebar/>
               </GridItem>
               <GridItem paddingTop={0} paddingRight={5} area={'main'}>
                   <ProductGrid/>
               </GridItem>
           </Grid>
       </>
    )
}

export default HomePage;