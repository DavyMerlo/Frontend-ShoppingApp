import {create} from "zustand";
import User from "../entities/User";
import storage from "../hooks/useStoredState";
import UseStoredState from "../hooks/useStoredState";

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

export const useProductQueryStore = create<ProductQueryStore>(set => ({
    productQuery: {},
    setCategoryId: (categoryId : any) => set((store) => ({productQuery: {...store.productQuery, categoryId}})),
    setSubCategoryId: (subCategoryId : any) => set((store) => ({productQuery: {...store.productQuery, subCategoryId}})),
    setSearchText: (searchText: string) => set((store) => ({productQuery: {...store.productQuery, searchText}})),
}));

type menuItemStore = {
    user: User | null;
    subOption: string;
    sideBarTitle: string;
    setSubOption: (newItem: string) => void;
    setSideBarTitle: (newItem: string) => void;
    setUser:(newUser: User | null) => void;
};

export const useMenuItemStore = create<menuItemStore>(set => ({
    user: null,
    subOption: "",
    sideBarTitle: "Categories",
    setSubOption: newItem => set(() => ({subOption: newItem})),
    setSideBarTitle: newItem => set(() => ({sideBarTitle: newItem})),
    setUser: newUser => set(() => ({user: newUser}))
}));