import Image from 'next/image'
import { useState } from 'react'

import LandingImage from './LandingImage'
import SocialBtnList from '../SocialBtnList'

import joshteflon from '../../assets/images/joshteflon.png'
import download from '../../assets/svg/download.svg'

const Landing = (props) => {
    const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive(!active)
	}

    return (
        <section className={`landing ${props.bgClass}`}>
            <div className="landing__content">
                <div className="landing__content__hero">
                    <p className="intro">👋 <span>Hello there, I&apos;m</span></p>
                    <div className="joshteflon">
                        <Image src={joshteflon} alt="" />
                    </div>
                    <h2>Front-end Developer💻💯</h2>
                    <p className="about">I’m a Front-end Developer based in Nigeria, I build responsive and scalable products with satisfying user experience.</p>
                    <div className="btn-grp">
                        <div className="btn-grp__contact">
                            <button className={`btn contact_btn ${active ? 'btn-bg-all' : ''}`} onClick={handleActive}>
                                Let&apos;s <span>Talk</span>
                                <svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807611 14.9792 0.807611 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z"/>
                                </svg>
                            </button>
                            <SocialBtnList style={active ? 'social-btn' : 'no-social-btn'} />
                        </div>
                        <a href="../../assets/JoshuaEnikeleResume.pdf" download="JoshuaEnikeleResume" className="btn download_btn">
                            <div className="download_btn__text">Download CV</div>
                            <div className="download_btn__icon">
                                <Image src={download} alt="download icon" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="desktop__img-section">
                    <LandingImage />
                </div>
            </div>
            <div className="mobile__img-section">
                <LandingImage />
            </div>
        </section>
    )
}

export default Landing;
