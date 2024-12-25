import { FC } from 'react'
import Typewriter from 'typewriter-effect'
import Buttons from '../Buttons.tsx'
import Footer from '../Footer/Footer.tsx'
import Header from '../Header/Header.tsx'
import SocialLinks from '../SocialLinks.tsx'
import styles from './App.module.css'

const ViewPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.info_container}>
          <img src="./avatar.jpg" alt="out" className={styles.image} />
          <div className={styles.namespace}>
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
