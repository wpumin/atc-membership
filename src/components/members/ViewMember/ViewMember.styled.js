import styled from 'styled-components'

export const StyledViewMember = styled.div`
    h2 {
        color: ${({ theme }) => theme.primaryDark};
        font-family: Roboto Bold;
        font-size: clamp(24px, 75%, 36px);
        background: ${({ theme }) => theme.primaryOpacity};
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border-left: 7.5px solid ${({ theme }) => theme.primaryDark};
        margin-bottom: 1rem;
    }

    ul {
        border: 1px solid ${({ theme }) => theme.lightGray};
    }

    li {
        display: flex;
        padding: 0.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    }

    li * {
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    li:nth-child(2n) {
        background: ${({ theme }) => theme.grayOpacity};
    }
`
