import React from 'react'
import './CheckoutItem.scss'
import classes from './CheckoutItem.module.css'
import Counter from '../../../UI/Counter/Counter'

const CheckoutItem = props => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.SkinImg}>
        <img src={props.skin.img} />
      </div>
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.skin.title}</h2>
        <div className={[`${classes.PriceOuter} CounterWrapper`]}>
          <Counter skin={props.skin}/>
          <div className={classes.Price}>
            {props.skin.price * props.skin.amount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
