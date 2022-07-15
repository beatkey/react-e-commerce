import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import {useGeneral} from "context";

import Header from 'components/Header';
import Products from 'containers/Products';
import View from "components/Product/View";
import Sort from "components/Product/Sort";

function Home() {
    let {categoryName} = useParams();
    const [products, setProducts] = useState([]);
    const {sort} = useGeneral()

    const fetchProducts = async () => {
        try {
            let url = 'https://fakestoreapi.com/products';
            if (categoryName !== undefined) {
                url += '/category/' + categoryName;
            }
            sort ? url += '?sort=asc' : url += '?sort=desc'
            const res = await fetch(url);
            const products = await res.json();
            setProducts(products);
        } catch (error) {
            console.log(error);
        }
    };

    fetchProducts();

    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center my-3" style={{gap: 10}}>
                <View/>
                <Sort/>
            </div>
            <Products products={products} />
        </div>
    );
}

export default Home;
