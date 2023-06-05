import { Link } from "react-router-dom";

export default function CheckoutSuccessPage(){
    return (
        <div>
            <h1>Checkout complete!</h1>
            <p>Thank you for purchasing.</p>
            <Link to='/'><span>&larr;</span> Go back</Link>
        </div>
    )
}