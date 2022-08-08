import Skin from './Skin/Skin'

export default ({ skinsData }) => {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      {skinsData.map(skin => {
        return <Skin key={skin.id} skin={skin} />
      })}
    </div>
  )
}
