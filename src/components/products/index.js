import {Card, CardActions, CardContent, Typography} from '@mui/material';
import {useContext, useEffect, useState} from "react";
import {BasketContext} from "../../context/basket";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LazyLoad from "react-lazyload";
import {Image, Breathing} from 'react-shimmer'
import LoadingButton from '@mui/lab/LoadingButton';

function Products() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(BasketContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const products = await res.json();
                setProducts(products)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProducts()
        setTimeout(function (){
            setLoading(false)
        }, 1000)
    }, [loading])

    const addToBasket = (productID) => {
        setLoading(true)
        setTimeout(function (){
            setCart([...cart, products.find(x => x.id === productID)])
        }, 1000)
    }

    return (
        <div className="Products row m-1">
            {
                products.map((product, index) =>
                    <div key={index} className="Product col-3 p-2">
                        <Card>
                            <LazyLoad className={"ProductImage"} height={200}>
                                <Image
                                    src={product.image}
                                    fallback={<Breathing height={450}/>}
                                />
                            </LazyLoad>
                            <CardContent>
                                <Typography className={"ProductName"} gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}$
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <LoadingButton
                                    onClick={() => addToBasket(product.id)}
                                    startIcon={<AddShoppingCartIcon/>}
                                    loading={loading}
                                    loadingPosition="start"
                                    variant="contained"
                                >
                                    Add To Basket
                                </LoadingButton>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        </div>
    );
}

export default Products;
