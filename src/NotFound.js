import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {

        setTimeout(() => {
            navigate()
        }, 1000);
    }, [])


    return <h1>Not found</h1>
}

export default NotFound