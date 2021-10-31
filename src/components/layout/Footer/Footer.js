import React from 'react'
import { StyledFooter, StyledFooterHr } from './Footer.styled'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterHr />
            <small>
                Copyright © ATC Membership{' '}
                <span>(Beta version for Thai users) - 2021</span>
            </small>
        </StyledFooter>
    )
}

export default Footer
