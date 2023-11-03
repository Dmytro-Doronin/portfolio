import {useCallback, useState} from "react";

export const useHttpHook = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{message: string}>({message: ''})

    const request = useCallback(async (url: string, method = 'GET', body = null, headers: {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error('Что-то пошло не так')
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
