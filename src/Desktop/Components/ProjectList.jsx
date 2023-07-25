import React from 'react';
import styles from "../css/ProjectList.module.css"
import Projects from './Projects';
import config from '../../config';

const ProjectList = () => {
    return (
        <div className={styles.ProjectList}>
            <Projects project={config.projects[0]} />
        </div>
    );
}

export default ProjectList;
