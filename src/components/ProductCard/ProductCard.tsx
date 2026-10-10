import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__content"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />
        <h3 className="product-card__name">{product.descriptionShort}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__installments">
          ou 2x de {formatPrice(product.price / 2)} sem juros
        </p>
        <p className="product-card__shipping">Frete grátis</p>
      </button>
      <button
        type="button"
        className="product-card__buy"
        onClick={() => onSelect(product)}
      >
        COMPRAR
      </button>
    </article>
  );
}