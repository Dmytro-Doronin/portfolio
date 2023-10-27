import React, {ChangeEvent} from 'react';
import c from './textArea.module.css'

type textAreaType = {
    callback: (item: string) => void
    value: string
    title: string
    label: string
}

const TextArea = ({callback, value, title, label}: textAreaType) => {

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
                &#128386;
            </span>
            <label htmlFor='textbow'>{title}</label>
            <div className={c.underline}></div>
        </div>


    );
};

export default TextArea;