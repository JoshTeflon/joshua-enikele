import Image from 'next/image'
import Zoom from 'react-reveal/Zoom';

const ProjectSet = (props) => {
    return (
        <Zoom bottom>
        <div className="project-set">
            <div className="project-set__card">
                <div className="project-set__card__content">
                    <a href={`${props.projectLink}`} target="_blank" rel="noopener noreferrer" className="project-set__card__content__img">
                        <Image src={props.imgSrc} alt="project view" />
                    </a>
                </div>
                <p className="project-set__card__stack">{props.projectStack}</p>
            </div>
            <div className="project-set__desc">
                <a href={`${props.projectLink}`} target="_blank" rel="noopener noreferrer" className="project-set__desc__name">{props.projectName}🔗</a>
                <p className="project-set__desc__desc-text">{props.projectDesc}</p>
            </div>
        </div>
        </Zoom>
    )
}

export default ProjectSet;