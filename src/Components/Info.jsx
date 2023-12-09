import Header from "./Header";
import Footer from "./Footer";

const information = [
    {
        "name": "Бот расписаний занятий",
        "p": "Бот позволяет просматривать расписание занятий в вашей школе через телеграм",
        "url": "schedulebot",
        "img":  "https://i.imgur.com/Pbg1RuD.png"
    },
    {
        "name": "Бот онлайн магазина Poizon",
        "p": "Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ",
        "url": "sneaknews",
        "img":  "https://i.imgur.com/9OHFTw6.png"
    },
    {
        "name": "Бот по подбору университета в вашем городе",
        "p": "Бот, который подбирает вам наилучший вариант в вашем городе, судя по вашим баллам (работает с помощью ChatGPT)",
        "url": "unifinder",
        "img":  "https://i.imgur.com/afWkow6.png"
    },
    {
        "name": "Мой сайт портфолио",
        "p": "Данный сайт, также является моим проектом, который я разрабатываю и по сей день. Также он полностью написен на фреймворке React",
        "url": "my-website",
        "img": "https://i.imgur.com/dYkfBLc.png"
    }
]

const InfoPage = () => {
    return ( 
    <div>
        <Header />
        <div className="main-post">
            <header style={{margin:'40px 0px 40px 0px'}}>
                <h1 style={{fontSize:'38px'}}>Мои проекты</h1>
                <div>
                    <span>December 6, 2023</span>
                </div>
            </header>
            <div className="post-content">
                <h2 style={{textAlign: 'left', marginBottom:'15px'}}>Содержание</h2>
                <ul style={{textAlign: 'left', marginLeft:'20px', marginBottom: '35px'}}>
                    {information.map((el) => (
                        <li style={{marginBottom: '15px'}}>
                            <a href={`#${el.url}`} style={{color: 'var(--text-color)'}}>{el.name}</a>
                        </li>
                    ))}
                </ul>
                {information.map((el) => (
                    <div className="container">
                        <h2 style={{marginBottom: '20px'}} id={el.url}>{el.name}</h2>
                        <p style={{marginBottom: '30px'}}>{el.p}</p>
                        <img src={el.img} alt="not downloaded" className={el.url === 'sneaknews' ? 'sneaknews-img': ''}/>
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    </div>
    );
}

    export default InfoPage