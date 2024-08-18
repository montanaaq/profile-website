import { Button } from "@mui/material";
import { FC } from "react";

type AuthorCardProps = {
    id: number
    name: string
    img: string
    info: string
    link: string
    alt: string
}

const AuthorCard: FC<AuthorCardProps> = ({id, name, img, info, link, alt}) => {
    return (
        <div className="author_card">
            <div>
                <h3 key={`author_${id}`} className='author_name'>{name}</h3>
                <p key={`info_${id}`} className="author_info">{info}</p>
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
            <img key={`img_${id}`} src={img} alt={alt} className="author_img"/>
        </div>
    );
}

export default AuthorCard;