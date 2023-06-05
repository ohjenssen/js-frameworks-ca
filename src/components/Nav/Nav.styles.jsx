import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
        
    ul {
        list-style: none;
        display: flex;
        margin: 20px;

        li {
            margin: 5px;
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