import {create} from "zustand";

interface ProductQuery {
    categoryId?: number | null;
    subCategoryId?: number | null;
    searchText?: string;
}

interface ProductQueryStore {
    productQuery: ProductQuery;
    setCategoryId: (categoryId: number) => void;
    setSubCategoryId: (subCategoryId: number) => void;
    setSearchText: (searchText: string) => void;
}

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setCategoryId: (categoryId : any) => set((store) => ({productQuery: {...store.productQuery, categoryId}})),
    setSubCategoryId: (subCategoryId : any) => set((store) => ({productQuery: {...store.productQuery, subCategoryId}})),
    setSearchText: (searchText: string) => set((store) => ({productQuery: {...store.productQuery, searchText}})),
}));

export default useProductQueryStore;