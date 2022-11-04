import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Liked from './Pages/Liked';
import Desg from './Pages/Desg';
import Cabinet from './Pages/Cabinet';
import SearchPage from './Pages/SerachPage';
import Product from './Pages/Product';


const RoutesPage = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/search" exact element={<SearchPage />} />
                <Route path="/product" exact element={<Product />} />
                <Route path="/liked" exact element={<Liked />} />
                <Route path="/cabinet" exact element={<Cabinet />} />
                <Route path="/desg" exact element={<Desg />} />
                <Route path="*" exact element={'404'} />
            </Routes>
        </Layout>
    )
}

export default RoutesPage