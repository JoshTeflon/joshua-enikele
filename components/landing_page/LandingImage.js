import Image from 'next/image'

import joshImg from '../../assets/images/jtef.png'

const LandingImage = () => {
    return (
        <div className="landing__content__img-wrapper">
            <div className="landing__content__img-wrapper__img">
                <Image src={joshImg} alt="picture of joshteflon" />
            </div>
            <div className="img-text">joshua enikele</div>
        </div>
    )
}

export default LandingImage
