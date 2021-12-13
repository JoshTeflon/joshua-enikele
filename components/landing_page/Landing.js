import Image from 'next/image'

import { motion } from 'framer-motion'

import LandingImage from './LandingImage'

import joshteflon from '../../assets/images/joshteflon.png'
import download from '../../assets/svg/download.svg'

//Framer Motion
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1,
    transition: { delayChildren: 2, staggerChildren: 0.4 }
    }
};

const item = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const heroImage = {
    hidden: { y:-20, opacity: 0 },
    visible: { y:0, opacity: 1,
    transition: { delay: 1.5 }
    }
};


const Landing = (props) => {

    return (
        <section id="home" className={`landing ${props.bgClass}`}>
            <div className="landing__content">
                <motion.div className="landing__content__hero" variants={container} initial="hidden" animate="visible">
                    <motion.p className="intro" variants={item}>👋 <span>Hello there, I&apos;m</span></motion.p>
                    <motion.div className="joshteflon" variants={item}>
                        <Image src={joshteflon} alt="" />
                    </motion.div>
                    <motion.h2 variants={item}>Front-end Developer</motion.h2>
                    <motion.p className="about" variants={item}>
                        I’m a Front-end Developer based in Nigeria, I build responsive and scalable products with satisfying user experience.
                    </motion.p>
                    <motion.div className="btn-grp" variants={item}>
                        <div className="btn-grp__contact">
                            <a href="#contact" className="btn contact_btn">
                                Let&apos;s <span>Talk</span>
                                <svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807611 14.9792 0.807611 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5H25V10.5H0V13.5Z"/>
                                </svg>
                            </a>
                        </div>
                        <a className="btn download_btn" href="https://drive.google.com/file/d/1gVri2INYRUSVbtVy77iyuOcViFHCU_Jc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <div className="download_btn__text">Download CV</div>
                            <div className="download_btn__icon">
                                <Image src={download} alt="download icon" />
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div className="desktop__img-section" variants={heroImage} initial="hidden" animate="visible">
                    <LandingImage />
                </motion.div>
            </div>
            <motion.div className="mobile__img-section" variants={heroImage} initial="hidden" animate="visible">
                <LandingImage />
            </motion.div>
        </section>
    )
}

export default Landing;
