import { socialIcons } from '../assets/data/Data'
import SocialBtn from './SocialBtn';

const SocialBtnList = (props) => {
    return (
        <div className={`${props.style}`}>
            {
                socialIcons.map(
                    socialIcon => <SocialBtn key={socialIcon.id} imgSrc={socialIcon.imgSrc} />
                )
            }
        </div>
    )
}

export default SocialBtnList;
