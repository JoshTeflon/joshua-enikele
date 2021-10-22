import Image from 'next/image'

const SocialBtn = (props) => {
    return (
        <button><Image src={props.imgSrc} alt="social icon" /></button>
    )
}

export default SocialBtn
