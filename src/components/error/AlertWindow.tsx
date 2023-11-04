import c from './AlertWindow.module.css'

type ErrorPropsType = {
    error?: string
    sendingMessage?: string
}
export const AlertWindow = ({error, sendingMessage} : ErrorPropsType) => {

    const finalClass = error ? c.error : c.done

    return (
        <div className={finalClass}>
            {error || sendingMessage}
        </div>
    );
};

