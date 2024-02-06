import LightModeToggle from './LightModeToggle.jsx'
import { Link } from 'react-router-dom'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <h4 className="name">Montana</h4>
        </Link>
        <LightModeToggle />
      </div>
      <h1 style={{ opacity: 0 }}>Hidden</h1>
    </header>
  )
}

export default Header
