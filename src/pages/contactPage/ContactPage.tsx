
import Title from "../../components/title/Title";
import Form from "../../components/ui/form/Form";

import {useHttpHook} from "../../hooks/useHttp.hook.tsx";

import c from './contactPage.module.css'
import classes from '../../app/App.module.css'

export type SendFormDataType = {
    name: string,
    email: string,
    text: string
}

const ContactPage = () => {

    const {request, loading,clearError, error} = useHttpHook()

    const sendForm = (data: SendFormDataType) => {

    }

    return (
        <div id={'ContactPage'} className={c.contactPage}>
            <div className={classes.container}>
                <Title textColor={'black'}>Contact</Title>
                <Form sendForm={sendForm}/>
            </div>
        </div>
    );
};

export default ContactPage;