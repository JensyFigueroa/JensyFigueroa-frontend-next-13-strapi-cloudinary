"use client"

import {useContext} from 'react'
import { cartContext } from '@/context/CartContext'

const Cart = () => {
    const { cartProducts } =  useContext(cartContext)
  return (
    <div>
        <pre>
            {JSON.stringify(cartProducts, null, 2)}
        </pre>
    </div>
  )
}

export default Cart