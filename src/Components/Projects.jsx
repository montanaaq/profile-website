import { useState } from 'react'

const projects = [
    [
        "ScheduleBot",
        "2023-н.д",
        "Бот, для пересылки сообщений о расписании во всей школе",
        "http://t.me/schedule_10t_bot"
    ],
    [
        "SneaksBot",
        "2023-н.д",
        "Бот, для удобного расчёта стоимости товаров на Poizon",
        "http://t.me/sneaknews_bot"
    ],
    [
        "UniFinder",
        "2023-н.д",
        "Бот, для подбора университета с помощью ChatGPT",
        "http://t.me/uni_finder_bot"
    ]
]

const Projects = () => {
    const [show, setShow] = useState(false)

    function toggleProjects() {
        setShow(!show)
    }
    return ( 
        <div>
            <button onClick={toggleProjects} className='show-button'>{show ? 'Скрыть' : 'Показать'} Проекты</button>
            {
                show &&
                <div className="projects-list">
                    {
                        projects.map((project) =>(<p>
                            <a href={project[3]} target='_blank' rel="noreferrer">{project[0]}</a>: 
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