import React , {useState}  from "react";
import styles from '../CSS/Mobile.module.css' ;
import Header from "./Header";
import HambergerMenu from "./HambergerMenu";

const Mobile = ()=> {
   const [showSocialLinks , setShowSocialLinks] = useState(false) ;

   return <div className={styles.Mobile} >
       <Header showSocialLinks={showSocialLinks} setShowSocialLinks={setShowSocialLinks} /> 
       {showSocialLinks && <HambergerMenu> </HambergerMenu>}
   </div>
}

export default Mobile ;