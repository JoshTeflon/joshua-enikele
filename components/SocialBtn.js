import Link from 'next/link'
import Image from 'next/image'

const SocialBtn = (props) => {
    return (
        <Link href={`${props.socialLink}`} passHref><a className="social-link"><Image src={props.imgSrc} alt="social icon" /></a></Link>
    )
}

export default SocialBtn
