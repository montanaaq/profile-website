import LightModeToggle from './LightModeToggle.js'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <h4 className={styles.name}>Montana</h4>
        </Link>
        <LightModeToggle />
      </div>
      <h1 style={{ opacity: 0 }}>Hidden</h1>
    </header>
  )
}

export default Header
