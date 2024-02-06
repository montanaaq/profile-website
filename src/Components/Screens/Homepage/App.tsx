import SocialLinks from './SocialLinks.tsx'
import Buttons from './Buttons.tsx'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="info-container">
          <img
            src={'https://i.imgur.com/QATGgCo.jpg'}
            alt="out"
            className="image"
          />
          <div className="namespace">
            <p>
              Hi! I'm <span>Montana</span>
            </p>
            <span>Python, Frontend Developer</span>
            <SocialLinks />
            <div style={{ paddingTop: '15px' }}></div>
            <Buttons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default App
