import * as S from './ProductPage.styles';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import Price from '../../components/Price';
import useProductsStore from '../../store';

export default function ProductPage(){
    const {id} = useParams();
    const url = 'https://api.noroff.dev/api/v1/online-shop/' + id;
    const {data, isLoading, isError} = useApi(url);
    const { addOne } = useProductsStore();

    function handleAddToCart(){
        addOne(data)
    }

    return (
        <S.Container>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Uh oh, an error occured!</div>}
            {data && 
                 <div className='product-page'>
                    <h1 className='title'>{data.title}</h1>
                    <div className='price'>
                        <Price price={data.price} discountedPrice={data.discountedPrice}/>
                    </div>
                    <img className='image' src={data.imageUrl} alt={data.title}/>
                    <p>{data.description}</p>
                    <div className='reviews'>
                        <span className='rating'></span>
                        <span className='stars'></span>
                    </div>
                    <button className='cta-btn' onClick={handleAddToCart}>Add to cart</button>
                </div>
            }
        </S.Container>
    )
}