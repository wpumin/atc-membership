import styled from 'styled-components'

export const StyledHighlight = styled.h2`
    font-family: Roboto Bold;
    font-size: clamp(24px, 75%, 36px);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin-bottom: 1rem;

    &.primary {
        color: ${({ theme }) => theme.primaryDark};
        background: ${({ theme }) => theme.primaryOpacity};
        border-left: 7.5px solid ${({ theme }) => theme.primaryDark};
    }

    &.secondary {
        color: ${({ theme }) => theme.secondarySuperDark};
        background: ${({ theme }) => theme.secondaryOpacity};
        border-left: 7.5px solid ${({ theme }) => theme.secondarySuperDark};
    }
`
