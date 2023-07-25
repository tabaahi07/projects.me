import React from 'react';
import styles from "../css/Project.module.css"
import ProjectDescription from './ProjectDescription';

const Projects = ({ project, side }) => {
    return (
        <div className={(side === "right") ? styles.ProjectsRight : styles.Projects}>
            {side === "right" && <ProjectDescription side={side} project={project} />}
            <div className={styles.ProjectScreenshot}>
                <a href={project.projectLink} target="_blank">
                    <img src={`https://drive.google.com/uc?export=view&id=${project.projectScreenshotID}`} alt="drive image" />
                </a>
            </div>
            {side === "left" && <ProjectDescription project={project} />}
        </div>
    );
}

export default Projects;
