import Link from 'next/link'
import Image from 'next/image'

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
    return (
        <nav className="nav">
            <motion.div className="nav_content" variants={nav} initial="hidden" animate="visible">
                <Link href="/">
                    <a className="logo">
                        <Image src={Logo} alt="Logo" />
                    </a>
                </Link>
                <div>
                    {/* <button className="nav_icon">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button> */}
                    <ToggleTheme clickFunction={props.clickFunction} />
                </div>
            </motion.div>
        </nav>
    )
}

export default Nav;
