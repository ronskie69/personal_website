import {
    FaAndroid,
    FaJava,
    FaDatabase,
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaPhp,
    FaBrush,
    FaAdobe
} from 'react-icons/fa'

const web= [
    {
        id: 1,
        title: 'COVID-19 Tracker',
        info: 'My first project in Website Development.',
        image: require('./images/covid.jpg'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        description: 'Covid Updates',
        link: 'https://covidupdates.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 2,
        title: 'Quiz Pinas',
        description: 'Simple Quiz App',
        info: 'A simple quiz app about the Philippine History and also the latest.',
        image: require('./images/quiz.png'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://quizpinas.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 3,
        title: 'Music App',
        description: 'My Fave Songs',
        info: 'My favorite songs are in this website.',
        image: require('./images/nogsumusic.jpg'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        link: 'https://nogsu.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 4,
        title: 'Calamba Wonders',
        info: 'System of our Thesis. This app is responsible for providing route to tourist spots in Calamba City, Laguna.',
        image: require('./images/cw.jpg'),
        languages: [
            {
                id: 1,
                icon: FaAndroid,
                name: "Android"
            },
            {
                id: 2,
                icon: FaJava,
                name: "Java"
            }
        ],
        description: 'Tourism App',
        link: 'https://youtu.be/TzI6sNZCaqo',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 5,
        title: 'Queen Burger',
        info: 'Simple Web Design about burgers from Burger King.',
        image: require('./images/queenburger.jpg'),
        languages: [
            {
                id: 1,
                icon: FaReact,
                name: "React.JS"
            },
        ],
        description: 'Inspired by Burger King.',
        link: 'https://queenburger.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 6,
        title: 'Istoryang Kape',
        description: 'Story Sharing App',
        info: 'Simple website for sharing thoughts, expression, stories and experiences in life.',
        image: require('./images/istorya.jpg'),
        languages: [
            {
                id: 1,
                icon: FaNodeJs,
                name: "Node"
            },
            {
                id: 2,
                icon: FaDatabase,
                name: "MongoDB"
            }
        ],
        link: 'https://istoryangkape.herokuapp.com/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 7,
        title: 'Kamote Republic',
        description: 'Kamote Riders website',
        info: 'A website just made for fun. It is all about the Kamote riders and drivers on the road.',
        image: require('./images/kamotex.jpg'),
        languages: [
            {
                id: 1,
                icon: FaHtml5,
                name: "HTML5"
            },
            {
                id: 2,
                icon: FaJs,
                name: "JS"
            }
        ],
        link: 'https://kamoterepublic.surge.sh/',
        isLoaded: false,
        type: "Website"
    },
    {
        id: 8,
        title: 'CLDD LMS',
        description: 'Loan Management',
        info: 'A website we created on our Internship in City Hall of Calamba. It is made for client management and loans.',
        image: require('./images/lms.jpg'),
        languages: [
            {
                id: 1,
                icon: FaPhp,
                name: "PHP"
            },
            {
                id: 2,
                icon: FaDatabase,
                name: "MySQL"
            }
        ],
        link: 'https://github.com/ronskie69/cldd_lms',
        isLoaded: false,
        type: "Website"
    },
]

const graphics = [
    {
        id: 1,
        title: 'Kaskaseros',
        description: 'Graphic Design',
        info: 'I used Canva to create this.',
        image: require('./images/poster.webp'),
        languages: [
            {
                id: 1,
                icon: FaBrush,
                name: "Canva"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 2,
        title: 'Pet Service',
        description: 'Graphic Design',
        image: require('./images/pet_service.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 3,
        title: 'Bad Blood',
        description: 'Graphic Design',
        image: require('./images/movie_nagonus_award.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 4,
        title: 'Chili Cook-off',
        description: 'Graphic Design',
        image: require('./images/cookingnina.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 5,
        title: 'Xiomai Phone',
        description: 'Graphic Design',
        image: require('./images/phone_xiomai.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
    {
        id: 6,
        title: 'Among Us Movie',
        description: 'Graphic Design',
        image: require('./images/among_us_movie.webp'),
        languages: [
            {
                id: 1,
                icon: FaAdobe,
                name: "Adobe PS"
            }
        ],
        isLoaded: false,
        type: "Graphic"
    },
]

export { web, graphics }