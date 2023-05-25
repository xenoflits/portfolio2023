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
        <div>
            <div>header</div>
            <h1>Interesting projects for you to see</h1>
            <div>
                <div>buttonrail
                    <div onClick={()=>toggleproject("min")}>button left</div>
                    <div>counter: {projectNumber}</div>
                    <div onClick={()=>toggleproject("plus")}>button right</div>
                </div>
                <div>
                    <div>project title</div>
                    <div>project description</div>
                    <div>view project</div>
                    <div> project image</div>
                </div>
            </div>
        </div>
    )
}

export default Projects