import '../../scss/hender.scss'

const Heder = () => {
    return (
        <header className="header">
            <div className="header-info">
                <span>Compra <em>100% segura</em></span>
                <span><em>Frete grátis</em> acima de R$ 200</span>
                <span><em>Parcele</em> suas compras</span>
            </div>


            <div className="header-middle">
                <div className="header-search">
                    <img className="img" src="/Logo.png" alt="Header Image" />

                    <div className="header-search-input">
                        <input type="text" placeholder="O que você está buscando?" />
                        <button onClick={() => {alert("Alert");}}><img src="/lupa.png" alt="Search" /></button>
                    </div>
                </div>

                <nav>
                    <button type="button" aria-label="Acessar menu de produtos"><img src="/Group.png" alt="" /></button>
                    <button type="button" aria-label="Acessar favoritos"><img src="/Heart.png" alt="" /></button>
                    <button type="button" aria-label="Acessar conta"><img src="/UserCircle.png" alt="" /></button>
                    <button type="button" aria-label="Acessar carrinho"><img src="/ShoppingCart.png" alt="" /></button>
                </nav>
            </div>

            <div className="header-MoreOptions">
                <button type="button">Todas Categorias</button>
                <button type="button">Supermercado</button>
                <button type="button">Livros</button>
                <button type="button">Moda</button>
                <button type="button">Lançamentos</button>
                <button type="button" className="highlight">Ofertas do dia</button>
                <button type="button">Assinatura</button>
            </div>
        </header>
    )
}

export default Heder