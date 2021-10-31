import React from 'react'
import Card from '../../UI/Card'
import Container from '../../../helper/Container'

const MainWrapper = (props) => {
    return (
        <Container role="main">
            <Card>{props.children}</Card>
        </Container>
    )
}

export default MainWrapper
