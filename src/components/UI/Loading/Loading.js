import React from 'react'
import { StyleLoading } from './Loading.styled'
import LoadingIcon from '../../../images/loading_purple.svg'

const Loading = () => {
    return (
        <StyleLoading>
            <div className="container-loading">
                <img
                    src={LoadingIcon}
                    className="loading-icon"
                    alt="loading icon"
                />
            </div>
        </StyleLoading>
    )
}

export default Loading
