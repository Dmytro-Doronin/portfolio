import {ChangeEvent} from 'react';
import c from './textArea.module.css'
import {SvgType} from "../../../data/technologiesCardVariable.tsx";

type textAreaType = {
    callback: (item: string) => void
    value: string
    title: string
    Icon: SvgType
}

const TextArea = ({callback, value, title, Icon}: textAreaType) => {

    const setItem = (e:ChangeEvent<HTMLTextAreaElement>) => {
        callback(e.target.value)
    }

    return (
        <div className={c.adTextBox}>
            <textarea
                onChange={setItem}
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