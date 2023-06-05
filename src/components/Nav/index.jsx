import { Link } from "react-router-dom";
import * as S from './Nav.styles';
import CartIcon from "../CartIcon";

export default function Nav(){
    return (
        <S.Nav>
            <Link to='/'>
                <S.Logo>eCom</S.Logo>
            </Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/checkout'>
                        <CartIcon />
                    </Link>
                </li>
            </ul>
        </S.Nav>
    )
}