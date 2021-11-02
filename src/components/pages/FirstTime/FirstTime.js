import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { StyleFirstTime } from './FirstTime.styled'
import { PATH } from '../../../const/Constant'
import AccentureLogoIcon from '../../../images/accenture.gif'

const FirstTime = () => {
    const [time, setTime] = useState(5)
    const history = useHistory()
    const key = 'redirectOccured'
    let second = time > 1 ? 'seconds' : 'second'

    useEffect(() => {
        if (localStorage.getItem(key)) {
            history.push(PATH)
        } else {
            localStorage.setItem(key, true)
            history.push('/')
            const timeoutId = setTimeout(() => {
                history.push(PATH)
            }, time * 1000 + 200)
            const intervalId = setInterval(() => {
                setTime((previousTime) => previousTime - 1)
            }, 1000)
            return () => {
                clearTimeout(timeoutId)
                clearInterval(intervalId)
            }
        }
        return () => {
            console.log('cleaned up')
        }
    }, [])

    return (
        <StyleFirstTime>
            <div className="container-logo">
                <img
                    src={AccentureLogoIcon}
                    alt="accenture logo"
                    aria-label="accenture logo"
                    className="logo-icon"
                />
                <span>" Welcome to ATC Membership "</span>
                <small>
                    {`Please wait, this page will be redirected to homepage within ${time} ${second}`}
                </small>
            </div>
        </StyleFirstTime>
    )
}

export default FirstTime
