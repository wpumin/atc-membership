import React from 'react'
import { StyledHighlight } from './Highlight.styled'

const Header = (props) => {
    return (
        <StyledHighlight className={props.color}>{props.text}</StyledHighlight>
    )
}

export default Header
