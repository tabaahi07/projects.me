import React from "react";
import styles from '../CSS/Header.module.css' ;
import config from '../../config' ;
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HambergerMenu = ()=> {
    return <div className={styles.SocialLinks}>
         <a href={config.socialLinks.github} target="_blank" > <GitHubIcon fontSize="large"> </GitHubIcon> </a>
         <a href={config.socialLinks.linkedin} target="_blank" > <LinkedInIcon fontSize="large"></LinkedInIcon > </a>
         <a href={config.socialLinks.instagram} target="_blank" > <InstagramIcon fontSize="large"></InstagramIcon> </a>
    </div>
}

export default HambergerMenu ;