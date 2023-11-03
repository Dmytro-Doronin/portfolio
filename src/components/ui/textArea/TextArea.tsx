import {ChangeEvent} from 'react';
import c from './textArea.module.css'
import {SvgType} from "../../../data/technologiesCardVariable.tsx";

type textAreaType = {
    callback: (item: ChangeEvent<HTMLTextAreaElement>) => void
    value: string
    title: string,
    name: string
    Icon: SvgType
}

const TextArea = ({callback, value, title, Icon, name}: textAreaType) => {



    return (
        <div className={c.adTextBox}>
            <textarea
                name={name}
                onChange={callback}
                value={value}
                className={value ? c.hasValue : ''}
                id='textbow'
            />
            <span
                className={c.materialSymbols}
            >
                <Icon/>
            </span>
            <label htmlFor='textbow'>{title}</label>
            <div className={c.underline}></div>
        </div>


    );
};

export default TextArea;