import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
    }
    
    body {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(180deg, #000000 0%, #171717 60%);
        
        @media (max-width: 1024px) {
            width: 100%;
            height: 100vh;
        }
    }
`;

export default GlobalStyle;
