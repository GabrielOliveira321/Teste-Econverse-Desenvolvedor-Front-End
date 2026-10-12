import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export type CartItem = {
    product: Product;
    quantity: number;
};

export type ProductsContextType = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    selectedProduct: Product | null;
    selectedQuantity: number;
    cartItems: CartItem[];
    openCart: (product: Product) => void;
    closeCart: () => void;
    increaseSelectedQuantity: () => void;
    decreaseSelectedQuantity: () => void;
    confirmAddToCart: () => void;
    cartItemsCount: number;
    cartTotal: number;
};

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => {},
    open: false,
    setOpen: () => {},
    selectedProduct: null,
    selectedQuantity: 1,
    cartItems: [],
    openCart: () => {},
    closeCart: () => {},
    increaseSelectedQuantity: () => {},
    decreaseSelectedQuantity: () => {},
    confirmAddToCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0
});