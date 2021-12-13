import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { motion } from 'framer-motion'

import ToggleTheme from './ToggleTheme'

import Logo from '../assets/images/teflon.png'

//Framer Motion
const nav = {
    hidden: { y:-20, opacity: 0 },
    visible: { y:0, opacity: 1,
    transition: { delay: 1 }
    }
};


const Nav = (props) => {
    const [ navState, setNavState] = useState(false)

    const handleNavState = () => {
        setNavState(!navState)
    }

    console.log(navState);

    return (
        <nav className="nav">
            <motion.div className="nav_content" variants={nav} initial="hidden" animate="visible">
                <Link href="/">
                    <a className="logo">
                        <Image src={Logo} alt="Logo" />
                    </a>
                </Link>
                <div className="nav_items">
                <ToggleTheme clickFunction={props.clickFunction} />
                    {/* <ul className="nav_links">
                        <li className="nav_links__link"><a href="#home">Home</a></li>
                        <li className="nav_links__link"><a href="#about">About</a></li>
                        <li className="nav_links__link"><a href="#projects">Projects</a></li>
                        <li className="nav_links__link"><a href="#contact">Contact</a></li>
                    </ul> */}
                    {/* <button className={`nav_icon ${navState ? "" : "nav-open"}`} onClick={handleNavState}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button> */}
                </div>
            </motion.div>
        </nav>
    )
}

export default Nav;
