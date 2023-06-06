import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;

    ul {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            list-style: none;
            margin: 0;
            padding: 0;
            
            li {
                margin: 10px 0px 0px 0px;
            }
        }
        
        a {
            font-weight: 900;
        }
`;