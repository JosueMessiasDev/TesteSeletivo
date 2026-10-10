import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { getProducts } from '../services/productService';

let cache: Promise<Product[]> | null = null;

function loadProducts() {
  if (!cache) {
    cache = getProducts().catch((err) => {
      cache = null; // permite tentar de novo se falhar
      throw err;
    });
  }
  return cache;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    loadProducts()
      .then((data) => {
        if (active) setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { products, loading, error };
}