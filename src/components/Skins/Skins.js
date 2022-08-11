import Skin from './Skin/Skin'
import classes from './Skins.module.css'

export default ({ skinsData }) => {
  return (
    <div className={classes.Skins}>
      {skinsData.map(skin => {
        return <Skin key={skin.id} skin={skin} />
      })}
    </div>
  )
}
