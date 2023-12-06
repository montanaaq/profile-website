import SocialLinks from "./SocialLinks";
import Projects from "./Projects";
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
    <div className="main">
        <div className="info-container">
            <img src={'https://i.imgur.com/QATGgCo.jpg'} alt="out" className="image"/>
            <p>Montana</p>
            <span>Python, Frontend Developer</span>
          <SocialLinks />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;