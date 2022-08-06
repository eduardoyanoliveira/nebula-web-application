import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html{
        font-size: 100%;
    }
    button{
        outline: none;
        border: none;
        cursor: pointer;
    }
`;