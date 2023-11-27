import {Box, Button,SimpleGrid} from '@chakra-ui/react';
import React from 'react'
import useProducts from "../hooks/useProducts";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";

const ProductGrid = () => {

    const { data,
        isLoading,
        error ,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage} = useProducts();

    return (
       <Box pt={5} pl={0} pb={5} bg={"#232f3e"} borderBottomRadius={10}>
           <SimpleGrid columns={{ sm: 1, md: 2, lg: 1, xl: 4}}
                       spacing={5}>
               {data?.pages.map((page, index)=>
                   <React.Fragment key={index}>
                       {page.result.products.map((product) =>(
                           <ProductCardContainer key={product.id}>
                               <ProductCard product={product}/>
                           </ProductCardContainer>
                       ))}
                   </React.Fragment>)}
           </SimpleGrid>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
              {hasNextPage &&
                  <Button onClick={() => fetchNextPage()} marginY={5} _hover={{
                      background: "#ff9900",
                      color: "#f2f2f2",
                  }}>
                      {isFetchingNextPage ? 'Loading...' : 'Show More'}
                  </Button>}
          </Box>
       </Box>
    )
}

export default ProductGrid;
