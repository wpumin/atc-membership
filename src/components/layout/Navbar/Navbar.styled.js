import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    #hamburger-wrapper {
        display: inline-block;
        display: flex;
        align-items: center;
        width: 30px;
        height: 40px;
        margin: 0;
        padding: 0;
    }

    @media only screen and (min-width: 992px) {
        #hamburger-wrapper {
            display: none;
        }

        nav {
            padding-top: 1rem !important;
        }
    }

    .burger {
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }

    .burger,
    .burger:before,
    .burger:after {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.white};
        width: 80%;
        height: 3px;
        transition: margin 0.1s 0.2s, transform 0.2s;
    }

    .burger:before,
    .burger:after {
        margin: 0;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .burger:before {
        margin-top: -7px;
    }

    .burger:after {
        margin-top: 7px;
    }

    .open .burger {
        transform: rotate(45deg);
    }

    .open .burger,
    .open .burger:before,
    .open .burger:after {
        transition: margin 0.2s, transform 0.1s 0.2s;
    }

    .open .burger:before,
    .open .burger:after {
        margin-top: 0;
    }

    .open .burger:after {
        transform: rotate(-90deg);
    }

    .navbar-collapse {
        justify-content: flex-end;
    }

    [class^='nav'] {
        color: ${({ theme }) => theme.white} !important;
    }

    .nav-item:not(:last-child) {
        margin-right: 2rem;
    }

    .nav-item.active .nav-link,
    .nav-item:hover .nav-link {
        color: ${({ theme }) => theme.secondarySpare} !important;
    }

    .navbar {
        padding: 0;
    }

    .nav-link {
        font-family: Roboto Medium;
        font-size: 1.125em;
    }

    @media only screen and (max-width: 992px) {
        .navbar-nav {
            width: 100%;
            padding: 0rem 1rem;
            background-color: ${({ theme }) => theme.primaryDark};
            height: 100vh;
        }

        .container {
            padding: 0 !important;
            max-width: 992px;
        }
    }

    .navbar-collapse {
        transition: 0.2s linear;
    }

    .navbar-collapse.hide {
        transition: 0.2s linear;
        height: 0 !important;
    }

    @media only screen and (min-width: 1200px) {
        .navbar-header {
            padding: 0.5rem 0rem !important;
        }
    }

    .navbar-header {
        padding: 0.5rem 1rem;
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    .navbar-brand {
        font-size: clamp(22px, 75%, 26px);
        font-family: Roboto Bold;
    }

    @media only screen and (max-width: 768px) {
        .font-resize {
            border-top: 1px solid ${({ theme }) => theme.whiteOpacity25} !important;
            width: 100%;
            margin-top: 1rem;
            padding-top: 0.5rem;
        }
        .font-resize *:not(:last-child) {
            margin-right: 1rem !important;
        }
    }

    .font-resize {
        cursor: pointer;
        align-self: center;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
    }

    .font-resize > .label {
        color: ${({ theme }) => theme.white} !important;
    }

    .font-resize > * {
        color: ${({ theme }) => theme.whiteOpacity50};
    }

    .font-resize > *:hover,
    *.active {
        color: ${({ theme }) => theme.white};
    }

    .font-resize *:not(:last-child) {
        margin-right: 0.35rem;
    }

    .font-resize > .small {
        font-size: clamp(0.75em, 75%, 0.875em);
    }

    .font-resize > .medium {
        font-size: clamp(1em, 75%, 1.25em);
    }

    .font-resize > .large {
        font-size: clamp(1.375em, 75%, 1.5em);
    }
`
