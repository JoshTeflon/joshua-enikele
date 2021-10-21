import Image from 'next/image'

import email from '../assets/svg/email.svg'
import linkedin from '../assets/svg/linkedin.svg'
import github from '../assets/svg/github.svg'
import twitter from '../assets/svg/twitter.svg'
import instagram from '../assets/svg/instagram.svg'

const SocialBtn = (props) => {
    return (
        <div className={`${props.style}`}>
            <button><Image src={email} alt="icon" /></button>
            <button><Image src={linkedin} alt="icon" /></button>
            <button><Image src={github} alt="icon" /></button>
            <button><Image src={twitter} alt="icon" /></button>
            <button><Image src={instagram} alt="icon" /></button>
        </div>
    )
}

export default SocialBtn;
