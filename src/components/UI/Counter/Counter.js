import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import classes from './Counter.module.css'

export default ({ amount }) => {
  return (
    <div className={['flex-y-center']}>
      {amount ? (
        <>
          <div className={[classes.Sub]}>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <span className={[classes.Amount]}>{amount}</span>
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
