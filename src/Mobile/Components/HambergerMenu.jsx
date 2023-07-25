import React from "react";
import styles from '../CSS/Header.module.css' ;
import config from '../../config' ;

const HambergerMenu = ()=> {
    <div className={styles.HambergerMenu}>
         <a href={config.socialLinks.github} target="_blank" > G </a>
         <a href={config.socialLinks.linkedin} target="_blank" > L </a>
         <a href={config.socialLinks.instagram} target="_blank" > I </a>
    </div>
}

export default HambergerMenu ;