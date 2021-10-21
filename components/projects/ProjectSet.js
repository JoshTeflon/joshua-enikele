import Image from 'next/image'

const ProjectSet = (props) => {
    return (
        <div className="project-set">
            <div>
                <div><Image src={props.image} alt="project view" /></div>
                <span>{props.stack}</span>
            </div>
            <div>
                <h1>{props.project_name}</h1>
                <p>{props.project_desc}</p>
            </div>
        </div>
    )
}

export default ProjectSet;