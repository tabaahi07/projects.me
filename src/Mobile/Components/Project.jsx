import React from "react";
import styles from "../CSS/Project.module.css";
import config from "../../config";
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = (props) => {
  return (
    <div className={styles.Project}>
      <div className={styles.Heading}>
        {config.projects[props.id].projectName}
      </div>

      <div className={styles.AppScreenshot}>
        <a > <img src={`https://drive.google.com/uc?export=view&id=${config.projects[props.id].projectScreenshotID}`} /> </a>
      </div>

      <div className={styles.TechWrapper}>
        <div className={styles.Technologies}>
          {config.projects[props.id].projectTechnologies.map((tech) => {
            return <img src={tech} />
          })}
        </div>

        <div className={styles.RepoLinkBtn}>
          <button> <a href={config.projects[props.id].projectGithubRepo} target="_blank"> <GitHubIcon fontSize="large"/> </a> </button>
        </div>
      </div>

      <div className={styles.Description}>
        {config.projects[props.id].projectDescription}
      </div>
    </div>
  );
};

export default Project;
