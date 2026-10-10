import type { CSSProperties } from 'react';
import { useId, useState } from 'react';
import type { Product } from '../../types/product';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

const VISIBLE = 4;
const TABS = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

interface ProductGridProps {
  onSelect: (product: Product) => void;
  title?: string;
  showTabs?: boolean;
  showSeeAll?: boolean;
  id?: string;
}

export default function ProductGrid({
  onSelect,
  title = 'Produtos relacionados',
  showTabs = true,
  showSeeAll = false,
  id,
}: ProductGridProps) {
  const titleId = useId();
  const { products, loading, error } = useProducts();
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const maxIndex = Math.max(products.length - VISIBLE, 0);

  return (
    <section
      id={id}
      className={`showcase ${showTabs ? '' : 'showcase--simple'}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="showcase__title">
        {title}
      </h2>

      {showSeeAll && (
        <a href="#produtos" className="showcase__see-all">
          Ver todos
        </a>
      )}

      {showTabs && (
        <nav className="showcase__tabs" aria-label="Categorias de produtos">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`showcase__tab ${tab === activeTab ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tab)}
              aria-pressed={tab === activeTab}
            >
              {tab}
            </button>
          ))}
        </nav>
      )}

      {loading && <p className="showcase__status">Carregando produtos...</p>}
      {error && (
        <p className="showcase__status" role="alert">
          Não foi possível carregar os produtos.
        </p>
      )}

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