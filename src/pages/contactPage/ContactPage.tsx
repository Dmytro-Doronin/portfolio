
import Title from "../../components/title/Title";
import Form from "../../components/ui/form/Form";

import {useHttpHook} from "../../hooks/useHttp.hook.tsx";

import c from './contactPage.module.css'
import classes from '../../app/App.module.css'
import {useEffect, useState} from "react";


export type SendFormDataType = {
    name: string,
    email: string,
    text: string
}

const ContactPage = () => {
    const [responseMessage, setResponseMessage] = useState<string>()
    const {request, loading,clearError, error} = useHttpHook()

    const sendForm = async (data: SendFormDataType) => {
        const JData =  JSON.stringify(data)
        try {
            const response = await request('http://localhost:5000/api/getOrder', 'POST', JData, {'Content-type': 'application/json'})
            if (response) {
                console.log(response)
                setResponseMessage(response.message)
            }

        } catch (e) {
            console.log(e)
            setResponseMessage('The form was not submitted')
        }

    }

    useEffect(() => {
        if (error.message) {
            setTimeout(() => {
                clearError()
            }, 5000)
        } else if (responseMessage) {
            setTimeout(() => {
                setResponseMessage('')
            }, 5000)
        }
    })

    return (
        <div id={'ContactPage'} className={c.contactPage}>
            <div className={classes.container}>
                <Title textColor={'black'}>Contact</Title>
                <Form responseMessage={responseMessage} loading={loading} error={error} sendForm={sendForm}/>
            </div>
        </div>
    );
};

export default ContactPage;