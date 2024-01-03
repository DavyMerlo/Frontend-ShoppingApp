import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import useProductWebSocket from "../hooks/useProductWebSocket";

const ProductBox = () => {
  const {
    filteredMergedProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProductWebSocket();

  return (
    <Box pt={5} pl={0} pb={5} bg={"#232f3e"} borderBottomRadius={10}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 1, xl: 4 }} spacing={5}>
        {filteredMergedProducts.map((product, index) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
      >
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            _hover={{
              background: "#ff9900",
              color: "#f2f2f2",
            }}
            py={3}
            px={5}
            bg={"#f2f2f2"}
            color={"#000000"}
            borderRadius={5}
            cursor="pointer"
          >
            {isFetchingNextPage ? "Loading..." : "Show More"}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductBox;
