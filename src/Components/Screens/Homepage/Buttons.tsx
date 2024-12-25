import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import styles from './Homepage.module.css'

const Buttons: FC = () => {
  return (
    <div className={styles.button_wrapper}>
      <Link to="/info">
        <Button variant="contained" size="small">
          Projects
        </Button>
      </Link>
      <Link to="/ide">
        <Button variant="contained" size="small">
          Settings
        </Button>
      </Link>
      <Link to="/music">
        <Button
          size="small"
          variant="contained"
        >
          Music
        </Button>
      </Link>
    </div>
  )
}

export default Buttons
