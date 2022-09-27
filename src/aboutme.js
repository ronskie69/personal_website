import { 
    FaDog, 
    FaCat, 
    FaGraduationCap, 
    FaMale, 
    FaBriefcase, 
    FaHeart
 } from 'react-icons/fa'

 const what_can_i_do = [
     "Turn creative designs into websites",
     "Customer Service",
     "Software Maintenance",
     "Graphic Design",
     "Create aesthetic websites"
]

const aboutMe =  [
    {
        id: 1,
        text: "BS in Computer Science graduate in City College of Calamba (CCC)",
        icon: FaGraduationCap
    },
    {
        id: 2,
        text: "Worked as a Non-voice Customer Service Representative",
        icon: FaBriefcase
    },
    {
        id: 3,
        text: "Completed an internship at City Hall of Calamba (CLDD)",
        icon: FaBriefcase
    },
    // {
    //     id: 5,
    //     text: "You can call me Nagunos, Sunogsu or Nogsuu",
    //     icon: FaCat
    // },
    {
        id: 4,
        text: "Single",
        icon: FaMale
    },
    {
        id: 5,
        text: "Animal and Anime Lover",
        icon: FaDog
    },
]

export default { what_can_i_do, aboutMe }