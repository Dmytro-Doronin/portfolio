import {ChangeEvent} from 'react';
import {SvgType} from "../../../data/technologiesCardVariable.tsx";
import c from './input.module.css'

type inputType = {
    callback: (item: ChangeEvent<HTMLInputElement>) => void
    value: string
    title: string
    required: boolean
    name: string
    Icon: SvgType
    type: string
}

const Input = ({callback, value, title, Icon, type, name}: inputType) => {

    return (
        <div className={c.adTextBox}>
            <input
                name={name}
                onChange={callback}
                value={value}
                className={value ? c.hasValue : ''}
                id='textbox'
                type={type}
                required
            />
            <span
                className={c.materialSymbols}
            >
            <Icon/>
            </span>
            <label htmlFor='textbox'>{title}</label>
            <div className={c.underline}></div>
        </div>
    );
};

export default Input;