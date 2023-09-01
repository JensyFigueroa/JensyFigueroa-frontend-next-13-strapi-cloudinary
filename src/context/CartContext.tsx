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
    increaseQuatity: (id:number) => void;
    decreaseQuatity: (id:number) => void;
    totalQuantityProduct: number;
    totalPriceProduct: number
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

    const increaseQuatity = (id: number) => {
        setCartProducts(cartProducts.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        }))
    }

    const decreaseQuatity = (id: number) => {
       
        if (cartProducts.find(item => item.id === id)?.quantity ===1) {
            return setCartProducts(cartProducts.filter(item => item.id !== id))
        }

        setCartProducts(cartProducts.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
        }))
    }

    const totalQuantityProduct = cartProducts.reduce((acc, item) => acc + item.quantity, 0)

    const totalPriceProduct = cartProducts.reduce((acc , item) => acc + item.price * item.quantity, 0)
    return (
        <cartContext.Provider value={{ cartProducts, addCartProducts, increaseQuatity, decreaseQuatity, totalQuantityProduct,totalPriceProduct }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider