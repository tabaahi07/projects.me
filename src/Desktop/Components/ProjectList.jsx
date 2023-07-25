import React from 'react';
import styles from "../css/ProjectList.module.css"
import Projects from './Projects';
import config from '../../config';

const ProjectList = () => {
    return (
        <div className={styles.ProjectList}>
            {
                config.projects.map((project, index) => {
                    return <Projects key={project.projectID} side={(index % 2 === 0) ? "left" : "right"} project={project} />
                })
            }
        </div>
    );
}

export default ProjectList;
