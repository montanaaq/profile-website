import Header from "./Header";
import Footer from "./Footer";

function InfoPage() {
    return ( <div>
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
                <img src="https://i.imgur.com/Pbg1RuD.png" alt="not downloaded" style={{width:'400px', height:'400px', borderRadius: '15px', marginBottom:'50px'}}/>
                <h2 style={{marginBottom:'20px'}} id='sneaknews'>Расчёт стоимости товаров на Poizon</h2>
                <p style={{marginBottom:'30px'}}>Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ</p>
                <img src="https://i.imgur.com/9OHFTw6.png" alt="not downloaded" style={{width:'400px', height:'700px', borderRadius: '15px', marginBottom:'50px'}}/>
                <h2 style={{marginBottom:'20px'}} id='unifinder'>Бот по подбору университета в вашем городе</h2>
                <p style={{marginBottom:'30px'}}>Бот который узнает информацию о ваших баллах и местоположении и выдает вам наиболее точный результат</p>
                <img src="https://i.imgur.com/GumbfVH.png" alt="not downloaded" style={{width:'850px', height:'450px', borderRadius: '15px', marginBottom:'50px'}}/>
            </div>
            <Footer />
        </div>

    </div>
    );
}

export default InfoPage;
// <div style={{height:'100vh'}}>
//     <Header />
//     <div className="main-about">
//         <div className="about">
//             <p>Montana</p>
//             <span>Python, Front end Developer</span>
//         </div>
//         <h3>
//             Введение
//         </h3>
//         <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>Привет! Меня зовут Амир, я начинающий python, frontend программист. Сейчас мне 16 лет, начинал я ещё в 8 классе, после уроков информатики на которых мне понравилось писать программы для автоматизации чего-либо.<br />После этого я поехал в детский лагерь <b>Байтик</b> в котором я написал свой первый проект, а именно сайт про Дворец Культуры Ленина. Меня очень затянул процесс кодинга и я продолжил изучать Frontend разработку.</p>
//         <h3 style={{marginTop:"10px"}}>
//             Знания языков
//         </h3>
//         <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>На данный момент я знаю такие языки как: Python и JavaScript, также пользуюсь такими фреймворками как React для написания реактивных веб страниц. Также писал backend (бэкенд) на python для создания базы данных в своих телеграм ботах. Раньше пользовался такой библиотекой как pyTelegramBotAPI (telebot), но в дальнейшем начал писать все проекты на aiogram.</p>
//         <h3 style={{marginTop:"10px"}}>
//             Проекты
//         </h3>
//         <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>За 1.5 года опыта, я успел реализовать несколько проектов, которые я и по сей день обновляю и исправляю. Некоторые из них представлены на главной странице моего сайта.<br /><br />
//         <a href="https://t.me/schedule_10t_bot" target="_blank" rel="noreferrer" style={{textDecoration:"underline", color:"var(--text-color)", justifyContent: 'center', display: 'flex'}}>Schedule Bot<br /></a>
//         <a href="https://t.me/sneaknews_bot" target="_blank" rel="noreferrer" style={{textDecoration:"underline", color:"var(--text-color)", justifyContent: 'center', display: 'flex'}}>SneaksNews Bot<br /></a>
//         <a href="https://t.me/uni_finder_bot" target="_blank" rel="noreferrer" style={{textDecoration:"underline", color:"var(--text-color)", justifyContent: 'center', display: 'flex'}}>UniFinder Bot</a>
//         </p>
//     </div>
// </div>