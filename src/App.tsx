import React from 'react';
import Header from './parts/Header';
import ProductList from './parts/ProductList';
import Footer from './parts/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
};

export default App;