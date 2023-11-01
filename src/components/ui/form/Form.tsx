import {FormEvent, useState} from 'react';
import Input from "../input/Input.tsx";
import TextArea from "../textArea/TextArea.tsx";
import Button from "../button/Button.tsx";

import c from './form.module.css'
import UserSvg from "../../../assets/FormSvg/UserSvg.tsx";
import EmailSvg from "../../../assets/FormSvg/EmailSvg.tsx";
import MessageSvg from "../../../assets/FormSvg/MessageSvg.tsx";

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessage] = useState('')
    const [label] = useState({
        name: UserSvg,
        email: EmailSvg,
        message: MessageSvg
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

    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('The form has been submitted')
        setName('')
        setEmail("")
        setTextMessage("")
    }



    return (
        <form onSubmit={sendForm} className={c.form}>
            <div className={c.alert}>Please fill out the form on this section to contact with me or send me an email.
                I will answer you as soon as I receive your message.
            </div>
            <Input Icon={label.name}
                   required value={name}
                   callback={setNameHandler}
                   title='Name'
                   type={'text'}
            />
            <Input Icon={label.email}
                   required value={email}
                   callback={setEmailHandler}
                   title='Email'
                   type={'email'}
            />
            <TextArea Icon={label.message}
                      value={textMessage}
                      callback={setTExtMessageHandler}
                      title={'Message'}
            />
            <Button type={'submit'}>Send</Button>
        </form>
    );
};

export default Form;