import React from 'react';
import styles from "../css/Desktop.module.css"
import Header from './Header';
import ProjectList from './ProjectList';

const Desktop = () => {
    return (
        <div className={styles.Desktop}>
            <Header />
            <ProjectList />
        </div>
    );
}

export default Desktop;
