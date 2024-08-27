import Header from '../Homepage/Header/Header'
import Card from './Card'
import AuthorCard from './AuthorCard'
import { MusicList } from '../../../data/Music/MusicList'
import AuthorList from '../../../data/Music/AuthorList'

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
            />
          </div>
          <div className='author_container'>
            {AuthorList.map(el => (
              <AuthorCard
                key={el.id}
                id={el.id}
                name={el.name}
                img={el.img}
                info={el.info}
                link={el.link}
                alt={el.alt}
              />
            ))}
          </div>
          <h1
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '40px'
              }}
            >Альбомы</h1>
          <div className="music_container">
            {MusicList.map(el => (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                img={el.img}
                best={el.best}
                alt={el.alt}
                link={el.link}
                duration={el.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPage
