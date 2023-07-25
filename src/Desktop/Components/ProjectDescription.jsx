import React from 'react';
import styles from "../css/Project.module.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Technologies } from '../../config';

const ProjectDescription = ({ project, side }) => {
    return (
        <div className={styles.ProjectDescription}>
            <div className={styles.ProjectDescriptionTitle}>
                {project.projectName}
            </div>
            <div className={styles.ProjectDescriptionContainer}>
                <div className={styles.Description}>
                    <div className={styles.ContentWrapper}>
                        <span className={(side === "right") ? styles.RepoLink : styles.RepoLinkLeft}>
                            <a href="" target="_blank">
                                <GitHubIcon fontSize='large' />
                            </a>
                        </span>
                        {project.projectDescription}
                    </div>
                    <div className={(side === "right") ? styles.TechnologiesUsedRight : styles.TechnologiesUsed}>
                        {
                            project.projectTechnologies.map((tech, index) => {
                                return <img className={tech.animate && styles.Animate} key={index} src={tech.logo} alt="Hello" />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;
