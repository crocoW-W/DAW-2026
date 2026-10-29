import { ProductService } from "../services/product-service.ts";

export function useProducts() {
    return ProductService.listAll();
}