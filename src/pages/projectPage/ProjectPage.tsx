
import ProjectCard from "../../components/project/ProjectCard";
import Title from "../../components/title/Title";

import {projectCardData} from "../../data/projectCardData";

import classes from '../../app/App.module.css'
import c from './projectPage.module.css'

const ProjectPage = () => {
    return (
        <div id={'ProjectPage'} className={c.projectPage}>
            <div className={classes.container}>
                <Title>My projects</Title>
                <div className={c.projectWrapper}>
                    {projectCardData.map(card => {
                        return <ProjectCard img={card.img} title={card.title} text={card.text} key={card.title}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;