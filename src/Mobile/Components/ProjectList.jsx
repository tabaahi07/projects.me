import React  from "react";
import styles from '../CSS/ProjectList.module.css' ;
import config from '../../config' ;
import Project from './Project' ;

const ProjectList = ()=> {
    return <div className={styles.ProjectList} >
        { config.projects.map(project => {
            return <Project id={project.id} > </Project>
        })}
    </div>
}

export default ProjectList ;