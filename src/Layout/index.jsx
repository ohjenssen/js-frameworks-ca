import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import * as S from './Container.styles';
import Footer from '../components/Footer';

export default function Layout(){
    return (
        <>
            <Header />
            <S.Container>
                <Outlet />
            </S.Container>
            <Footer />
        </>
    )
}