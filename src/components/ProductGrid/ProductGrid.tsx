import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import type { Product } from '../../types/product';
import { getProducts } from '../../services/productService';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

const VISIBLE = 4;
const TABS = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

interface ProductGridProps {
  onSelect: (product: Product) => void;
}

export default function ProductGrid({ onSelect }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const maxIndex = Math.max(products.length - VISIBLE, 0);

  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <h2 id="showcase-title" className="showcase__title">
        Produtos relacionados
      </h2>

      <nav className="showcase__tabs" aria-label="Categorias">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`showcase__tab ${tab === activeTab ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {loading && <p className="showcase__status">Carregando produtos...</p>}
      {error && <p className="showcase__status">Não foi possível carregar os produtos.</p>}

      {!loading && !error && (
        <div className="showcase__carousel">
          <button
            type="button"
            className="showcase__arrow showcase__arrow--prev"
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            aria-label="Produtos anteriores"
          >
            ‹
          </button>

          <div className="showcase__viewport">
            <ul
              className="showcase__track"
              style={{ '--index': index } as CSSProperties}
            >
              {products.map((product) => (
                <li key={product.productName} className="showcase__item">
                  <ProductCard product={product} onSelect={onSelect} />
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="showcase__arrow showcase__arrow--next"
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            disabled={index === maxIndex}
            aria-label="Próximos produtos"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}