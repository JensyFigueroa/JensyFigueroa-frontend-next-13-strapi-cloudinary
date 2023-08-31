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
     addCartProducts: (product: ProductCartItem) => void;
    /*increaseQuatity: (id:number) => void;
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

    const addCartProducts = ({ id, title, price }: ProductCartItem) => {
        //1era instancia SI el carrito esta vacio
        if (cartProducts.length === 0) {
            return setCartProducts([{ id, title, price, quantity: 1 }])
        }

        const productExist = cartProducts.find(product => product.id === id)

        //2da instancia si el carrito NO esta vacio
        if (!productExist) {
            return setCartProducts([...cartProducts, { id, title, price, quantity: 1 }])
        }

        //3era instancia si el producto ya existe se aumenta la cantidad
        setCartProducts(cartProducts.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        }))
    }

    return (
        <cartContext.Provider value={{ cartProducts, addCartProducts }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider