import Image from 'next/image'
import Link from 'next/link'

import Zoom from 'react-reveal/Zoom';

import SocialBtnList from './SocialBtnList'


const Footer = (props) => {
    return (
        <footer id="footer" className={`footer ${props.bgClass}`}>
            <Zoom bottom>
            <div className="footer-wrapper">
                <div className="footer-wrapper__content">
                    <h1 className="footer-wrapper__content__header">Get in touch</h1>
                    <p className="footer-wrapper__content__talk">Want to have a talk? You can definitely say hello, just send a mail.</p>
                    <a href="mailto: jenikele21h@gmail.com?subject=FRONTEND DEVELOPER&body=Hello Joshua Enikele," target="_blank" rel="noopener noreferrer" className="footer-wrapper__content__btn">
                        Say Hello👋
                    </a>
                    <SocialBtnList />
                </div>
            </div>
            </Zoom>
            <div className="footer-note">
                <div className="footer-note__name">&copy; 2021 joshua enikele</div>
                <Link href="/">
                    <a className="footer-note__logo">
                        <Image src={props.bgLogo} alt="footer logo" />
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;