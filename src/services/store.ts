import {create} from "zustand";

interface ProductQuery {
    categoryId?: number | null;
    subCategoryId?: number | null;
}

interface ProductQueryStore {
    productQuery: ProductQuery;
    setCategoryId: (categoryId: number) => void;
    setSubCategoryId: (subCategoryId: number) => void;
}

const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setCategoryId: (categoryId : any) => set((store) => ({productQuery: {...store.productQuery, categoryId}})),
    setSubCategoryId: (subCategoryId : any) => set((store) => ({productQuery: {...store.productQuery, subCategoryId}})),
}));

export default useProductQueryStore;