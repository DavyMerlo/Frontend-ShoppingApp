import ApiClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import CategoryResponse from "../responses/CategoryResponse";

const apiClient = new ApiClient<CategoryResponse>("/categories");

const useCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
})

export default useCategories;