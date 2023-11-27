import useCategories from "./useCategories";

const useCategory = (id?: number) => {
    const { data: categories } = useCategories();
    return categories?.result.categories.find(
        (p) => p.id === id
    );
}

export default useCategory;