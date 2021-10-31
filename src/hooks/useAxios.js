import { useState, useEffect } from 'react'
import axios from 'axios'

function useAxios({ url, method, body = null }) {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = () => {
            axios[method](url, JSON.parse(body))
                .then((res) => {
                    setResponse(res.data)
                })
                .catch((err) => {
                    setError(err)
                    console.log(err)
                })
                .finally(() => {
                    const loadingFadeOut = setTimeout(() => {
                        setLoading(false)
                    }, 250)
                    return () => clearTimeout(loadingFadeOut)
                })
        }

        fetchData()
    }, [method, url, body])

    return { response, error, loading }
}

export default useAxios
