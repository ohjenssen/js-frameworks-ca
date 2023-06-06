import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0px 20px;
        
    ul {
        list-style: none;
        display: flex;
        margin: 20px;

        li {
            margin: 5px;
        }

        a {
            font-weight: 900;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: darkred;
    padding: 5px;
    margin: 5px;
`;