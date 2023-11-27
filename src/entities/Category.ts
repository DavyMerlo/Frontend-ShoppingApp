import SubCategory from "./SubCategory";

export default interface Category {
    id: number;
    name: string;
    subCategory: SubCategory;
}