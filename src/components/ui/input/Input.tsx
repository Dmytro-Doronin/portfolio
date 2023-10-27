import React, {ChangeEvent} from 'react';

import c from './input.module.css'

type inputType = {
    callback: (item: string) => void
    value: string
    title: string
    required: boolean
    label: string
    type: string
}

const Input = ({callback, value, title, label, type}: inputType) => {

    const setItem = (e:ChangeEvent<HTMLInputElement>) => {
        callback(e.target.value)
    }


    return (
        <div className={c.adTextBox}>
            <input
                onChange={setItem}
                value={value}
                className={value ? c.hasValue : ''}
                id='textbox'
                type={type}
                required
            />
            <span
                className={c.materialSymbols}
            >
                &#64;
            </span>
            <label htmlFor='textbox'>{title}</label>
            <div className={c.underline}></div>
        </div>
    );
};

export default Input;