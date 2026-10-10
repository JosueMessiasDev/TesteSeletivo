import logo from '../../assets/logo.svg'; // use o mesmo caminho do Header
import './Footer.scss';

const LINK_GROUPS = [
    {
        title: 'Institucional',
        links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
    },
    {
        title: 'Ajuda',
        links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
    },
    {
        title: 'Termos',
        links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
    },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <img src={logo} alt="Econverse" width={110} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <ul className="footer__social" aria-label="Redes sociais">
                        <li>
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="0.5" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className="footer__nav" aria-label="Links do rodapé">
                    {LINK_GROUPS.map((group) => (
                        <div key={group.title} className="footer__group">
                            <h2>{group.title}</h2>
                            <ul>
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>

            <p className="footer__copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </footer>
    );
}