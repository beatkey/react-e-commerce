import React, {useContext, useState} from "react";
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {BasketContext} from "../../context/basket";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {CardActions} from "@mui/material";

export default function Header() {
    const [cart, setCart] = useContext(BasketContext);
    const [basketDrawer, setBasketDrawer] = useState(false);

    const basketDrawerToggle = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setBasketDrawer(open);
    };

    const deleteFromBasket = (basketID) => {
        setCart(cart.filter((item, index) => index !== basketID))
    }

    function Basket() {
        const list = () => (
            <Box
                sx={{width: 325}}
                role="presentation"
            >
                <ListItem
                    button
                    onClick={basketDrawerToggle(false)}
                    onKeyDown={basketDrawerToggle(false)}
                >
                    <ListItemIcon>
                        <KeyboardArrowRightIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Close Basket"/>
                </ListItem>
                <Divider/>
                <List>
                    {cart.map((product, index) => (
                        <Card key={index} className="Item p-2" sx={{display: 'flex'}}>
                            <CardMedia
                                component="img"
                                sx={{width: 128, objectFit: "contain"}}
                                image={product.image}
                                alt={product.title}
                            />
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1 0 auto'}}>
                                    <Typography component="div" variant="h6">
                                        {product.title}
                                    </Typography>
                                    <Typography component="div" variant="body2">
                                        {product.price}$
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton onClick={() => deleteFromBasket(index)} color="error"
                                                aria-label="play/pause">
                                        <DeleteForeverIcon sx={{height: 24, width: 24}}/>
                                    </IconButton>
                                </CardActions>
                            </Box>
                            <Divider absolute={true} variant={"fullWidth"}/>
                        </Card>
                    ))}
                </List>
            </Box>
        );

        return (
            <div>
                <React.Fragment>
                    <Drawer
                        anchor="right"
                        open={basketDrawer}
                        onClose={basketDrawerToggle(false)}
                        className="Basket"
                    >
                        {list(basketDrawer)}
                    </Drawer>
                </React.Fragment>
            </div>
        )
    }

    return (
        <header className="container-fluid">
            <div className="row">
                <nav className="col-auto ms-auto">
                    <Button onClick={basketDrawerToggle(true)} className="NavItem" variant="contained"
                            startIcon={<ShoppingBasketIcon/>}>
                        Basket ({cart.length})
                    </Button>
                </nav>
            </div>
            <Basket/>
        </header>
    )
}
