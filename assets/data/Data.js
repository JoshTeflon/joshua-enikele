//Import social Icons
import email from '../../assets/svg/email.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import github from '../../assets/svg/github.svg'
import twitter from '../../assets/svg/twitter.svg'
import instagram from '../../assets/svg/instagram.svg'

//Import project images
import avunaWeb from '../../assets/images/avuna-web.png'
import saedWeb from '../../assets/images/saed-web.png'
import afrigallery from '../../assets/images/afrigallery.png'

export const socialIcons = [
    {
       id: 0,
       imgSrc: email,
       link: 'mailto: jenikele21h@gmail.com?subject=FRONTEND DEVELOPER&body=Hello Joshua Enikele,',
    },
    {
        id: 1,
        imgSrc: linkedin,
        link: 'https://linkedin.com/in/enikele-joshua-bb0097195',
    },
    {
        id: 2,
        imgSrc: github,
        link: 'https://github.com/JoshTeflon',
    },
    {
        id: 3,
        imgSrc: twitter,
        link: 'https://twitter.com/jteflon2',
    },
    {
        id: 4,
        imgSrc: instagram,
        link: 'https://instagram.com/_joshteflon',
    },
]

export const projectsData = [
    {
       id: 0,
       imgSrc: avunaWeb,
       projectStack: 'react | css',
       projectName: 'avuna academy',
       projectsDesc: 'A web based learning application.',
       projectLink: 'https://avunaacademy.com',
    },
    {
        id: 1,
        imgSrc: saedWeb,
        projectStack: 'react | css(tailwind)',
        projectName: 'saed web',
        projectsDesc: 'A tech start-up official website',
        projectLink: 'https://saed.dev',
    },
    {
        id: 2,
        imgSrc: afrigallery,
        projectStack: 'html | scss | js',
        projectName: 'afrigallery',
        projectsDesc: 'An african image gallery with gsap animations',
        projectLink: 'https://afrigallery.netlify.app/',
    },
]