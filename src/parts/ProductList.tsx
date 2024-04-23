import React, { useState, useEffect } from 'react';
import '../CSS/ProductList.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import productsData from '../JSON/products.json';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    ingredients: string[]; // Новое поле для состава
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const pageSize = 6;
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        if (pageLoaded && !allLoaded) {
            loadProducts();
        } else {
            setPageLoaded(true);
        }
    }, [page, pageLoaded, allLoaded]);

    const loadProducts = () => {
        setLoading(true);
        const startIndex = pageSize * (page - 1);
        const endIndex = startIndex + pageSize;

        setTimeout(() => {
            const loadedProducts: Product[] = productsData.slice(startIndex, endIndex);
            setProducts(prevProducts => [...prevProducts, ...loadedProducts]);
            setLoading(false);

            if (loadedProducts.length < pageSize) {
                setAllLoaded(true);
            }
        }, 1000);
    };

    const fetchMoreData = () => {
        if (!loading && !allLoaded) {
            setPage(page + 1);
        }
    };

    return (
        <div className="product-list">
            <div>
                <h2 className="products-heading">Еда купите</h2>
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchMoreData}
                    hasMore={!allLoaded && hasMore}
                    loader={<h4>Подождите, загружаем для вас еду...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Похоже, это всё, что вы можете у нас съесть ... Выбирайте! :)</b>
                        </p>
                    }
                >
                    <div className="product-wrapper">
                        {products.map(product => (
                            <div key={product.id} className="product">
                                <img src={require(`../images/${product.imageUrl}`)} alt={product.name} />
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-ingredients">Состав: {product.ingredients.join(", ")}</p>
                                <p className="product-price"><strong>{product.price} ₽</strong></p>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ProductList;
