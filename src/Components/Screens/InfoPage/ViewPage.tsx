import { motion, useScroll, useSpring } from 'framer-motion'
import { FC } from 'react'
import { ProjectsList } from '../../../data/Projects/ProjectsList'
import Footer from '../Homepage/Footer/Footer'
import Header from '../Homepage/Header/Header'

const ViewPage: FC = () => {
  const today = new Date()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today)
  
  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <div className="main-post">
        <header style={{ margin: '10px 0px 40px 0px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: 600 }}>
            Мои <span style={{ color: 'var(--secondary)' }}>проекты</span>
          </h1>
          <div>
            <span>{formattedDate}</span>
          </div>
        </header>
        <div className="post-content">
          <h2 style={{ textAlign: 'left', marginBottom: '15px' }}>
            Содержание
          </h2>
          <ul
            style={{
              textAlign: 'left',
              marginLeft: '20px',
              marginBottom: '35px'
            }}
          >
            {ProjectsList.map(el => (
              <li style={{ marginBottom: '15px' }} key={el.id}>
                <a
                  href={`#${el.url}`}
                  style={{
                    color: 'var(--text-color)',
                    textDecorationThickness: '1px'
                  }}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          {ProjectsList.map(el => (
            <div className="container" key={el.id}>
              <h2 style={{ marginBottom: '20px' }} id={el.url}>
                {el.main_name} ({el.date})
              </h2>
              <p style={{ marginBottom: '10px' }}>{el.p}</p>
              <p className="status">
                Статус:{' '}
                {el.isSupport ? (
                  <span className="support">Поддерживается</span>
                ) : (
                  <span className="not-support">Не поддерживается</span>
                )}
              </p>
              {el.link && (
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={el.link}
                    style={{
                      color: 'var(--text-color)',
                      marginBottom: '10px'
                    }}
                  >
                    Ссылка
                  </a>
                </div>
              )}
              {el.source_code ? (
                <div>
                  <a
                    href={el.source_code}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--text-color)'
                    }}
                  >
                    Source code
                  </a>
                </div>
              ) : (
                ''
              )}
              <img
                src={el.img}
                alt="not downloaded"
                className={
                  el.url === 'sneaknews'
                    ? 'sneaknews-img'
                    : el.url === 'uni-finder-website'
                    ? 'uni-finder-website-img'
                    : el.url === 'my-website'
                    ? 'profile_website_img'
                    : el.url === 'schedulebot'
                    ? 'schedulebot-img'
                    : el.url === 'desks-duels'
                    ? 'desks-duels-img'
                    : ''
                }
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ViewPage
