import Product from "../../components/Product";
import Searchbar from "../../components/Searchbar";
import useApi from "../../hooks/useApi";
import * as S from './Home.styles';
import useProductsStore from "../../store";


export default function Home() {
    const url = 'https://api.noroff.dev/api/v1/online-shop';
    const {data, isLoading, isError} = useApi(url);
    const {cart} = useProductsStore();

    return (
        <S.Container>
            <h1>Homepage</h1>
            <Searchbar posts={data}/>
            <S.Products>
                {isLoading && <div>Loading...</div>}
                {isError && <div>Uh oh, an error occured!</div>}
                {data.map((post) => (
                    <Product key={post.id}
                        id={post.id}
                        title={post.title} 
                        price={post.price} 
                        imgUrl={post.imageUrl}
                        description={post.description}
                        rating={post.rating}
                        reviews={post.reviews}
                    />
                ))}
            </S.Products>
        </S.Container>
    )
}