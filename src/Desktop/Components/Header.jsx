import React from 'react';
import styles from "../css/Header.module.css"
import config from '../../config';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import nameImg from "../../assets/Name.png"

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.SocialLinks}>
                {config.socialLinks.github !== undefined && <a href={config.socialLinks.github} target="_blank"> <GitHubIcon fontSize='large' /></a>}
                {config.socialLinks.linkedin !== undefined && <a href={config.socialLinks.linkedin} target="_blank"><LinkedInIcon fontSize='large' /></a>}
                {config.socialLinks.instagram !== undefined && <a href={config.socialLinks.instagram} target="_blank"><InstagramIcon fontSize='large' /></a>}
            </div>
            <div className={styles.Title}>
                {config.name}
            </div>
            <div className={styles.ResumeBtn}>
                <a href="https://www.google.com" target="_blank">
                    <button>Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Header;
