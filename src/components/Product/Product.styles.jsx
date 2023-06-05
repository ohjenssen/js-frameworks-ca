import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 400px;
    overflow: hidden;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.color.lightmode.accent};
    background-color: ${(props) => props.theme.color.lightmode.cta.blushPink};
    color: ${(props) => props.theme.color.lightmode.typography.midnightBlue};
    border-radius: 5px;
    margin: 10px;
    box-sizing: border-box;
    font-size: 12px;

    .image-container {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .product-title {
        margin: 5px 0 0 0;
    }

    .rating-count {
        margin-left: 5px;
    }

    .view-product-btn {
        display: inline-block;
        padding: 8px 16px;
        margin-top: 5px;
        color: white;
        background-color: ${(props)  => props.theme.color.lightmode.cta.coralOrange};
        border-radius: 5px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
        :hover {
            background-color: #fa8e66;
        }
    }
`;