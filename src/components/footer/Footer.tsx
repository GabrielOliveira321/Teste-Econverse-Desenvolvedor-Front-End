import '../../scss/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter-section">
                <div className="newsletter-text">
                    <h3>Inscreva-se na nossa newsletter</h3>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className="newsletter-form">
                    <div className="inputs-group">
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="email" placeholder="Digite seu e-mail" />
                        <button>INSCREVER</button>
                    </div>
                    <label className="terms-label">
                        <input type="checkbox" name="newsletter" value="yes" />
                        <span>Aceito os termos e condições</span>
                    </label>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/Logo.png" alt="Econverse Logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="social-icons">
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M14 8.5V6.8c0-.8.2-1.2 1.4-1.2H17V2.2C16.6 2.1 15.6 2 14.5 2 12 2 10.3 3.5 10.3 6.3v2.2H8V12h2.3v8H14v-8h2.4l.4-3.5H14z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-column work-sans">
                            <h4>Institucional</h4>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Movimento</a></li>
                                <li><a href="#">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div className="footer-column work-sans">
                            <h4>Ajuda</h4>
                            <ul>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Fale Conosco</a></li>
                                <li><a href="#">Perguntas Frequentes</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Termos</h4>
                            <ul>
                                <li><a href="#">Termos e Condições</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;