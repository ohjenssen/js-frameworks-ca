import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: black;
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: red;
    top: -15px;
    right: -15px;
    color: white;
    border-radius: 100%;
    padding: 4px;
    font-size: 12px;
`;