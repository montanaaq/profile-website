import DarkModeToggle from "./DarkModeToggle";
import SocialLinks from "./SocialLinks";

const App = () => {
  return (
    <div className="App">
      <header className="header">
          <h4>Montana</h4>
          <DarkModeToggle />
      </header>
      <div className="main">
        <div className="info-container">
          <img src={'./image.jpg'} alt="image out" className="image"/>
          <p>Montana</p>
          <span>Python, JavaScript Developer</span>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
export default App;