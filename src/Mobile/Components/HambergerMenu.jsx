import React from "react";
import styles from '../CSS/Header.module.css' ;
import config from '../../config' ;
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {motion} from "framer-motion"

const HambergerMenu = ()=> {
    return <motion.div className={styles.SocialLinks}
            initial={{height: 0}}
            animate={{height: "auto"}}
            exit={{height: 0}}>
         <a href={config.socialLinks.github} target="_blank" > <GitHubIcon fontSize="large"> </GitHubIcon> </a>
         <a href={config.socialLinks.linkedin} target="_blank" > <LinkedInIcon fontSize="large"></LinkedInIcon > </a>
         <a href={config.socialLinks.instagram} target="_blank" > <InstagramIcon fontSize="large"></InstagramIcon> </a>
    </motion.div>
}

export default HambergerMenu ;