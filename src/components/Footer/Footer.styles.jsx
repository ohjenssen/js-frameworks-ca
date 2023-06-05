import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: ${(props) => props.theme.color.lightmode.typography.midnightBlue};

    ul {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        list-style: none;
        
        li {
            margin: 10px 0px 0px 0px;
        }
    }
    
    a {
        margin: 10px 0px 0px 0px;
        font-weight: 900;
        margin-right: 15px;
    }
`;