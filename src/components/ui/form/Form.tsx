import {ChangeEvent, FormEvent, useState} from 'react';
import Input from "../input/Input.tsx";
import TextArea from "../textArea/TextArea.tsx";
import Button from "../button/Button.tsx";

import c from './form.module.css'
import UserSvg from "../../../assets/FormSvg/UserSvg.tsx";
import EmailSvg from "../../../assets/FormSvg/EmailSvg.tsx";
import MessageSvg from "../../../assets/FormSvg/MessageSvg.tsx";
import {SendFormDataType} from "../../../pages/contactPage/ContactPage.tsx";
import {Loader} from "../../loader/Loader.tsx";
import {AlertWindow} from "../../error/AlertWindow.tsx";

type FormType = {
    sendForm: (data: SendFormDataType) => void
    error?: {message: string}
    responseMessage?: string
    loading?: boolean
}

const Form = ({sendForm, loading, error, responseMessage}: FormType) => {

    const [dataForm, setDataForm] = useState<SendFormDataType>({
        name: '',
        email: '',
        text: ''
    })

    const [label] = useState({
        name: UserSvg,
        email: EmailSvg,
        message: MessageSvg
    })

    const setDataHandler = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const sendFormHandler = (e: FormEvent) => {
        e.preventDefault()
        sendForm(dataForm)
        setDataForm({name: '', email: '', text: ''})
    }

    return (
        <form onSubmit={sendFormHandler} className={c.form}>
            <div className={c.alert}>Please fill out the form on this section to contact with me or send me an email.
                I will answer you as soon as I receive your message.
            </div>
            <Input
                   name={'name'}
                   Icon={label.name}
                   required
                   value={dataForm.name}
                   callback={setDataHandler}
                   title='Name'
                   type={'text'}
            />
            <Input Icon={label.email}
                   required
                   name={'email'}
                   value={dataForm.email}
                   callback={setDataHandler}
                   title='Email'
                   type={'email'}
            />
            <TextArea Icon={label.message}
                      name={'text'}
                      value={dataForm.text}
                      callback={setDataHandler}
                      title={'Message'}
            />
            <Button disabled={loading} type={'submit'}>Send</Button>
            <div className={c.infoBlock}>
                {loading ? <Loader/> : null}
                {error?.message ? <AlertWindow error={error.message}/> : null}
                {responseMessage ? <AlertWindow sendingMessage={responseMessage}/> : null}
            </div>
        </form>
    );
};

export default Form;