import './Partners.scss';

const PARTNERS = [{ id: 'parceiros-1' }, { id: 'parceiros-2' }];

export default function Partners() {
    return (
        <section className="partners" aria-label="Parceiros">
            {PARTNERS.map(({ id }) => (
                <article key={id} className="partners__card">
                    <h2 className="partners__title">Parceiros</h2>
                    <p className="partners__text">Lorem ipsum dolor sit amet, consectetur</p>
                    <a href="#" className="partners__button">
                        CONFIRA
                    </a>
                </article>
            ))}
        </section>
    );
}