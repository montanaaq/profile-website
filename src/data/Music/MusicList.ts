interface IMusicList {
    id: number
    name: string
    img: string
    alt: string
    link: string
    duration: string
}

export const MusicList: IMusicList[] = [
    {
        id: 1,
        name: 'Demon Days - Gorillaz',
        img: 'https://upload.wikimedia.org/wikipedia/ru/1/19/Demon_Days.jpeg',
        alt: 'playlist_1',
        link: 'https://open.spotify.com/playlist/7AK3XaevqKSINk0tbdFEyy?si=8429d80383774f75',
        duration: '50 мин. 47 сек.'
    },
    {
        id: 2,
        name: 'Paranoid - Black Sabbath',
        img: 'https://upload.wikimedia.org/wikipedia/ru/d/da/Black_Sabbath_Paranoid_Cover_Art.png',
        alt: 'playlist_2',
        link: 'https://open.spotify.com/album/4kA2o0L3tz9vFKJetiFUJI?si=on5gjyoTRIqqj16j1eMb1g',
        duration: '41 мин. 46 сек.'
    },
    {
        id: 3,
        name: "They Can't All Be Zingers - Primus",
        img: 'https://i.imgur.com/XbSfk85.png',
        alt: 'playlist_3',
        link: 'https://open.spotify.com/album/3eI0FhygfWcdgI3GZdLXFT?si=4KIL9vZXQzuEts0gD-N4vw',
        duration: '1 ч. 17 мин.'
    },
    {
        id: 4,
        name: '72 Seasons - Metallica',
        img: 'https://upload.wikimedia.org/wikipedia/ru/b/b5/Metallica-72-Seasons.png',
        alt: 'playlist_4',
        link: 'https://open.spotify.com/album/6UwjRSX9RQyNgJ3LwYhr9i?si=xXB4zXL_QCWLdxoJG32yYA',
        duration: '1 ч. 17 мин.'
    },
    {
        id: 5,
        name: 'Les Dieux du Stade - Spotify',
        img: 'https://i.imgur.com/IqZLd3b.png',
        alt: 'playlist_5',
        link: 'https://open.spotify.com/playlist/37i9dQZF1DXbJR1DWfHjWw?si=641f9083eb904928',
        duration: '3 ч. 25 мин.'
    },
    {
        id: 6,
        name: 'AM - Arctic Monkeys',
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg',
        alt: 'playlist_6',
        link: 'https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu?si=4zn069cPTkCZWJjtiSXvGQ',
        duration: '41 мин. 47 сек.'
    }
]