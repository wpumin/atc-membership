import styled from 'styled-components'

export const StyledTable = styled.div`
    .table {
        margin-bottom: 0 !important;
        min-width: 850px !important;
        overflow-x: scroll;
    }

    th.center,
    td.center {
        text-align: center;
    }

    [class$='-column'] {
        background: ${({ theme }) => theme.primaryDark} !important;
        color: ${({ theme }) => theme.white} !important;
    }

    .id-column {
        width: 6%;
        text-align: center;
    }

    .name-column {
        width: 22%;
    }

    .email-column {
        width: 22%;
    }

    .tel-column {
        width: 17%;
    }

    .action-column {
        width: 13%;
    }

    .action-button {
        margin-top: -1px;
        text-align: center;
        justify-content: center;
    }

    [class^='action-button__'] {
        height: 20px;
        width: 20px;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .action-button__remove,
    .action-button__watchlist {
        filter: invert(25%) brightness(200%);
    }

    .action-button__edit {
        filter: invert(27%) sepia(75%) saturate(2476%) hue-rotate(40deg)
            brightness(180%);
    }

    .action-button__watchlist.active,
    .action-button__view {
        filter: invert(30%) sepia(50%) saturate(2476%) hue-rotate(270deg)
            brightness(80%);
    }

    .form-inline {
        display: flex;
        flex-direction: row;
        margin: 0.25rem 0 1rem 0 !important;
    }

    .form-inline input {
        flex: 1;
    }

    .form-inline button {
        margin-left: 0.5rem;
        flex: 0.125;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .form-inline button img {
        margin-left: 0.25rem;
        width: 24px;
        height: 100%;
    }

    .smart-input {
        display: flex;
        flex-direction: row;
        flex: 1;
        position: relative;
    }

    .close-button {
        cursor: pointer;
        filter: invert(25%) brightness(200%);
        position: absolute;
        width: 20px;
        right: 0.5rem;
        top: 0.5rem;
    }

    .close-button:hover {
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.01));
    }

    .close-button.hide {
        display: none !important;
    }

    .no-data {
        width: 100%;
        heigh: 100%;
        text-align: center;
    }

    .no-data img {
        margin-top: 6rem;
        width: 200px;
        height: 100%;
    }

    .no-data > h2 {
        margin-top: 1.5rem;
        font-family: Roboto Regular !important;
        font-size: clamp(16px, 75%, 24px) !important;
        color: ${({ theme }) => theme.black} !important;
        word-break: break-word;
    }
`
