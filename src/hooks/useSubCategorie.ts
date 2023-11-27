import useSubCategories from "./useSubCategories";

const useSubCategory = (id?: number) => {
    const { data: subcategories } = useSubCategories();
    return subcategories?.result.subcategories.find(
        (p) => p.id === id
    );
}

export default useSubCategory;