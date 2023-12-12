import {create} from "zustand";
import User from "../entities/User";

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
    option: string;
    subOption: string;
    sideBarTitle: string;
    setOption: (newItem: string) => void;
    setSubOption: (newItem: string) => void;
    setSideBarTitle: (newItem: string) => void;
    setUser:(newUser: User | null) => void;
};

export const useMenuItemStore = create<menuItemStore>(set => ({
    user: null,
    option: "Account Information",
    subOption: "",
    sideBarTitle: "Categories",
    setOption: newItem => set(() => ({option: newItem})),
    setSubOption: newItem => set(() => ({subOption: newItem})),
    setSideBarTitle: newItem => set(() => ({sideBarTitle: newItem})),
    setUser: newUser => set(() => ({user: newUser}))
}));

interface AuthState {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}));

interface ErrorResponse {
    field: keyof FormState['fieldErrors'];
    message: string;
}

interface FormState {
    formData: {
        currentPassword: string;
        newPassword: string;
        confirmationPassword: string;
    };
    fieldErrors: {
        currentPassword: string;
        newPassword: string;
        confirmationPassword: string;
        generic: string;
    };
    setFormData: (data: Partial<FormState['formData']>) => void;
    setFieldError: (error: ErrorResponse) => void;
}

export const useFormStore = create<FormState>((set) => ({
    formData: {
        currentPassword: '',
        newPassword: '',
        confirmationPassword: ''
    },
    fieldErrors: {
        currentPassword: '',
        newPassword: '',
        confirmationPassword: '',
        generic: ''
    },
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    setFieldError: ({ field, message }) => set((state) => ({ fieldErrors: { ...state.fieldErrors, [field]: message } }))
}));