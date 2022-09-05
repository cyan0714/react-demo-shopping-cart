import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, {useContext} from 'react'
import classes from './Counter.module.css'
import CartContext from '../../../store/cart.context'


export default ({ skin }) => {
  const ctx = useContext(CartContext)

  const addButtonHandler = () => {
    ctx.cartDispatch({type: "ADDSKIN", skin})
  }

  const subButtonHandler = () => {
    ctx.cartDispatch({type: "REMOVESKIN", skin})
  }

  return (
    <div className={[`flex-y-center Counter`]}>
      {skin.amount ? (
        <>
          <div className={[`${classes.Sub} AddBtn`]} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <span className={[classes.Amount]}>{skin.amount}</span>
        </>
      ) : (
        ''
      )}
      <div className={[`${classes.Add} SubBtn`]} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}
