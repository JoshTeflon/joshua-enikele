import Image from 'next/image'

const ProjectSet = (props) => {
    return (
        <div className="project-set">
            <div className="project-set__card">
                <div className="project-set__card__content">
                    <div className="project-set__card__content__img">
                        <Image src={props.imgSrc} alt="project view" />
                    </div>
                </div>
                <p className="project-set__card__stack">{props.projectStack}</p>
            </div>
            <div className="project-set__desc">
                <h1 className="project-set__desc__name">{props.projectName}🔗</h1>
                <p className="project-set__desc__desc-text">{props.projectDesc}</p>
            </div>
        </div>
    )
}

export default ProjectSet;