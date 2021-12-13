import Image from "next/image";

import { projectsData } from "../../assets/data/Data";
import ProjectSet from "./ProjectSet";

const Projects = (props) => {
    return (
        <div id="projects" className={`projects ${props.bgClass}`}>
            <div className="projects__content">
                <h1 className="projects__content__head">Projects📁</h1>
                <section>
                    {
                        projectsData.map((projectData) => {
                            return (
                                <ProjectSet 
                                key={projectData.id} 
                                imgSrc={projectData.imgSrc} 
                                projectStack={projectData.projectStack}
                                projectName={projectData.projectName}
                                projectDesc={projectData.projectsDesc}
                                projectLink={projectData.projectLink}
                                />
                            )
                        })
                    }
                </section>
            </div>
            <div className="projects__bg-logo">
                <Image src={props.bgLogo} alt="bg-logo" />
            </div>
        </div>
    )
}

export default Projects;