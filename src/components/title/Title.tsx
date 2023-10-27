import c from './title.module.css'
import {ReactNode} from "react";

type TitlePropType = {
    children: ReactNode
    textColor?: string
}

const Title = ({children, textColor}: TitlePropType) => {

    const classTitle = textColor === 'black' ? `${c.title} ${c.textColorBlack}` : c.title

    return (
        <h2 className={classTitle}>
            {children}
        </h2>
    );
};

export default Title;