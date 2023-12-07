import Header from "./Header";
import Footer from "./Footer";

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
                    <li style={{marginBottom: '15px'}}><a href="#schedulebot" style={{color: "var(--text-color)"}}>Бот расписаний занятий в школе</a></li>
                    <li style={{marginBottom: '15px'}}><a href="#sneaknews" style={{color: "var(--text-color)"}}>Расчёт стоимости товаров на Poizon</a></li>
                    <li><a href="#unifinder" style={{color:'var(--text-color)'}}>Бот по подбору университета в вашем городе</a></li>
                </ul>
                <h2 style={{marginBottom:'20px'}} id='schedulebot'>Бот расписаний занятий в школе</h2>
                <p style={{marginBottom:'30px'}}>Бот позволяет просматривать расписание занятий в вашей школе через телеграм</p>
                <img src="https://i.imgur.com/Pbg1RuD.png" alt="not downloaded" />
                <h2 style={{marginBottom:'20px'}} id='sneaknews'>Расчёт стоимости товаров на Poizon</h2>
                <p style={{marginBottom:'30px'}}>Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ</p>
                <img src="https://i.imgur.com/9OHFTw6.png" alt="not downloaded" className="sneaknews-img"/>
                <h2 style={{marginBottom:'20px'}} id='unifinder'>Бот по подбору университета в вашем городе</h2>
                <p style={{marginBottom:'30px'}}>Бот который узнает информацию о ваших баллах и местоположении и выдает вам наиболее точный результат</p>
                <img src="https://i.imgur.com/afWkow6.png" alt="not downloaded" />
            </div>
            <Footer />
        </div>

    </div>
    );
}

export default InfoPage;