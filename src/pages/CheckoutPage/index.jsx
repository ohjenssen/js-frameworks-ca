import useProductsStore from "../../store";
import CartProduct from "../../components/CartProducts.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CheckoutPage(){
    const { cart, clearCart } = useProductsStore();

    function handleClearCart(){
        clearCart();
    }

    const totalPrice = cart.reduce((total, product) => {
        if(product.price !== product.discountedPrice){
            total += product.discountedPrice;
        } else {
            total += product.price;
        }
        
        return total;
    }, 0)

    return (
        <div>
            <h1>Checkoutpage</h1>
            <button onClick={handleClearCart}>Clear cart</button>
            {cart.map((product) => (
                <CartProduct key={product.id}
                    title={product.title} 
                    imgUrl={product.imageUrl}
                    description={product.description}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                />
            ))}
            <TotalContainer>
                <div>
                    <h3>Total</h3>
                    <h2>{totalPrice.toFixed(2)} kr</h2>
                </div>
                <div>
                    <Link className="checkout" to='/checkoutsuccess' onClick={handleClearCart}>Checkout</Link>
                </div>
            </TotalContainer>
        </div>
    )
}

const TotalContainer = styled.div`
    border-top: 3px solid black;
    
    .checkout {
        background-color: ${(props) => props.theme.color.lightmode.cta.coralOrange};
        color: white;
        padding: 10px 20px;
    }
`;