import React from 'react'
import { ReactComponent as CartIcon } from '../../../assets/img/shopping-bag.svg'

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
