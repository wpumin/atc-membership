import styled from 'styled-components'

export const StyleFirstTime = styled.div`
    .container-logo {
        min-height: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
        text-align: center;
    }

    .container-logo .logo-icon {
        align-self: center;
        width: 200px;
        height: 100%:
        height: fit-content;
    }

    .container-logo span {
        color: ${({ theme }) => theme.primaryDark};
        font-family: Roboto Medium;
        font-size: clamp(18px, 75%, 22px);
        margin-top: 1rem;
    }

    small{
        font-size: clamp(10px, 90%, 12px);
        color ${({ theme }) => theme.gray};
    }
`
