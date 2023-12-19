import { useState } from 'react'

const projects = [
    [
        "ScheduleBot",
        "сентябрь 2023 - н.д",
        "Бот, занятий расписания в школе",
        "http://t.me/schedule_10t_bot"
    ],
    [
        "SneaksBot",
        "сентябрь 2023 - н.д",
        "Бот, для удобного расчёта стоимости товаров на Poizon",
        "http://t.me/sneaknews_bot"
    ],
    [
        "UniFinder",
        "ноябрь 2023 - н.д",
        "Бот, для подбора университета с помощью ChatGPT",
        "http://t.me/uni_finder_bot"
    ],
    [
        'Profile Website',
        'ноябрь 2023 - н.д',
        'Вебсайт портфолио React',
        'https://montaanaq.netlify.app'
    ],
    [
        'UniFinder Website',
        'декабрь 2023 - н.д',
        'Сайт по подбору университетов',
        'https://uni-finder-mntq.netlify.app'
    ]
]

const Projects = () => {
    const [show, setShow] = useState(false)

    function toggleProjects() {
        setShow(!show)
    }
    return ( 
        <div>
            <button onClick={toggleProjects} className='show-button'>{show ? 'Скрыть' : 'Показать'} проекты</button>
            {
                show &&
                <div className="projects-list">
                    {
                        projects.map((project) =>(<p>
                            <a href={project[3]} target='_blank' rel="noreferrer">{project[0]}</a>:&nbsp;
                                {project[1]}
                                <br />
                                {project[2]}
                                </p>))
                    }
                </div>
            }
        </div>
     );
}

export default Projects;