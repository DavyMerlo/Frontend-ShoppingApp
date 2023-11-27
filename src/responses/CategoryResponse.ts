import Category from "../entities/Category";

export default interface CategoryResponse{
    message: string;
    status: number;
    result: {
        categories: Category[];
    }
}
