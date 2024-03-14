import Header from '../Homepage/Header/Header'
import Card from './Card'
import { MusicList } from '../../../data/Music/MusicList'

const ViewPage = () => {
  return (
    <>
      <Header />
      <div className="main-post">
        <div className="mp_wrapper">
          <div className="header_container">
            <h1
              dangerouslySetInnerHTML={{
                __html: 'Моя <p style="color: var(--secondary)"> музыка</p>'
              }}
              style={{
                display: 'flex',
                gap: '10px'
              }}
            ></h1>
            <img
              src="https://static-00.iconduck.com/assets.00/spotify-icon-2048x2048-5gqpkwih.png"
              alt="spotify_ico"
              style={{
                width: '80px',
                height: '80px',
                marginBottom: '10px'
              }}
            />
          </div>
          <div className="music_container">
            {
                MusicList.map(el => (
                    <Card key={el.id}
                        id={el.id}
                        name={el.name}
                        img={el.img}
                        alt={el.alt}
                        link={el.link}
                        duration={el.duration}
                    />
                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPage
