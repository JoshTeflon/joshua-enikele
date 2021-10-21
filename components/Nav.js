import Image from 'next/image'

import Logo from '../assets/images/teflon.png'

const Nav = (props) => {
    return (
        <nav className="nav">
            <div className="nav_content">
                <div className="logo" onClick={props.clickFunction}>
                    <Image src={Logo} alt="Logo" />
                </div>
                <button className="nav_icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </nav>
    )
}

export default Nav;
