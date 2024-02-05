import LightModeToggle from "./LightModeToggle.jsx";
import { Link } from "react-router-dom";
import { FC } from "react";

const Header: FC = () => {
    return ( 
    <header className="header">
      <div className="wrapper">
        <Link to='/' style={{
            textDecoration: 'none'
        }}>
            <h4 className="name">Montana</h4>
        </Link>
        <LightModeToggle />
        </div>
      <div className="header_text_wrapper">
        <Link to='/info' style={{
          color: 'var(--text-color)',
          textDecoration: 'none',
          display: 'flex',
        }}><h4 className="name-info">Info</h4></Link>
        <Link to='/ide' className="name-info" style={{
          color: 'var(--text-color)',
          textDecoration: 'none',
          display: 'flex',
        }}>IDE</Link>
      </div>
    </header>
     );
}

export default Header;