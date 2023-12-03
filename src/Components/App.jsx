import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Header from './Header'

const App = () => {
  return (
    <div className="App">
      <Header />
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