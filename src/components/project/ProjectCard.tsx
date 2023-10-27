
import Button from "../ui/button/Button.tsx";


import c from './projectCard.module.css'

type ProjectCardProps = {
    img: string
    title: string
    text: string
}

const ProjectCard = ({img, title, text}: ProjectCardProps) => {


    return (
        <div className={c.projectCard}>
            <div className={c.imgContainer}>
                <div className={c.imgModal}>
                    <Button>View</Button>
                </div>
                <img className={c.cardImg} src={img} alt="ads"/>

            </div>
            <div className={c.infoBlock}>
                <h3 className={c.title}>{title}</h3>
                <div className={c.text}>{text}</div>
            </div>
        </div>
    );
};

export default ProjectCard;