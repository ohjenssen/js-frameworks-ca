import styled from "styled-components";

export const Container = styled.div`
    .product-page {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: ${(props) => props.theme.color.lightmode.cta.blushPink};
        border: 1px solid #ccc;
        border-radius: 4px;
        color: ${(props) => props.theme.color.lightmode.typography.midnightBlue};
      }
      
      .title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      .price {
        margin-bottom: 10px;
      }
      
      .original-price {
        text-decoration: line-through;
        color: #888;
        margin-right: 10px;
      }
      
      .discounted-price {
        margin-bottom: 3px;
        font-weight: bold;
        font-size: 18px;
      }

      .cash-off {
        margin-top: 0px;
        padding-top: 0px;
      }
      
      .image {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        margin-bottom: 10px;
      }
      
      .reviews {
        display: flex;
        align-items: center;
      }
      
      .rating {
        margin-right: 5px;
        font-weight: bold;
      }
      
      .stars {
        color: orange;
        font-size: 18px;
      }
`;