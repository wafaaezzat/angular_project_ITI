import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface Product{
    id: number;
    data: ProductLang[];
    price: number;
    discount: number;
    imageUrl?: string;
    category : Category;
    categoryId? :string;
    tags : Tag[];
    paymentTypes : PaymentType[];
}


export interface AllProductResponse {
    product: Product[],
    numberOfProducts:  number
}