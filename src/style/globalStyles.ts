import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    line-height: 1.15;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #104c82;
  }

  

  body {
    margin: 0;
    padding: 0;
    font-family: "yekan";
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
    direction: rtl;
  }

  input[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      -moz-appearance: textfield;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  /* fonts class  */
  .f_yekan {
    font-family: "yekan";
  }

  .f_yekan_bold {
    font-family: "yekan-bold";
  }

  .f_iran_sans {
    font-family: "iran-sans";
  }

  /* react toastify  css */
  .app_toast_container {
    .Toastify__toast-body {
      font-family: "yekan";
      z-index: 9999999999;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) =>
        theme.colors.success} #D9E3EF;
    }
  }

  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d9e3ef;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.success};
    border-radius: 50px;
  }

  /* customize */
  .pointer{
    cursor: pointer;
  }

  .hide_horizontal_scrollbar::-webkit-scrollbar{
    display: none;
  }
  
  .hide_horizontal_scrollbar{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }
 

  /* css animations */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes shake-rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes shake-x {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

 
`;
