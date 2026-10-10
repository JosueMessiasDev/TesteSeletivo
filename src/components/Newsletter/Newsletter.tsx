import { useState } from 'react';
import type { FormEvent } from 'react';
import './Newsletter.scss';

export default function Newsletter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [sent, setSent] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSent(true);
        setName('');
        setEmail('');
        setAccepted(false);
    }

    return (
        <section className="newsletter" aria-labelledby="newsletter-title">
            <div className="newsletter__inner">
                <div className="newsletter__text">
                    <h2 id="newsletter-title" className="newsletter__title">
                        Inscreva-se na nossa newsletter
                    </h2>
                    <p className="newsletter__description">
                        Assine a nossa newsletter e receba as novidades e conteúdos
                        exclusivos da Econverse.
                    </p>
                </div>

                <form className="newsletter__form" onSubmit={handleSubmit}>
                    <div className="newsletter__fields">
                        <label className="sr-only" htmlFor="newsletter-name">
                            Seu nome
                        </label>
                        <input
                            id="newsletter-name"
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label className="sr-only" htmlFor="newsletter-email">
                            Seu e-mail
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit">Inscrever</button>
                    </div>

                    <label className="newsletter__terms">
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            required
                        />
                        Aceito os termos e condições
                    </label>

                    {sent && (
                        <p className="newsletter__success" role="status">
                            Inscrição realizada com sucesso!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}