import styled from "styled-components"

export const Header = styled.header`
        position: fixed;
        top: 0;
        width: 100%;
        background-color: ${(props) => props.theme.color.lightmode.background};
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
        z-index: 100;
`;