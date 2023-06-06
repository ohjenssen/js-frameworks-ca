import { Link } from 'react-router-dom';
import * as S from './Footer.styles';

export default function Footer(){
    return (
        <S.Footer>
            <ul className='contact-info'>
                <li>eCom</li>
                <li>Email: johnDoe@eMail.com</li>
                <li>Tlf: 00 00 00 00</li>
            </ul>
            <ul className='navigation'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
            </ul>
        </S.Footer>
    )
}