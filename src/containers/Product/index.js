import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Header from "../../components/Header";
import {Breathing, Image} from "react-shimmer";
import LazyLoad from "react-lazyload";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoadingButton from "@mui/lab/LoadingButton";
import {BasketContext} from "../../context/basket";

function Product(){
    let params = useParams();
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useContext(BasketContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProduct()

        setTimeout(function () {
            setLoading(false)
        }, 1000)
    }, [loading])

    const fetchProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${params.productID}`);
            const product = await res.json();
            setProduct(product)
        } catch (error) {
            console.log(error)
        }
    }

    const addToBasket = (product) => {
        setTimeout(function () {
            setCart([...cart, product])
            console.log(cart)
        }, 1000)
    }

    return (
        <>
            <Header/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <LazyLoad className={"ProductImage"} height={200}>
                            <Image
                                src={product.image}
                                fallback={<Breathing height={450}/>}
                            />
                        </LazyLoad>
                    </div>
                    <div className="col-6">
                        <h1 className="mb-3">{product.title}</h1>
                        <p className="mb-3">{product.description}</p>
                        <p className="mb-3">{product.price}$</p>
                        <LoadingButton
                            onClick={() => {
                                addToBasket(product);
                                setLoading(true)
                            }}
                            startIcon={<AddShoppingCartIcon/>}
                            loading={loading}
                            loadingPosition="start"
                            variant="contained"
                        >
                            Add To Basket
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
