import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

function Header() {
    return ( 
    <header className="header">
        <Link to='/' style={{
            textDecoration: 'none'
        }}>
            <h4 className="name">Montana</h4>
        </Link>
          <DarkModeToggle />
          <Link to='/info' style={{
            color: 'var(--text-color)',
            textDecoration: 'none',
            fontSize: '22px',
            display: 'inline-block',
            marginLeft: '300px',
          }}><h4 className="name">Информация</h4></Link>
    </header>
     );
}

export default Header;