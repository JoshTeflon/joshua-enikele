import Image from 'next/image'

const SocialBtn = (props) => {
    return (
        <a href={`${props.socialLink}`} target="_blank" rel="noopener noreferrer" className="social-link"><Image src={props.imgSrc} alt="social icon" priority /></a>
    )
}

export default SocialBtn
