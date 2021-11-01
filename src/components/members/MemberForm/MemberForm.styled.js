import styled from 'styled-components'

export const StyledMemberForm = styled.div`
    .form-control.invalid input {
        color: ${({ theme }) => theme.danger};
        background: ${({ theme }) => theme.dangerOpacity} !important;
    }

    .form-control.invalid {
        color: ${({ theme }) => theme.danger};
        border: 1px solid ${({ theme }) => theme.danger} !important;
        background: ${({ theme }) => theme.dangerOpacity};
    }

    .form-control.invalid::placeholder {
        color: ${({ theme }) => theme.danger};
    }

    .form-control {
        margin-bottom: 1rem;
    }

    .form-control.invalid {
        margin-bottom: 0 !important;
    }

    .action-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (max-width: 576px) {
        .action-button {
            flex-direction: column !important;
        }

        .action-button .btn-primary {
            margin-right: 0rem !important;
            margin-bottom: 0.5rem;
        }
    }

    .action-button * {
        flex: 1;
    }

    .action-button .btn-primary {
        margin-right: 1rem;
    }

    .form-text {
        margin-bottom: 0.5rem;
    }

    .from-group label {
        text-transform: capitalize;
    }

    .text-danger {
        font-size: 0.875em;
    }
`
