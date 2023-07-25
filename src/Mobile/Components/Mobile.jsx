import React, { useState } from "react";
import styles from '../CSS/Mobile.module.css';
import Header from "./Header";
import HambergerMenu from "./HambergerMenu";
import ProjectList from "./ProjectList";
import { AnimatePresence } from "framer-motion";

const Mobile = () => {
    const [showSocialLinks, setShowSocialLinks] = useState(false);

    return <div className={styles.Mobile} >
        <Header showSocialLinks={showSocialLinks} setShowSocialLinks={setShowSocialLinks} />
        <AnimatePresence>
            {showSocialLinks && <HambergerMenu> </HambergerMenu>}
        </AnimatePresence>
        <ProjectList> </ProjectList>
    </div>
}

export default Mobile;