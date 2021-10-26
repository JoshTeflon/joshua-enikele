import Link from 'next/link'
import Image from 'next/image'

import ToggleTheme from './ToggleTheme'

import Logo from '../assets/images/teflon.png'

const Nav = (props) => {
    return (
        <nav className="nav">
            <div className="nav_content">
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
            </div>
        </nav>
    )
}

export default Nav;
