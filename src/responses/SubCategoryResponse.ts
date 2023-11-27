import SubCategory from "../entities/SubCategory";

export default interface SubCategoryResponse{
    message: string;
    status: number;
    result: {
        subcategories: SubCategory[];
    }
}