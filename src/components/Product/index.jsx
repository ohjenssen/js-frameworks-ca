import { Link } from 'react-router-dom';
import * as S from './Product.styles';

export default function Product({id, title, price, imgUrl, description, rating, reviews}){
    return (
        <S.Container>
            <div className='image-container'>
                <img className="product-image" src={imgUrl} alt=""/>
            </div>
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">{price}</p>
            <div className="product-rating">
                <span className="rating">{rating}&#9733;</span>
                <span className="rating-count">({reviews.length})</span>
            </div>
            <Link to={`/product/${id}`} className="view-product-btn">View Product</Link>
        </S.Container>
    )
}