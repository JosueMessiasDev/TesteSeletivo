import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductModal.scss';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.open) dialog.showModal();
    }, []);

    // Fecha com a tecla Esc
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') onClose();
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Fecha ao clicar no fundo escuro (fora da caixa)
    const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="product-modal"
            aria-labelledby="product-modal-title"
            onCancel={(event) => event.preventDefault()}
            onClose={onClose}
            onClick={handleBackdropClick}
        >
            <div className="product-modal__box">
                <button
                    type="button"
                    className="product-modal__close"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                        <path
                            d="M2 2l14 14M16 2L2 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <img
                    className="product-modal__image"
                    src={product.photo}
                    alt={product.productName}
                />

                <div className="product-modal__info">
                    <h2 id="product-modal-title" className="product-modal__name">
                        {product.productName}
                    </h2>
                    <p className="product-modal__price">{formatPrice(product.price)}</p>
                    <p className="product-modal__description">{product.descriptionShort}</p>
                    <button type="button" className="product-modal__link">
                        Veja mais detalhes do produto &gt;
                    </button>

                    <div className="product-modal__actions">
                        <div className="product-modal__quantity">
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                                aria-label="Diminuir quantidade"
                            >
                                −
                            </button>
                            <span aria-live="polite">{String(quantity).padStart(2, '0')}</span>
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => q + 1)}
                                aria-label="Aumentar quantidade"
                            >
                                +
                            </button>
                        </div>
                        <button type="button" className="product-modal__buy">
                            COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}