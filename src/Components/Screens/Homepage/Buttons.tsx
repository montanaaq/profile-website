import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { FC } from 'react'

const Buttons: FC = () => {
  return (
    <div className="button_wrapper">
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
      <Button
        size="small"
        variant="contained"
        disabled
        style={{
          color: 'var(--text-color)',
          opacity: 0.8,
          pointerEvents: 'auto',
          cursor: 'not-allowed'
        }}
      >
        Music
      </Button>
    </div>
  )
}

export default Buttons
