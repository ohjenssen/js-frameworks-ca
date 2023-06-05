import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        --midnight-blue: #002B4F;
        --blush-pink: #FFB6C1;
        --sage-green: #A7BCA5;
        --soft-gray: #D3D3D3;
        --coral-orange: #FF7F50;
        --dusty-rose: #996b6b;
        background-color: var(--soft-gray);
    }

    body {
        margin: 0;
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: var(--dusty-rose);
        text-decoration: none;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyle;