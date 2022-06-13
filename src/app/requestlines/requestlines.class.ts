import { Product } from "../product/product.class";
import { Request } from "../request/request.class";

export class RequestLine {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 0;
    
    request!: Request;
    product!: Product;
}