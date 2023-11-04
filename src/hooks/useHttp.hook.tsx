import {useCallback, useState} from "react";
// import {SendFormDataType} from "../pages/contactPage/ContactPage.tsx";

// type bodyType =   BodyInit & SendFormDataType


export const useHttpHook = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{message: string}>({message: ''})

    const request = useCallback(async (url: string, method = 'GET', body: any , headers: {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                // throw new Error('Something went wrong')
                setError({message: data.message })
            }

            setLoading(false)
            return data

        } catch (e) {
            setLoading(false)
            const error = (e as {message: string})
            setError(error)
        }
    }, [])
    const clearError = useCallback(() => setError({message: ''}), [])
    return {loading, error, request, clearError}
}
