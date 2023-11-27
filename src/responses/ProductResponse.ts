import Product from "../entities/Product";

export default interface ProductResponse{
    message: string;
    status: number;
    result: {
        count: number;
        totalPages: number,
        pageSize: number,
        currentPage: number,
        next: boolean,
        previous: boolean;
        products: Product[];
    }
}