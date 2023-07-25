import React  from "react";
import styles from '../CSS/ProjectList.module.css' ;
import config from '../../config' ;
import Project from './Project' ;

export default ProjectList = ()=> {
    return <div className={styles.ProjectList} >
        { config.projects.map(project => {
              <Project id={project.id} > </Project>
        })}
    </div>
}