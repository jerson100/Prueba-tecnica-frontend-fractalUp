import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        line-height: 1rem;
    }
    @media screen and (min-width: 760px){
        *::-webkit-scrollbar {
            width: 10px;
        }
        *::-webkit-scrollbar-thumb {
            background-color: rgba(158, 158, 157, 0.32);
            outline: rgba(158, 158, 157, 0.32) solid 1px;
            border-radius: 5px;
        }
        *::-webkit-scrollbar-track {
            background-color: rgba(158, 158, 157, 0.32);
        }
    }
`;

export default GlobalStyle;
