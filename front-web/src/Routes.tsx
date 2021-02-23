import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './core/assets/styles/components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Home/Admin';
import Catalog from './pages/Home/Catalog';
import ProductDetails from './pages/Home/Catalog/components/ProductDetails'




const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/products" exact>
                <Catalog/>
            </Route>
            <Route path="/products/:productId">
                <ProductDetails/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;