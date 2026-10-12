import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ProductsContext } from "./ProductContext";
import type { Product } from "./ProductContext";
import getProducts from "../api/getProducts";

type ProductsProviderProps = {
    children: ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);

    useEffect(() => {
        getProducts()
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const openCart = (product: Product) => {
        const existing = cartItems.find((item) => item.product.productName === product.productName);
        setSelectedProduct(product);
        setSelectedQuantity(existing?.quantity ?? 1);
        setOpen(true);
    };

    const closeCart = () => {
        setOpen(false);
    };

    const increaseSelectedQuantity = () => {
        setSelectedQuantity((prev) => prev + 1);
    };

    const decreaseSelectedQuantity = () => {
        setSelectedQuantity((prev) => Math.max(1, prev - 1));
    };

    const confirmAddToCart = () => {
        if (!selectedProduct) {
            return;
        }

        setCartItems((prev) => {
            const existingIndex = prev.findIndex(
                (item) => item.product.productName === selectedProduct.productName
            );

            if (existingIndex === -1) {
                return [...prev, { product: selectedProduct, quantity: selectedQuantity }];
            }

            const next = [...prev];
            next[existingIndex] = {
                ...next[existingIndex],
                quantity: selectedQuantity
            };
            return next;
        });

        setOpen(false);
    };

    const cartItemsCount = useMemo(
        () => cartItems.reduce((total, item) => total + item.quantity, 0),
        [cartItems]
    );

    const cartTotal = useMemo(
        () => cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
        [cartItems]
    );

    return (
        <ProductsContext.Provider value={{
            products,
            setProducts,
            open,
            setOpen,
            selectedProduct,
            selectedQuantity,
            cartItems,
            openCart,
            closeCart,
            increaseSelectedQuantity,
            decreaseSelectedQuantity,
            confirmAddToCart,
            cartItemsCount,
            cartTotal
        }}>
            {children}
        </ProductsContext.Provider>
    );
};