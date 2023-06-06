import styled from "styled-components";

export const TotalContainer = styled.div`
    border-top: 3px solid black;
    
    .checkout {
        background-color: ${(props) => props.theme.color.lightmode.cta.coralOrange};
        color: white;
        padding: 10px 20px;
    }
`;

