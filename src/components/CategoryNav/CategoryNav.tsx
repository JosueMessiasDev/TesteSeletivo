import { useState } from 'react';
import { CATEGORIES } from './categories';
import './CategoryNav.scss';

export default function CategoryNav() {
    const [active, setActive] = useState(CATEGORIES[0].name);

    return (
        <nav className="categories" aria-label="Compre por categoria">
            <ul className="categories__list">
                {CATEGORIES.map(({ name, icon }) => (
                    <li key={name}>
                        <button
                            type="button"
                            className={`categories__item ${name === active ? 'is-active' : ''}`}
                            aria-pressed={name === active}
                            onClick={() => setActive(name)}
                        >
                            <span className="categories__tile" aria-hidden="true">
                                {icon}
                            </span>
                            <span className="categories__label">{name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}