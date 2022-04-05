import React, {useContext} from "react";
import {BasketContext} from "../../../context/basket";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {CardActions} from "@mui/material";

function Basket(props) {
    const [cart, setCart] = useContext(BasketContext);
    const {basketDrawerToggle} = props;
    const {basketDrawer} = props;

    const deleteFromBasket = (basketID) => {
        localStorage.setItem("cart", JSON.stringify(cart.filter((item, index) => index !== basketID)))
        setCart(cart.filter((item, index) => index !== basketID))
    }

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
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                Total Quantity
                            </TableCell>
                            <TableCell align="right">{cart.length}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                Total Price
                            </TableCell>
                            <TableCell align="right">
                                {cart.reduce(function (sum, current) {
                                    return sum + current.price;
                                }, 0).toFixed(2)}
                                $
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
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

export default Basket;
