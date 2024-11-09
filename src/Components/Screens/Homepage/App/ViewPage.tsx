import { FC } from 'react'
import Buttons from '../Buttons.tsx'
import Footer from '../Footer/Footer.tsx'
import Header from '../Header/Header.tsx'
import SocialLinks from '../SocialLinks.tsx'

const ViewPage: FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="info-container">
          <img
            src='./avatar.jpg'
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
    </>
  )
}

export default ViewPage
