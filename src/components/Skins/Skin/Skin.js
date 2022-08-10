import classes from './Skin.module.css'
import Counter from '../../UI/Counter/Counter'

export default ({ skin }) => {
  return (
    <div className={`${classes.Skin} flex-y-center`}>
      <div className={classes.ImgBox}>
        <img src={skin.img} />
      </div>
      <div>
        <h2>{skin.title}</h2>
        <p className={`${classes.Desc} double-row-ellip`}>{skin.desc}</p>
        <div className={`${classes.PriceWrapper} flex-between`}>
          <span className={`${classes.Price} font-md`}>{skin.price}</span>
          <Counter skin={skin} />
        </div>
      </div>
    </div>
  )
}
