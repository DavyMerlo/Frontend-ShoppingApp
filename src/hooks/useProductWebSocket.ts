import { useEffect, useState } from "react";
import { useProductQueryStore } from "../services/store";
import useProducts from "./useProducts";
import Product from "../entities/Product";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const useProductWebSocket = () => {
    const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useProducts();
    const categoryId = useProductQueryStore().productQuery.categoryId;
    const subCategoryId = useProductQueryStore().productQuery.subCategoryId;
    const [websocketProducts, setWebsocketProducts] = useState<Product[]>([]);

    useEffect(() => {
        const sock = new SockJS("http://localhost:8888/wss");
        const stompClient = new Client({ webSocketFactory: () => sock });
        const handleWebSocketData = (receivedData : any) => {
          if (receivedData.product) {
            const newProduct = receivedData.product;
            setWebsocketProducts((prevProducts) => [...prevProducts, newProduct]);
          } else {
            setWebsocketProducts((prevProducts) => [...prevProducts, receivedData]);
          }
        };
        stompClient.onConnect = () => {
          console.log("STOMP: Connected");
          stompClient.subscribe("/topic/products", (message) => {
            const receivedData = JSON.parse(message.body);
            handleWebSocketData(receivedData);
          });
        };
        stompClient.activate();
        return () => {
          stompClient.deactivate();
        };
      }, [categoryId,subCategoryId]);

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

    return {
        filteredMergedProducts,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    };
};

export default useProductWebSocket;