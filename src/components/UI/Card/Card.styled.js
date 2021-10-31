import styled from 'styled-components'

export const StyledCard = styled.div`
        width: 100%;
        margin-top: 1.25rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background ${({ theme }) => theme.white} !important;
        border-radius: ${({ theme }) => theme.carBorderRadius};
        box-shadow: ${({ theme }) => theme.boxShadow};
        color: ${({ theme }) => theme.primary};
        height: 600px;
        overflow-y: scroll;
`
