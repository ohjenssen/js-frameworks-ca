import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        --midnight-blue: #002B4F;
        --blush-pink: #FFB6C1;
        --sage-green: #A7BCA5;
        --coral-orange: #FF7F50;
        --dusty-rose: #996b6b;
        background-color: var(--midnight-blue);
        color: white;
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

    .cta-btn {
        background-color: var(--coral-orange);
        color: white;
        padding: 10px 20px;
        border: none;
    }

    .clear-cart {
        background-color: red;
        color: ${(props) => props.theme.color.lightmode.typography.midnightBlue};
        padding: 10px 20px;
        border: none;
    }
`;

export default GlobalStyle;