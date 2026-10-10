import { useState } from 'react';
import type { Product } from './types/product';
import ProductGrid from './components/ProductGrid/ProductGrid';

export default function App() {
  const [selected, setSelected] = useState<Product | null>(null);
  console.log(selected); // temporário, até criar o modal

  return (
    <main>
      <ProductGrid onSelect={setSelected} />
    </main>
  );
}