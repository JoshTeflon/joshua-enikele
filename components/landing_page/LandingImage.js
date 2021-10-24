import Image from 'next/image'

import joshImg from '../../assets/images/jtef.png'

const LandingImage = () => {
    return (
        <div className="landing__content__img-wrapper">
            <div className="landing__content__img-wrapper__img">
                <Image src={joshImg} alt="picture of joshteflon" />
            </div>
            <div className="img-text">joshua enikele</div>
            <div className="img-box box1"></div>
            <div className="img-box box2"></div>
        </div>
    )
}

export default LandingImage
