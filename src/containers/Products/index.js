import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useBasket} from "context";

import Product from './Product';
import LoadingSvg from 'assets/svg/oval.svg';

function Products({products}) {
    let {categoryName} = useParams();
    const {basket, setBasket} = useBasket();

    useEffect(() => {
        const basket = JSON.parse(localStorage.getItem('basket'));
        if (basket) {
            setBasket(basket);
        }
    }, [categoryName]);

    const addToBasket = (productID) => {
        setTimeout(function () {
            localStorage.setItem('basket', JSON.stringify([...basket, products.find(x => x.id === productID)]));
            setBasket([...basket, products.find(x => x.id === productID)]);
        }, 1000);
    };

    return (
        <div className="Products row m-1">
            {
                products.length === 0
                &&
                <img width={64} height={64} src={LoadingSvg} alt="Loading"/>
            }
            {
                products.map((product, index) =>
                    <Product addToBasket={addToBasket} key={index} product={product}/>,
                )
            }
        </div>
    );
}

export default Products;
