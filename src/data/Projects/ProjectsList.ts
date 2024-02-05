interface IProjectsList {
    id : number,
    name : string,
    p : string,
    url : string,
    img : string,
    main_name : string
    date : string
    link : string,
    source_code? : string
}

export const ProjectsList: IProjectsList[] = [
    {
        "id": 1,
        "name": "Бот расписаний занятий",
        "p": "Бот, который позволяет вам просматривать расписание занятий в вашей школе",
        "url": "schedulebot",
        "img":  "https://i.imgur.com/Pbg1RuD.png",
        "main_name": "ScheduleBot",
        "date": "сентябрь 2023 - н.д",
        "link": "http://t.me/schedule_10t_bot"
    },
    {
        "id": 2,
        "name": "Бот онлайн магазина Poizon",
        "p": "Бот, который поможет вам расчитать стоимость товара с Poizon и оформить заказ",
        "url": "sneaknews",
        "img":  "https://i.imgur.com/9OHFTw6.png",
        "main_name": "SneaksBot",
        "date": "октябрь 2023 - н.д",
        "link": "http://t.me/sneaknews_bot"
    },
    {
        "id": 3,
        "name": "Бот по подбору университета в вашем городе",
        "p": "Бот, который подбирает вам наилучший вариант в вашем городе, судя по вашим баллам (работает с помощью ChatGPT)",
        "url": "unifinder",
        "img":  "https://i.imgur.com/afWkow6.png",
        "main_name": "UniFinder",
        "date": "ноябрь 2023 - н.д",
        "link": "http://t.me/uni_finder_bot"
    },
    {
        "id": 4,
        "name": "Мой сайт портфолио",
        "p": "Сайт с полной информацией о моих крупных проектах, которые я обновляю и по сей день.",
        "url": "my-website",
        "img": "https://i.imgur.com/Qv1123v.png",
        "main_name": "Profile Website",
        "date": "ноябрь 2023 - н.д",
        "link": "https://montaanaq.netlify.app",
        "source_code": "https://github.com/montanaaq/profile-website"
    },
    {
        "id": 5,
        'name': 'Сайт по подбору университетов',
        'p': 'Сайт, с помощью которого вы сможете найти подходящий вам по баллам и местоположению университет. Написан на React',
        'url': 'uni-finder-website',
        'img': 'https://i.imgur.com/gDLtFUa.png',
        "main_name": "UniFinder Website",
        "date": "декабрь 2023 - н.д",
        "link": 'https://uni-finder-mntq.netlify.app'
    }
]
