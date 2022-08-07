import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import classes from './Counter.module.css'

export default ({ amount }) => {
  return (
    <div className={['flex-y-center']}>
      {amount !== 0 ? (
        <>
          <div className={[classes.Sub]}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <span className={[classes.Amount]}>2</span>
        </>
      ) : (
        ''
      )}
      <div className={[classes.Add]}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  )
}
