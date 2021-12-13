import Image from 'next/image'

import { motion } from 'framer-motion'

import joshImg from '../../assets/images/jtef.png'

//Framer Motion
const name = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 4 } }
};


const LandingImage = () => {
    return (
        <div className="landing__content__img-wrapper">
            <div className="landing__content__img-wrapper__img">
                <Image src={joshImg} alt="picture of joshteflon" priority />
            </div>
            <div className="img-text">joshua enikele</div>
            <motion.div className="img-box box1" variants={name} initial="hidden" animate="visible"></motion.div>
            <motion.div className="img-box box2" variants={name} initial="hidden" animate="visible"></motion.div>
        </div>
    )
}

export default LandingImage
