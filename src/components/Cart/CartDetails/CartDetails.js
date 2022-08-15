import React, { useContext, useState } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart.context'
import Skin from '../../Skins/Skin/Skin'
import Confirm from '../../UI/Confirm/Confirm'

const CartDetails = () => {
  const ctx = useContext(CartContext)

  const [showConfirm, setShowConfirm] = useState(false)

  const showConfirmHandler = () => {
    setShowConfirm(true)
  }

  const cancelHandler = e => {
    e.stopPropagation()
    setShowConfirm(false)
  }

  const okHandler = () => {
    // 清空购物车
    ctx.clearCart()
  }

  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          onCancel={cancelHandler}
          onOk={okHandler}
          confirmText={'确认清空购物车吗？'}
        />
      )}
      <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>我的购物车</h2>
          <div onClick={showConfirmHandler} className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span>清空购物车</span>
          </div>
        </header>

        <div className={classes.SkinList}>
          {ctx.items.map(item => (
            <Skin key={item.id} skin={item} />
          ))}
        </div>
      </div>
    </Backdrop>
  )
}

export default CartDetails
