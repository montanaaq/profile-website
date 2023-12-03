import Header from "./Header";

function InfoPage() {
    return ( 
        <div>
            <Header />
            <div className="main-about">
                <div className="about">
                    <p>Montana</p>
                    <span>Python, Frontend Developer</span>
                </div>
                <h3>
                    Введение
                </h3>
                <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>&nbsp;&nbsp;&nbsp;&nbsp;Привет! Меня зовут Амир, я начинающий python, frontend программист. Сейчас мне 16 лет, начинал я ещё в 8 классе, после уроков информатики на которых мне понравилось писать программы для автоматизации чего-либо.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;После этого я поехал в детский лагерь <b>Байтик</b> в котором я написал свой первый проект, а именно сайт про Дворец Культуры Ленина. Меня очень затянул процесс кодинга и я продолжил изучать Frontend разработку.</p>
                <h3 style={{marginTop:"10px"}}>
                    Знания языков
                </h3>
                <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>На данный момент я знаю такие языки как: Python и JavaScript, также пользуюсь такими фреймворками как React для написания реактивных веб страниц. Также писал backend (бэкенд) на python для создания базы данных в своих телеграм ботах. Раньше пользовался такой библиотекой как pyTelegramBotAPI (telebot), но в дальнейшем начал писать все проекты на aiogram.</p>
                <h3 style={{marginTop:"10px"}}>
                    Проекты
                </h3>
                <p style={{marginTop:"10px", marginLeft: "10px", wordBreak: "inherit"}}>За 1.5 года опыта, я успел реализовать несколько проектов, которые я и по сей день обновляю и исправляю. Некоторые из них представлены на главной странице моего сайта.<br /><br />
                <a href="https://t.me/schedule_10t_bot" target="_blank" style={{textDecoration:"underline", color:"var(--text-color)"}}>Schedule Bot<br /></a>
                <a href="https://t.me/sneaknews_bot" target="_blank" style={{textDecoration:"underline", color:"var(--text-color)"}}>SneaksNews Bot<br /></a>
                <a href="https://t.me/uni_finder_bot" target="_blank" style={{textDecoration:"underline", color:"var(--text-color)"}}>UniFinder Bot</a>
                </p>
            </div>
        </div>
     );
}

export default InfoPage;