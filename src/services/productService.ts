import type { Product, ProductsResponse } from '../types/product';

const API_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Falha ao carregar produtos');
  const data: ProductsResponse = await response.json();
  return data.products;
}