import React from 'react';
import styles from "../CSS/Mobile.module.css"
import Header from './Header';
import ProjectList from './ProjectList';

const Desktop = () => {
    return (
        <div className={styles.Mobile}>
            <Header />
            <ProjectList />
        </div>
    );
}

export default Desktop;
