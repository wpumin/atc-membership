import React from 'react'
import { StyledContainer } from './Container.styled'

function Container(props) {
    return (
        <StyledContainer className="container">
            {props.children}
        </StyledContainer>
    )
}

export default Container
