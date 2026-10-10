import logo from '../../assets/logo.svg';
import shieldIcon from '../../assets/icon-shield.svg';
import truckIcon from '../../assets/icon-truck.svg';
import cardIcon from '../../assets/icon-card.svg';
import crownIcon from '../../assets/icon-crown.svg';
import { BoxIcon, CartIcon, HeartIcon, SearchIcon, UserIcon } from './icons';
import './Header.scss';

const NAV_ITEMS = [
    'TODAS CATEGORIAS',
    'SUPERMERCADO',
    'LIVROS',
    'MODA',
    'LANÇAMENTOS',
    'OFERTAS DO DIA',
];
const ACTIVE_ITEM = 'OFERTAS DO DIA';

export default function Header() {
    return (
        <header className="header">
            <div className="header__benefits">
                <ul className="header__benefits-list">
                    <li>
                        <img src={shieldIcon} alt="" width={20} height={20} />
                        <span>
                            Compra <strong>100% segura</strong>
                        </span>
                    </li>
                    <li>
                        <img src={truckIcon} alt="" width={20} height={20} />
                        <span>
                            <strong>Frete grátis</strong> acima de R$ 200
                        </span>
                    </li>
                    <li>
                        <img src={cardIcon} alt="" width={20} height={20} />
                        <span>
                            <strong>Parcele</strong> suas compras
                        </span>
                    </li>
                </ul>
            </div>

            <div className="header__main">
                <a href="/" className="header__logo">
                    <img src={logo} alt="Econverse, página inicial" width={139} height={42} />
                </a>

                <form
                    className="header__search"
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <input
                        type="search"
                        placeholder="O que você está buscando?"
                        aria-label="Buscar produtos"
                    />
                    <button type="submit" aria-label="Buscar">
                        <SearchIcon />
                    </button>
                </form>

                <div className="header__actions">
                    <button type="button" aria-label="Meus pedidos">
                        <BoxIcon />
                    </button>
                    <button type="button" aria-label="Favoritos">
                        <HeartIcon />
                    </button>
                    <button type="button" aria-label="Minha conta">
                        <UserIcon />
                    </button>
                    <button type="button" aria-label="Carrinho">
                        <CartIcon />
                    </button>
                </div>
            </div>

            <nav className="header__nav" aria-label="Categorias principais">
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className={item === ACTIVE_ITEM ? 'is-active' : ''}
                                aria-current={item === ACTIVE_ITEM ? 'page' : undefined}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#">
                            <img src={crownIcon} alt="" width={20} height={20} />
                            ASSINATURA
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}