import { createGlobalStyle } from 'styled-components'
import backgroungTopLeft from './images/bg-header_1.svg'
import backgroungBottomRight from './images/bg-header_2.svg'

export const GlobalStyles = createGlobalStyle`
  //! Override general style
  html, body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100%;
    background: url(${backgroungTopLeft}) top left no-repeat fixed, url(${backgroungBottomRight}) bottom right no-repeat fixed, linear-gradient(180deg, ${({
    theme,
}) => theme.primary} 0%, ${({ theme }) => theme.primarySpare} 100%) no-repeat;
    background-size: stretch;
    color: ${({ theme }) => theme.black};
    text-rendering: optimizeLegibility;
    font-family: Roboto Regular, Arial, sans-serif;
    transition: 0.3s all;
  }

  * {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }

  ol, ul {
	list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td {
      vertical-align: middle !important;
  }

  ul, li {
      padding: 0;
  }

  .navbar {
    padding: 0 !important;
  }

  ::selection {
    color: ${({ theme }) => theme.white};
    background:  ${({ theme }) => theme.primaryDark};
  }

  button{
      border: 0;
      background: transparent;
      margin: 0;
      padding: 0;
  }

  //! Override button and form style

  .btn{
      font-size: 1.125em;
    text-transform: uppercase;
    font-family: Roboto Bold;
  }

  .btn-primary, .btn-primary:visited, .btn-primary:focus {
    background: ${({ theme }) => theme.primaryDark};
    border-color: ${({ theme }) => theme.primaryDark};
  }

  .btn-secondary, .btn-secondary:visited, .btn-secondary:focus {
    background: ${({ theme }) => theme.secondarySuperDark};
    border-color: ${({ theme }) => theme.secondarySuperDark};
  }


  .btn-primary:focus, .btn-primary.focus {
    border-color: ${({ theme }) => theme.primaryDark} !important;
    background: ${({ theme }) => theme.primaryDark} !important;
    box-shadow: 0 0 0 0.2rem rgb(210 32 255 / 50%) !important;
  }


  .btn-secondary:focus {
    box-shadow: 0 0 0 0.2rem rgb(255 186 82 / 50%) !important;
  }

  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primarySpare};
    box-shadow: 0 0 0 0.2rem rgb(210 32 255 / 50%) !important;
  }

  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:hover {
    background: ${({ theme }) => theme.secondaryDark};
    border-color: ${({ theme }) => theme.secondaryDark};
    box-shadow: 0 0 0 0.2rem rgb(255 186 82 / 50%) !important;
  }

  .btn-primary:disabled{
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primarySpare};
    box-shadow: 0 0 0 0.2rem rgb(210 32 255 / 50%) !important;
      cursor: not-allowed;
  }

  .btn-secondary:disabled{
    background: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0 0.2rem rgb(255 186 82 / 50%) !important;
      cursor: not-allowed;
  }

  .form-control {
    font-size: 1.125em;
  }

  //! Override form style

  .form-control:focus {
    border-color: ${({ theme }) => theme.primarySpare};
    box-shadow: 0 0 0 0.2rem rgb(210 32 255 / 50%);
  }

  .form-control.invalid:focus {
    border-color: ${({ theme }) => theme.primarySpare};
    box-shadow: 0 0 0 0.2rem rgb(255 59 48 / 50%);
    background: ${({ theme }) => theme.dangerOpacity} !important;
  }

  input, textarea {
      background: ${({ theme }) => theme.inputBackground};
  }

  input:focus, textarea:focus {
    background: ${({ theme }) => theme.inputBackgroundFocus} !important;
  }

  label {
    color: ${({ theme }) => theme.black};
    font-family: Roboto Medium;
  }

  //! Override scrollbar style

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primaryOpacity};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primaryOpacity};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primaryOpacity};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.primarySpareHover};
  }

  //! Override small style

  small{
      font-size: clamp(0.75rem, 75%, 0.875rem);
  }

  //! Override SweetAler2

  .swal2-actions{
      display: flex;
      flex-direction: row;
      flex: 1;
      width: 100% !important;
  }

  .swal2-cancel, .swal2-confirm {
    flex: 1;
    max-width: 50% !important;
  }

  button.swal2-cancel{
    margin-right: 1rem;
  }

  .swal2-popup {
      padding: 1.5rem !important;
  }

  @media only screen and (min-width: 768px){
    .swal2-popup {
        max-width: 26em !important;
    }
  }

  .swal2-icon.swal2-warning {
    border-color: ${({ theme }) => theme.danger} !important;
    color: ${({ theme }) => theme.danger} !important;
  }

  .swal2-icon {
    border: 0.4rem solid transparent !important;
    margin-top: 0.5rem !important;
  }

  .swal2-icon.swal2-success .swal2-success-ring {
    border: 0.25em solid ${({ theme }) => theme.successOpacity} !important;
    border-radius: 50%;
  }

  .swal2-success-line-long, .swal2-success-line-tip {
    background-color:  ${({ theme }) => theme.success} !important;
    height: 0.5rem;
  }

  .swal2-title {
    font-size: clamp(23px, 75%, 28px) !important;
  }

  .swal2-html-container{
    font-size: clamp(16px, 75%, 18px) !important;
  }

`
