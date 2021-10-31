import React from 'react'
import { StyledCard } from './Card.styled'

const Card = (props) => {
    return <StyledCard className="card">{props.children}</StyledCard>
}

export default Card
