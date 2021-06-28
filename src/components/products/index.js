import {Button, Card} from "react-bootstrap";

function Products() {
    const products = [
        {
            productName: "Samsung Galaxy A21s 64 GB",
            productImage: "https://productimages.hepsiburada.net/s/40/1100/10669115965490.jpg/format:webp",
            productPrice: "2.499,90"
        },
        {
            productName: "Reeder P13 Blue Max 64 GB",
            productImage: "https://productimages.hepsiburada.net/s/88/1100/110000030397799.jpg/format:webp",
            productPrice: "1.499,90"
        },
        {
            productName: "iPhone 11 128 GB",
            productImage: "https://productimages.hepsiburada.net/s/49/1100/10995125452850.jpg/format:webp",
            productPrice: "7.799,89"
        },
        {
            productName: "Apple iPad 8. Nesil 32 GB",
            productImage: "https://productimages.hepsiburada.net/s/66/1100/110000007422695.jpg/format:webp",
            productPrice: "3.139,90"
        },
        {
            productName: "Dyson Big Ball Allergy 2 Toz Torbasız",
            productImage: "https://productimages.hepsiburada.net/s/55/550/11226865860658.jpg/format:webp",
            productPrice: "2.899,00"
        },
    ]
    return (
        <div className="Products row m-1">
            {
                products.map((product) =>
                    <div className="Product col-3 p-2">
                        <Card>
                            <Card.Img className="ProductImage" variant="top"
                                      src={product.productImage}/>
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>
                                    {product.productPrice} TL
                                </Card.Text>
                                <Button className="align-self-end" variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    );
}

export default Products;
