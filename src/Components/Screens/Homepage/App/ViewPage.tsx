import { FC } from 'react'
import Typewriter from 'typewriter-effect'
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
          <img src="./avatar.jpg" alt="out" className="image" />
          <div className="namespace">
            <p>
              Hi! I'm{' '}
              <span>
                <Typewriter
                options={{
                  // loop: true,
                  deleteSpeed: 'natural',
                  autoStart: true,
                  cursor: '_',
                  delay: 180
                }}
                  onInit={typewriter => {
                    typewriter
                      .typeString('Montana')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Python, Frontend Developer')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Montana')
                      .start()
                  }}
                />
              </span>
            </p>
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
