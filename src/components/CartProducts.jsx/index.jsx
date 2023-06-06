import styled from "styled-components";

export default function CartProduct({title, price, discountedPrice, description, imgUrl}){
    const isDiscounted = price !== discountedPrice;

    return (
        <Container>
            <div>
                <h2>{title}</h2>
                {isDiscounted ? <h3>{discountedPrice} kr</h3> : <h3>{price} kr</h3>}
                <p>{description}</p>
            </div>
            <div>
                <img className='productImage' src={imgUrl} alt={title}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    border-top: 1px solid white;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .productImage {
        max-width: 100px;
        margin: 20px 0px 0px 20px;
    }
    
`;