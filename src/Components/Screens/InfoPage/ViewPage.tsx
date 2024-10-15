import { FC } from 'react'
import { ProjectsList } from '../../../data/Projects/ProjectsList'
import Footer from '../Homepage/Footer/Footer'
import Header from '../Homepage/Header/Header'

const ViewPage: FC = () => {
  return (
    <div>
      <Header />
      <div className="main-post">
        <header style={{ margin: '40px 0px 40px 0px' }}>
          <h1 style={{ fontSize: '38px', fontWeight: 600 }}>
            Мои <span style={{ color: 'var(--secondary)' }}>проекты</span>
          </h1>
          <div>
            <span>February 5, 2024</span>
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
                {el.name} <p>({el.date})</p>
              </h2>
              <p style={{ marginBottom: '10px' }}>{el.p}</p>
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
