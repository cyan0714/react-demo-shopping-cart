import React, { useContext } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart.context'
import Skin from '../../Skins/Skin/Skin'

const CartDetails = () => {
  const ctx = useContext(CartContext)

  return (
    <Backdrop>
      <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>我的购物车</h2>
          <div className={classes.Clear}>
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
