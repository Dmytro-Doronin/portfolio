import React, {useState} from 'react';
import Input from "../input/Input.tsx";
import TextArea from "../textArea/TextArea.tsx";
import Button from "../button/Button.tsx";

import c from './form.module.css'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessage] = useState('')
    const [label, setLabel] = useState({
        name: '&#9786;',
        email: '&#64;',
        message: '&#128386;'
    })

    const setNameHandler = (item: string) => {
        setName(item)
    }

    const setEmailHandler = (item: string) => {
        setEmail(item)
    }

    const setTExtMessageHandler = (item: string) => {
        setTextMessage(item)
    }

    const sendForm = (e: any) => {
        e.preventDefault()
        alert('The form has been submitted')
    }



    return (
        <form onSubmit={sendForm} className={c.form}>
            <div className={c.alert}>Please fill out the form on this section to contact with me or send me an email.
                I will answer you as soon as I receive your message.
            </div>
            <Input label={label.name}
                   required value={name}
                   callback={setNameHandler}
                   title='Name'
                   type={'text'}
            />
            <Input label={label.email}
                   required value={email}
                   callback={setEmailHandler}
                   title='Email'
                   type={'email'}
            />
            <TextArea label={label.message}
                      value={textMessage}
                      callback={setTExtMessageHandler}
                      title={'Message'}
            />
            <Button type={'submit'}>Send</Button>
        </form>
    );
};

export default Form;