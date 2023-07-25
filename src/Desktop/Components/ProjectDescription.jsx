import React from 'react';
import styles from "../css/Project.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Technologies } from '../../config';

const ProjectDescription = ({ project }) => {
    return (
        <div className={styles.ProjectDescription}>
            <div className={styles.ProjectDescriptionTitle}>
                {project.projectName}
            </div>
            <div className={styles.ProjectDescriptionContainer}>
                <div className={styles.TechnologiesUsed}>
                    {
                        project.projectTechnologies.map((tech, index) => {
                            return <img key={index} src={tech} alt="Hello" />
                        })
                    }
                </div>
                <div className={styles.Description}>
                    <span className={styles.RepoLink}>
                        <a href="">
                            <GitHubIcon fontSize='large' />
                        </a>
                    </span>
                    {project.projectDescription}
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;
