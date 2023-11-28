import ApiClient from "../services/api-client";
import ProductResponse from "../responses/ProductResponse";
import useProductQueryStore from "../services/store";
import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms";

const apiClient = new ApiClient<ProductResponse>("/products");

const useProducts = () => {
    const productQuery = useProductQueryStore(p => p.productQuery);

    return useInfiniteQuery<ProductResponse, Error>({
        queryKey: ["products", productQuery],
        queryFn: ({pageParam = 0}) =>
            apiClient.getAll({params: {
                    category: productQuery.categoryId,
                    subcategory: productQuery.subCategoryId,
                    search: productQuery.searchText,
                    page: pageParam
                }}),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage?.result.next ? allPages.length : undefined;
        },
        staleTime: ms('24h')
    });
}

export default useProducts;
