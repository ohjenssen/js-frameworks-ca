import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='contact' element={<ContactPage />}/>
                    <Route path='checkout' element={<CheckoutPage />} />
                    <Route path='checkoutsuccess' element={<CheckoutSuccessPage />} />
                    <Route path='product/:id' element={<ProductPage />} />
                    <Route path='*' element={<ErrorPage />} /> 
                </Route>
            </Routes>
        </>
    )
}

export default App;