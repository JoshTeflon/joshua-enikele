import { socialIcons } from '../assets/data/Data'
import SocialBtn from './SocialBtn';

const SocialBtnList = (props) => {
    return (
        <div className="social-btn">
            {
                socialIcons.map(
                    socialIcon => <SocialBtn key={socialIcon.id} socialLink={socialIcon.link} imgSrc={socialIcon.imgSrc} />
                )
            }
        </div>
    )
}

export default SocialBtnList;
