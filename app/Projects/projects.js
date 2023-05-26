"use client"
import styles from './projects.module.css'
import { useState } from 'react'

const Projects = () => {
    const [projectNumber,setProjectNumber] = useState(0);

    const toggleproject = (type) => {
        switch (type) {
            case "plus":
            setProjectNumber(projectNumber + 1); 
            break;
            case "min":
            if (projectNumber > 0){
            setProjectNumber(projectNumber - 1);
            }    
            break;          }
    }


    return (
        <div className={styles.project}>
            <div className={styles.header}>header</div>
            <h1 className={styles.headertext}>Interesting projects for you to see</h1>
            <div className={styles.currentproject}>
                <div className={styles.projectbuttonrail}>buttonrail
                    <div className={styles.projectbutton} onClick={()=>toggleproject("min")}>button left</div>
                    <div className={styles.projectcounter}>counter: {projectNumber}</div>
                    <div className={styles.projectbutton}onClick={()=>toggleproject("plus")}>button right</div>
                </div>
                <div>
                    <div className={styles.projecttitle}>project title</div>
                    <div className={styles.projectdesc}>project description</div>
                    <div className={styles.projectview}>view project</div>
                    <div className={styles.projectimage}> project image</div>
                </div>
            </div>
        </div>
    )
}

export default Projects