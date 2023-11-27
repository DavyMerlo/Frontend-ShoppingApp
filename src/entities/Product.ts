import Category from "./Category";

export default interface Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    purchasePrice: number;
    sellingPrice: number;
    vat: number;
    category: Category;
}