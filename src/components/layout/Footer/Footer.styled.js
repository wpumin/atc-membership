import styled from 'styled-components'

export const StyledFooter = styled.footer`
    width: 75%;
    margin: 0 auto;

    small {
        margin-top: -0.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
        display: block;
        width: 100%;
        color: ${({ theme }) => theme.white};
        word-wrap: break-word;
        font-size: clamp(0.75em, 75%, 0.875em);
    }

    small span {
        display: block;
        color: ${({ theme }) => theme.white};
        word-wrap: break-word;
    }

    @media only screen and (min-width: 992px) {
        margin-top: 2.5rem !important;
    }

    @media only screen and (min-width: 786px) {
        hr {
            width: 25% !important;
        }
        small span {
            display: inline;
        }
    }
`

export const StyledFooterHr = styled.hr`
    width: 80%;
    border-top: 1px solid ${({ theme }) => theme.whiteOpacity25};
`
