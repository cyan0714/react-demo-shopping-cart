import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React, {useContext} from 'react'
import classes from './Counter.module.css'
import CartContext from '../../../store/cart.context'


export default ({ skin }) => {
  const ctx = useContext(CartContext)

  const addButtonHandler = () => {
    ctx.addItem(skin)
  }

  const subButtonHandler = () => {
    ctx.removeItem(skin)
  }

  return (
    <div className={['flex-y-center']}>
      {skin.amount ? (
        <>
          <div className={[classes.Sub]} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <span className={[classes.Amount]}>{skin.amount}</span>
        </>
      ) : (
        ''
      )}
      <div className={[classes.Add]} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}