import Title from "../../components/title/Title";
import TecnologiesCard from "../../components/technologiesCard/TecnologiesCard";
import {technologiesCardVariable} from "../../data/technologiesCardVariable.tsx";

import c from './technologies.module.css'
import classes from '../../app/App.module.css'
const TechnologiesPage = () => {
    return (
        <div className={c.technologiesPage}>
            <div className={classes.container}>
                <Title textColor={'black'}>My Technologies</Title>
                    <div className={c.technologiesWrapper}>
                        {technologiesCardVariable.map(item => {
                            return <TecnologiesCard key={item.id} name={item.name} Img={item.Img}/>
                        })}

                    </div>


            </div>

        </div>
    );
};

export default TechnologiesPage;