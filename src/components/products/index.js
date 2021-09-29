import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import {useContext} from "react";
import {BasketContext} from "../../context/basket";

function Products() {
    const products = [
        {
            productID: 1,
            productName: "Samsung Galaxy A21s 64 GB",
            productImage: "https://productimages.hepsiburada.net/s/40/1100/10669115965490.jpg/format:webp",
            productPrice: "2.499,90"
        },
        {
            productID: 2,
            productName: "Reeder P13 Blue Max 64 GB",
            productImage: "https://productimages.hepsiburada.net/s/88/1100/110000030397799.jpg/format:webp",
            productPrice: "1.499,90"
        },
        {
            productID: 3,
            productName: "iPhone 11 128 GB",
            productImage: "https://productimages.hepsiburada.net/s/49/1100/10995125452850.jpg/format:webp",
            productPrice: "7.799,89"
        },
        {
            productID: 4,
            productName: "Apple iPad 8. Nesil 32 GB",
            productImage: "https://productimages.hepsiburada.net/s/66/1100/110000007422695.jpg/format:webp",
            productPrice: "3.139,90"
        },
        {
            productID: 5,
            productName: "Dyson Big Ball Allergy 2 Toz Torbasız",
            productImage: "https://productimages.hepsiburada.net/s/55/550/11226865860658.jpg/format:webp",
            productPrice: "2.899,00"
        },
    ];

    const [cart, setCart] = useContext(BasketContext);
    const addToBasket = (productID) => {
        setCart([...cart, products.find(x => x.productID === productID)])
    }

    return (
        <div className="Products row m-1">
            {
                products.map((product, index) =>
                    <div key={index} className="Product col-3 p-2">
                        <Card>
                            <CardMedia
                                className="ProductImage"
                                component="img"
                                //image={product.productImage}
                                alt={product.productName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.productName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.productPrice} TL
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => addToBasket(product.productID)} variant="contained">Add To Basket</Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        </div>
    );
}

export default Products;
