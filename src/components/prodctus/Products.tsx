import { useContext, useRef } from "react";
import { ProductsContext } from "../../Context/ProductContext";
import "../../scss/products.scss"

type ProductsProps = {
    start?: number;
    count?: number;
};

const Products = ({ start = 0, count = 4 }: ProductsProps) => {
    const { products, openCart } = useContext(ProductsContext);
    const listRef = useRef<HTMLDivElement | null>(null);
    const list = products ?? [];

    const visible = Array.from({ length: count }, (_, i) =>
        list.length > 0 ? list[(start + i) % list.length] : undefined
    );

    const handleScroll = (direction: "left" | "right") => {
        if (!listRef.current) return;

        const scrollAmount = 322;
        listRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    const handleCardKeyDown = (
        event: React.KeyboardEvent<HTMLElement>,
        product: NonNullable<(typeof visible)[number]>
    ) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCart(product);
        }
    };

    return (
        <div className="products-carousel">
            <button
                type="button"
                className="products-nav products-nav-left"
                onClick={() => handleScroll("left")}
                aria-label="Rolar produtos para a esquerda"
            >
                &#8249;
            </button>

            <div className="products" ref={listRef}>
                {visible.map((product, index) =>
                    product ? (
                        <article
                            className="product-section"
                            key={start + index}
                            role="button"
                            tabIndex={0}
                            onClick={() => openCart(product)}
                            onKeyDown={(event) => handleCardKeyDown(event, product)}
                            aria-label={`Abrir detalhes de ${product.productName}`}
                        >
                            <section>
                                <img src={product.photo} alt={product.descriptionShort} />

                                <div className='product-details'>
                                    <p>{product.descriptionShort}</p>
                                    <span className="old-price">R$ 30,90</span>
                                    <span className="current-price">
                                        {product.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </span>
                                    <span className="installment">ou 2x de R$ 49,95 sem juros</span>
                                    <span className="free-shipping">Frete grátis</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        openCart(product);
                                    }}
                                >
                                    COMPRAR
                                </button>
                            </section>
                        </article>
                    ) : null
                )}
            </div>

            <button
                type="button"
                className="products-nav products-nav-right"
                onClick={() => handleScroll("right")}
                aria-label="Rolar produtos para a direita"
            >
                &#8250;
            </button>
        </div>
    );
};

export default Products;
