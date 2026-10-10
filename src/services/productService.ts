import type { Product, ProductsResponse } from '../types/product';

const API_PATH =
  '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const API_URL = `/api-econverse${API_PATH}`;

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Falha ao carregar produtos');
  const data: ProductsResponse = await response.json();
  return data.products;
}