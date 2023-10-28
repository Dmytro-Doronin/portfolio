
// import {ImgTechnoCArdType} from "../../data/technologiesCardVariable.tsx";
import {ImgTechnoCardType} from "../../data/technologiesCardVariable.tsx";
import c from './tecnologiesCard.module.css'

type TechnologiesCardType = {
    name: string
    Img: ImgTechnoCardType
}


const TechnologiesCard = ({name, Img}: TechnologiesCardType) => {

    return (
        <div className={`${c.card} ${c[name]}`}>
            <div className={c.cor__cobertura}></div>
            <div className={c.circulo}>
                <Img/>
            </div>
            <p className={c.name}>{name}</p>
            {/*<div className={c.arrow}>&#10144;</div>*/}
        </div>
    );
};

export default TechnologiesCard;