import { useState } from 'react';
import type { Product } from './types/product';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ProductModal from './components/ProductModal/ProductModal';

export default function App() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main>
      <ProductGrid onSelect={setSelected} />
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}