import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductContext";
import "../../scss/cart.scss";

const Cart = () => {
  const {
    open,
    closeCart,
    selectedProduct,
    selectedQuantity,
    increaseSelectedQuantity,
    decreaseSelectedQuantity,
    confirmAddToCart
  } = useContext(ProductsContext);

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeCart}>
          &times;
        </button>

        {selectedProduct && (
          <div className="modal-content">
            <div className="product-image-container">
              <img src={selectedProduct.photo} alt={selectedProduct.productName} className="product-image" />
            </div>

            <div className="product-details">
              <div className="product-header">
                <h3 className="product-title">{selectedProduct.productName}</h3>

                <p className="product-price">
                  {selectedProduct.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
              </div>

              <div className="product-info">
                <p className="product-description">
                  {selectedProduct.descriptionShort}
                </p>

                <a href="#" className="product-link">
                  Veja mais detalhes do produto &gt;
                </a>
              </div>

              <div className="actions-container">
                <div className="quantity-selector">
                  <button type="button" onClick={decreaseSelectedQuantity}>-</button>
                  <span>{String(selectedQuantity).padStart(2, "0")}</span>
                  <button type="button" onClick={increaseSelectedQuantity}>+</button>
                </div>

                <button className="buy-button" onClick={confirmAddToCart}>
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;