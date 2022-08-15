import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart.context'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'

const Cart = () => {
  const ctx = useContext(CartContext)

  const [isShowCartDetail, setIsShowCartDetail] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const toggleCartDetail = () => {
    if (ctx.totalAmount === 0) {
      setIsShowCartDetail(false)
      return
    }
    setIsShowCartDetail(prevState => !prevState)
  }

  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return
    setShowCheckout(true)
  }

  const hideCheckoutHandler = () => {
    setShowCheckout(false)
  }

  return (
    <div className={classes.Cart} onClick={toggleCartDetail}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {isShowCartDetail && <CartDetails />}

      <div className={classes.Icon}>
        <img src={iconImg} />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>

      {ctx.totalAmount === 0 ? (
        <span className={classes.NoMeal}>未选购商品</span>
      ) : (
        <span className={classes.Price}>{ctx.totalPrice}</span>
      )}

      <button
        onClick={showCheckoutHandler}
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disabled : ''
        }`}>
        去结算
      </button>
    </div>
  )
}

export default Cart
