
// import {ImgTechnoCArdType} from "../../data/technologiesCardVariable.tsx";

import c from './tecnologiesCard.module.css'

type TecnologiesCardType = {
    name: string
    Img: any
}


const TecnologiesCard = ({name, Img}: TecnologiesCardType) => {

    let cardClass

    switch (name) {
        case "HTML":
            cardClass = c.HTML
            break
        case "CSS":
            cardClass = c.CSS
            break
        case "JS":
            cardClass = c.JS
            break
        case "GIT":
            cardClass = c.GIT
            break
        case "TYPESCRIPT":
            cardClass = c.TYPESCRIPT
            break
        case "REDUX":
            cardClass = c.REDUX
            break

    }

    return (
        <a href="#" className={`${c.card} ${cardClass}`}>
            <div className={c.cor__cobertura}></div>
            <div className={c.circulo}>
                <Img/>
            </div>
            <p className={c.name}>{name}</p>
            <div className={c.arrow}>&#10144;</div>
        </a>
    );
};

export default TecnologiesCard;