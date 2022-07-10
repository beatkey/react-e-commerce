import React, {useContext, useEffect, useState} from 'react';
import {BasketContext} from '../../context/basket';
import Product from './Product';
import {useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import {TableRows, ViewComfy, ViewStream, ViewWeek} from '@mui/icons-material';
import LoadingSvg from '../../assets/svg/oval.svg';

function Products() {
    let {categoryName} = useParams();
    const [view, setView] = useState(1);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(BasketContext);
    const [sort, setSort] = useState(false);

    useEffect(() => {
        fetchProducts();

        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCart(cart);
        }
    }, [categoryName, sort]);

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

    const addToBasket = (productID) => {
        setTimeout(function () {
            localStorage.setItem('cart', JSON.stringify([...cart, products.find(x => x.id === productID)]));
            setCart([...cart, products.find(x => x.id === productID)]);
        }, 1000);
    };

    const ChangeView = () => {
        switch (view) {
            case 1:
                setView(2);
                break;
            case 2:
                setView(3);
                break;
            case 3:
                setView(4);
                break;
            case 4:
                setView(1);
                break;
            default:
                setView(2);
        }
    };

    const ViewIcon = () => {
        switch (view) {
            case 1:
                return <ViewComfy/>;
            case 2:
                return <ViewWeek/>;
            case 3:
                return <ViewStream/>;
            case 4:
                return <TableRows/>;
            default:
                return <ViewComfy/>;
        }
    };

    const sortButton = () => {
        if(sort){
            setSort(false)
        }else{
            setSort(true)
        }
    }

    return (
        <div className="Products row m-1">
            <div className="d-flex justify-content-center mb-3" style={{gap: 10}}>
                <Button onClick={() => ChangeView()} variant="contained" color="success"
                        endIcon={<ViewIcon/>}>
                    View
                </Button>
                <Button onClick={() => sortButton()} variant="contained" color="primary">
                    Sort ({sort ? "Asc" : "Desc"})
                </Button>
            </div>
            {
                products.length === 0
                &&
                <img width={64} height={64} src={LoadingSvg} alt="Loading"/>
            }
            {
                products.map((product, index) =>
                    <Product view={view} addToBasket={addToBasket} key={index} product={product}/>,
                )
            }
        </div>
    );
}

export default Products;
