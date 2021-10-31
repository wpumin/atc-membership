import styled from 'styled-components'

export const StyledNotFound = styled.div`
    .not-found {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .not-found__image {
        max-width: 300px;
    }

    @media only screen and (min-width: 576px) {
        .not-found__image {
            max-width: 500px !important;
        }
    }

    .not-found__content {
        width: 100%;
    }

    .not-found__content * {
        margin-top: 0.5rem;
    }

    .not-found__content p {
        margin-top: 2rem;
    }

    @media only screen and (min-width: 992px) {
        .not-found__content {
            width: 75% !important;
        }
    }

    .not-found__back {
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-cotent: flex-start;
        align-items: center;
        transition: 0.3s linear;
    }

    .not-found__back span {
        color: ${({ theme }) => theme.primaryDark};
        font-family: Roboto Bold;
        font-size: clamp(20px, 75%, 26px);
        text-shadow: ${({ theme }) => theme.textShadow};
    }

    .not-found__arrow {
        margin-right: 0.75em;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.25));
    }

    .not-found__link {
        display: flex;
        flex-direction: row;
    }

    .not-found__link *:not(:last-child) {
        height: 22px;
        border-right: 2px solid ${({ theme }) => theme.primaryDark};
    }

    .not-found__link * {
        font-family: Roboto Medium;
        transition: 0.3s linear;
        color: ${({ theme }) => theme.primaryDark} !important;
        padding-right: 0.75rem !important;
        margin-right: 0.75rem !important;
    }

    .not-found__link *:hover {
        color: ${({ theme }) => theme.primaryDark} !important;
    }

    .not-found * {
        text-decoration: none;
    }

    img.not-found__arrow {
        filter: invert(18%) brightness(55%);
    }
`
