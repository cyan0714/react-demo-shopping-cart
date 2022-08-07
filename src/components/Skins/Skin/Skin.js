import classes from './Skin.module.css'
import Counter from '../../UI/Counter/Counter'

export default () => {
  return (
    <div className={ `${classes.Skin} flex-y-center` } >
      <div className={ classes.ImgBox }>
        <img src="/imgs/skins/Angel.jpg" />
      </div>
      <div>
        <h2>银白审判 凯尔</h2>
        <p className={ `${classes.Desc} double-row-ellip` }>这款皮肤在美服，只有在2009年购买了《LOL典藏版》的玩家才能用激活码兑换，但是《LOL典藏版》的价格非常高，拥有的人数量也非常有限，而在国服本款皮肤也只能从海克斯科技中开出来，所以这款皮肤不仅稀有还具有一定的收藏价值。</p>
        <div className={ `${classes.PriceWrapper} flex-between` }>
          <span className={ `${classes.Price} font-md`}>69</span>
          <Counter amount={ 2 } />
        </div>
      </div>
    </div>
  )
}