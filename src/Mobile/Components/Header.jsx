import React from "react";
import styles from '../CSS/Header.module.css' ;
import config from '../../config' ;

const Header = (props)=>{
   return  <div className={styles.Header} >
         <div className={styles.HambergerMenu}>
             
         </div>
        
        <div className={styles.Title} >
             {config.name}
        </div>

        <div className={styles.CVBtn} >
            <button> <a href={config.resumeLink} target="_blank" > CV </a> </button>
        </div>
    </div>
}

export default Header ;