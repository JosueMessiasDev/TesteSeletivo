import logo from '../../assets/logo.svg';
import './Brands.scss';

const BRANDS = [1, 2, 3, 4, 5].map((id) => ({ id, name: 'Econverse', logo }));

export default function Brands() {
    return (
        <section className="brands" aria-labelledby="brands-title">
            <h2 id="brands-title" className="brands__title">
                Navegue por marcas
            </h2>

            <ul className="brands__list">
                {BRANDS.map((brand) => (
                    <li key={brand.id}>
                        <a href="#" className="brands__item" aria-label={brand.name}>
                            <img src={brand.logo} alt="" width={110} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}