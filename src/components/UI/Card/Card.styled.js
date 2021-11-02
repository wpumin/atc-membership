import styled from 'styled-components'

export const StyledCard = styled.div`
        width: 100%;
        margin-top: 1.25rem;
        margin-bottom: 2rem;
        padding: 1.25rem;
        background ${({ theme }) => theme.white} !important;
        border-radius: ${({ theme }) => theme.carBorderRadius};
        box-shadow: ${({ theme }) => theme.boxShadow};
        color: ${({ theme }) => theme.primary};
        min-height: 600px;
        height: auto;
        overflow-y: overlay;
        overflow-x: hidden;

        @media only screen and (min-width: 768px){
            padding: 1.5rem !important;
        }
`
