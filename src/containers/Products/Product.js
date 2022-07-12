import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {Card, CardActions, CardContent, Typography} from "@mui/material";

import LazyLoad from "react-lazyload";
import {Breathing, Image} from "react-shimmer";

import LoadingButton from "@mui/lab/LoadingButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Product(props) {
    const {view} = props;
    const {product, addToBasket} = props;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            setLoading(false)
        }, 1000)
    }, [loading])

    switch (view){
        case 1:
            return (
                <div className="Product col-3 p-2">
                    <Card>
                        <Link to={`/product/${product.id}`}>
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
                        </Link>
                        <CardActions>
                            <LoadingButton
                                onClick={() => {
                                    addToBasket(product.id);
                                    setLoading(true)
                                }}
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
        case 2:
            return (
                <div className="Product col-4 p-2">
                    <Card>
                        <Link to={`/product/${product.id}`}>
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
                        </Link>
                        <CardActions>
                            <LoadingButton
                                onClick={() => {
                                    addToBasket(product.id);
                                    setLoading(true)
                                }}
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
        case 3:
            return (
                <div className="Product col-6 p-2">
                    <Card>
                        <Link to={`/product/${product.id}`}>
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
                        </Link>
                        <CardActions>
                            <LoadingButton
                                onClick={() => {
                                    addToBasket(product.id);
                                    setLoading(true)
                                }}
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
        case 4:
            return (
                <div className="Product View col-12 p-2">
                    <Card className="row">
                        <Link className="col-4" to={`/product/${product.id}`}>
                            <LazyLoad className={"ProductImage"} height={200}>
                                <Image
                                    src={product.image}
                                    fallback={<Breathing height={450}/>}
                                />
                            </LazyLoad>
                        </Link>
                        <CardActions className="col-8">
                            <CardContent>
                                <Typography className={"ProductName"} gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="mb-4">
                                    {product.price}$
                                </Typography>
                                <LoadingButton
                                    onClick={() => {
                                        addToBasket(product.id);
                                        setLoading(true)
                                    }}
                                    startIcon={<AddShoppingCartIcon/>}
                                    loading={loading}
                                    loadingPosition="start"
                                    variant="contained"
                                >
                                    Add To Basket
                                </LoadingButton>
                            </CardContent>
                        </CardActions>
                    </Card>
                </div>
            )
        default:
            return ("default")
    }
}

export default Product;
