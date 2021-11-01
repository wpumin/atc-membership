import styled from 'styled-components'

export const StyledViewMember = styled.div`
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
