import Product from "./product";
import {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../context/basket";

function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(BasketContext);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
            setProducts(products)
        } catch (error) {
            console.log(error)
        }
    }

    const addToBasket = (productID) => {
        console.log(productID)
        setTimeout(function () {
            setCart([...cart, products.find(x => x.id === productID)])
        }, 1000)
    }

    return (
        <div className="Products row m-1">
            {
                products.map((product, index) =>
                    <Product addToBasket={addToBasket} key={index} product={product}/>
                )
            }
        </div>
    );
}

export default Products;
