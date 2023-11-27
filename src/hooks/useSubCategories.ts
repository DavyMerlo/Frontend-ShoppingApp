import ApiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import SubCategoryResponse from "../responses/SubCategoryResponse";
import useProductQueryStore from "../services/store";

const apiClient = new ApiClient<SubCategoryResponse>("/subcategories");

const useSubCategories = () => {
    const subCategoryQuery = useProductQueryStore(p => p.productQuery);

    return useQuery({
        queryKey: ["subcategories", subCategoryQuery],
        queryFn: () =>
            apiClient.getAll({params: {
                    category: subCategoryQuery.categoryId,
                }}),
    });
}

export default useSubCategories;