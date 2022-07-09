import {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../context/basket";
import Product from "./Product";

function Products(props) {
    const {view} = props;
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(BasketContext);

    useEffect(() => {
        fetchProducts()

        const cart = JSON.parse(localStorage.getItem("cart"));
        if(cart){
            setCart(cart);
        }
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
        setTimeout(function () {
            localStorage.setItem("cart", JSON.stringify([...cart, products.find(x => x.id === productID)]))
            setCart([...cart, products.find(x => x.id === productID)])
        }, 1000)
    }

    return (
        <div className="Products row m-1">
            {
                products.map((product, index) =>
                    <Product view={view} addToBasket={addToBasket} key={index} product={product}/>
                )
            }
        </div>
    );
}

export default Products;
