"use client"
import { useState, createContext } from "react"

interface ProductCart {
    id: number;
    title: string;
    price: number;
    quantity: number
}

interface ProductCartItem {
    id: number;
    title: string;
    price: number
}

interface ProductCartContext {
    cartProducts: ProductCart[];
    /* addCartProducts: (product: ProductCartItem) => void;
    increaseQuatity: (id:number) => void;
    decreaseQuatity: (id:number) => void;
    totalQuantityProduct: number;
    totalPriceProduct: number */
}

interface Props {
    children: React.ReactNode
}

export const cartContext = createContext({} as ProductCartContext)

const CartProvider = ({ children }: Props) => {
    const [cartProducts, setCartProducts] = useState<ProductCart[]>([])
    return (
        <cartContext.Provider value={{cartProducts}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider