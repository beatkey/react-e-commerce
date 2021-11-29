import {Card, CardActions, CardContent, Typography} from '@mui/material';
import LazyLoad from 'react-lazyload';
import {Breathing, Image} from 'react-shimmer';
import LoadingButton from '@mui/lab/LoadingButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useContext, useEffect, useState} from 'react';
import {BasketContext} from '../../context/basket';

function Product (product, products){
    const [cart, setCart] = useContext(BasketContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setTimeout(function (){
            setLoading(false)
        }, 1000)
    }, [loading])

    const addToBasket = (productID) => {
        console.log(productID, cart)
        setLoading(true)
        setTimeout(function (){
            //setCart([...cart, products.find(x => x.id === productID)])
        }, 1000)
    }

    return (
        <div className="Product col-3 p-2">
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

export default Product;
