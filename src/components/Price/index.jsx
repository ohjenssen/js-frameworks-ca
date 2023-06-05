export default function Price({price, discountedPrice}){
    const isDiscounted = price !== discountedPrice;
    const priceDifference = price - discountedPrice;

    return (
        <div>
            <h2>Price</h2>
            { !isDiscounted && <p className='price'>{price}kr</p> }
            { isDiscounted &&
                <div>
                    <p className='original-price'>{price}kr</p>
                    <p className='discounted-price'>{discountedPrice}kr</p>
                    <p className='cash-off'>{priceDifference}kr off!</p>
                </div>
            }
        </div>
    )
}