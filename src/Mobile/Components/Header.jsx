import React from "react";
import styles from "../CSS/Header.module.css";
import config from "../../config";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.HambergerMenu}>
        <button onClick={e => props.setShowSocialLinks(!props.showSocialLinks)}>
            {props.showSocialLinks ? <ArrowBackIcon> </ArrowBackIcon> : <MenuIcon> </MenuIcon>}
        </button>
      </div>

      <div className={styles.Title}>{config.name}</div>

      <div className={styles.CVBtn}>
        <button>
          {" "}
          <a href={config.resumeLink} target="_blank">
            {" "}
            CV{" "}
          </a>{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
