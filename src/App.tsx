import { useState } from 'react';
import type { Product } from './types/product';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CategoryNav from './components/CategoryNav/CategoryNav';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Partners from './components/Partners/Partners';
import ProductModal from './components/ProductModal/ProductModal';

export default function App() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryNav />
        <ProductGrid onSelect={setSelected} />
        <Partners />
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </main>
    </>
  );
}