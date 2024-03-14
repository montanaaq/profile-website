import { FC } from 'react'
import { Button } from '@mui/material'

interface ICard {
  id: number
  name: string
  img: string
  alt: string
  link: string
  duration: string
}

const Card: FC<ICard> = ({ id, name, img, alt, link, duration }) => {
  return (
    <div className="card" key={`card_${id}`}>
      <div className="img_container" key={`img_${id}`}>
        <img src={img} alt={alt} key={`img_new_${id}`} />
      </div>
      <h2
        className={name == "They Can't All Be Zingers" ? 'small' : ''}
        key={`name_${id}`}
      >
        {name}
      </h2>
      <p key={`duration_${id}`}>Длительность: {duration}</p>
      <Button
        variant="outlined"
        size="large"
        href={link}
        target="_blank"
        key={`link_${id}`}
      >
        Перейти
      </Button>
    </div>
  )
}

export default Card
