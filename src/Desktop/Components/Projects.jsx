import React from 'react';
import styles from "../css/Project.module.css"
import ProjectDescription from './ProjectDescription';

const Projects = ({project}) => {
    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectScreenshot}>
            <img src={`https://drive.google.com/uc?export=view&id=${project.projectScreenshotID}`} alt="drive image"/>
            </div>
            <ProjectDescription project={project} />
        </div>
    );
}

export default Projects;
