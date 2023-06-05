import { FaShoppingCart } from 'react-icons/fa';
import * as S from './CartIcon.styles';
import useProductsStore from '../../store';

export default function CartIcon(){
    const { cart } = useProductsStore();

    return (
        <S.Container>
            <FaShoppingCart />
            {cart.length > 0 && <S.Overlay>{cart.length}</S.Overlay>}
        </S.Container>
    )
}