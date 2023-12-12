import {Box, Button,SimpleGrid} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react'
import useProducts from "../hooks/useProducts";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import Product from "../entities/Product";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {useProductQueryStore} from "../services/store";

const ProductBox = () => {
    const { data, isLoading, error , isFetchingNextPage, fetchNextPage, hasNextPage} = useProducts();
    const categoryId = useProductQueryStore().productQuery.categoryId;
    const subCategoryId = useProductQueryStore().productQuery.subCategoryId;
    const [websocketProducts, setWebsocketProducts] = useState<Product[]>([]);

    useEffect(() => {
        const sock = new SockJS('http://localhost:8888/wss');
        const stompClient = new Client({ webSocketFactory: () => sock });
        stompClient.onConnect = () => {
            console.log('STOMP: Connected');
            stompClient.subscribe('/topic/products', (message) => {
                const receivedData = JSON.parse(message.body);
                handleWebSocketData(receivedData);
            });
        };
        stompClient.activate();
        return () => {
            stompClient.deactivate();
        };
    }, []);

    const handleWebSocketData = (receivedData : any) => {
        if (receivedData.product) {
            const newProduct = receivedData.product;
            if (newProduct.categoryId === categoryId && newProduct.category.subCategoryId === subCategoryId) {
                setWebsocketProducts((prevProducts) => [...prevProducts, newProduct]);
            }
        } else {
            setWebsocketProducts((prevProducts) => [...prevProducts, receivedData]);
        }
    };

    const filterUniqueProducts = (products: Product[]): Product[] => {
        const productMap = new Map<string, Product>();
        products.forEach((product) => {
            productMap.set(String(product.id), product);
        });
        return Array.from(productMap.values());
    };

    const uniqueDataProducts = data?.pages.flatMap((page) => page.result.products) || [];
    const uniqueMergedProducts = filterUniqueProducts([
        ...uniqueDataProducts,
        ...websocketProducts,
    ]);

    const filteredMergedProducts = uniqueMergedProducts.filter((product) => {
        return (
            (!categoryId || product.category.id === categoryId) &&
            (!subCategoryId || product.category.subCategory.id === subCategoryId)
        );
    });

    return (
        <Box pt={5} pl={0} pb={5} bg={"#232f3e"} borderBottomRadius={10}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 1, xl: 4 }} spacing={5}>
                {filteredMergedProducts.map((product, index) => (
                    <ProductCardContainer key={product.id}>
                        <ProductCard product={product} />
                    </ProductCardContainer>
                ))}
            </SimpleGrid>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={5}>
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
                        {isFetchingNextPage ? 'Loading...' : 'Show More'}
                    </Button>
                )}
            </Box>
        </Box>
    );
}

export default ProductBox;
