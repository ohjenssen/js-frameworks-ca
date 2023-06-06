import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Products = styled.div`
    display: grid;
    grid-template: auto auto / repeat(4, 1fr);
    gap: 2rem;
    margin: 1rem;

    @media (max-width: 1100px) {
        grid-template: auto auto / repeat(3, 1fr);
    }

    @media (max-width: 800px){
        grid-template: auto auto / repeat(2, 1fr);
    }

    @media (max-width: 550px){
        grid-template: auto auto / repeat(1, 1fr);
    }
`;