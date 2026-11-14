import type { Product } from "../dtos/product.ts";
import { useState } from "react";
import { useEffect } from "react";
import { ProductService } from "../services/product-service.ts";

export function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ProductService.listAll()
            .then(setProducts)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [])

    return {products, loading, error}
}