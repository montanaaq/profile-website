import DarkModeToggle from "./DarkModeToggle";
import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <header className="header">
        <a href="https://t.me/montaanaq" className="name">
            <h4>Montana</h4>
          </a>
          <DarkModeToggle />
          <Link to='/info' style={{
            color: 'var(--text-color)',
            textDecoration: 'none',
            fontSize: '22px',
            display: 'inline-block',
            marginLeft: '300px',
          }}>Информация</Link>
      </header>
      <div className="main">
        <div className="info-container">
          <img src={'./image.jpg'} alt="image out" className="image"/>
          <p>Montana</p>
          <span>Python, Frontend Developer</span>
          <SocialLinks />
          <Projects />
        </div>
      </div>
    </div>
  );
}
export default App;