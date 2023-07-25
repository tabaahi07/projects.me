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
        <img src={config.projects[props.id].projectScreenshot} />
      </div>

      <div className={styles.TechWrapper}>
        <div className={styles.Technologies}>
          {config.projects[props.id].projectTechnologies.map((tech) => {})}
        </div>

        <div className={styles.RepoLinkBtn}>
          <button> <GitHubIcon/>  </button>
        </div>
      </div>

      <div className={styles.Description}>
        {config.projects[props.id].Description}
      </div>
    </div>
  );
};

export default Project;
