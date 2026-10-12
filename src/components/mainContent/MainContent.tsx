import '../../scss/mainContent.scss';
import Cart from '../cart/Cart';
import Products from '../prodctus/Products';

const CATEGORIES = [
    { label: 'Tecnologia', icon: '/image.png', active: true },
    { label: 'Supermercado', icon: '/supermercados.png' },
    { label: 'Bebidas', icon: '/whiskey.png' },
    { label: 'Ferramentas', icon: '/ferramentas.png' },
    { label: 'Saúde', icon: '/saude.png' },
    { label: 'Esportes e Fitness', icon: '/corrida.png' },
    { label: 'Moda', icon: '/moda.png' },
];

const FILTERS = ['celular', 'acessórios', 'tablets', 'NOTEBOOKS', 'TVs', 'Ver todos'];

const PartnerBanner = () => {

    return (
        <div className="partners">
            <div className="partner-card">
                <div className="partner-content">
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
            </div>

            <div className="partner-card">
                <div className="partner-content">
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
            </div>
        </div>
    );
};

type VitrineProps = {
    start: number;
    filters?: boolean;
};

const Vitrine = ({ start, filters = false }: VitrineProps) => (
    <div className={filters ? 'related-products' : 'related-products compact'}>
        <h2>Produtos relacionados</h2>

        {filters && (
            <section>
                {FILTERS.map((label, i) => (
                    <button key={label} type="button" className={i === 0 ? 'active' : undefined}>
                        {label}
                    </button>
                ))}
            </section>
        )}

        <Products start={start} count={4} />
    </div>
);

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="main-content-inner">
                <div className="main-content-text">
                    <h1>Venha conhecer nossas promoções</h1>
                    <p><em>50% Off</em> nos produtos </p>

                    <button>Ver Produto</button>
                </div>
            </div>

            <Cart />


            <div className="categories">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.label}
                        className={cat.active ? 'category-wrapper active' : 'category-wrapper'}
                    >
                        <div className="category-item">
                            <button type="button" aria-label={`Abrir categoria ${cat.label}`}>
                                <img src={cat.icon} alt={cat.label} />
                            </button>
                        </div>
                        <span>{cat.label}</span>
                    </div>
                ))}
            </div>

            <Vitrine start={0} filters />
            <PartnerBanner />
            <Vitrine start={4} />
            <PartnerBanner />

            <div className="brands">
                <h3>Navegue por marcas</h3>
                <div className="brands-list">
                    <button type="button" aria-label="Abrir marca 1"><img src="/Logo.png" alt="Marca 1" /></button>
                    <button type="button" aria-label="Abrir marca 2"><img src="/Logo.png" alt="Marca 2" /></button>
                    <button type="button" aria-label="Abrir marca 3"><img src="/Logo.png" alt="Marca 3" /></button>
                    <button type="button" aria-label="Abrir marca 4"><img src="/Logo.png" alt="Marca 4" /></button>
                    <button type="button" aria-label="Abrir marca 5"><img src="/Logo.png" alt="Marca 5" /></button>
                </div>
            </div>

            <Vitrine start={8} />
        </main>
    )
}

export default MainContent;
