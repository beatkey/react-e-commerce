import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Basket from './Basket';

import {BasketContext} from '../../context/basket';
import {LoggedInContext} from '../../context/loggedIn';

import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function Header() {
    const [cart] = useContext(BasketContext);
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [basketDrawer, setBasketDrawer] = useState(false);
    const [categories, setCategories] = useState([])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const basketDrawerToggle = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setBasketDrawer(open);
    };

    const Logout = () => {
        setLoggedIn(false);
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header className="container-fluid">
            <div className="row align-items-center">
                <div className="col-auto">
                    <nav className="gap d-flex">
                        <Link to="/">
                            <Button variant="contained" className="me-2">
                                Home
                            </Button>
                        </Link>
                        <div className="me-2">
                            <Button
                                variant="contained"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Categories
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {
                                    categories.map((value, key) =>
                                        <Link key={key} to={`/category/${value}`}>
                                            <MenuItem onClick={handleClose}>{value}</MenuItem>
                                        </Link>
                                    )
                                }
                            </Menu>
                        </div>
                        <Link to="/about">
                            <Button variant="contained" className="me-2">
                                About
                            </Button>
                        </Link>
                    </nav>
                </div>
                <nav className="col-auto ms-auto">
                    {loggedIn
                        ? <Button onClick={Logout} className="NavItem me-3" variant="contained">
                            Logout
                        </Button>
                        : <Link to="/sign-in">
                            <Button className="NavItem me-3" variant="contained">
                                Sign In
                            </Button>
                        </Link>
                    }
                    <Button onClick={basketDrawerToggle(true)} className="NavItem" variant="contained"
                            startIcon={<ShoppingBasketIcon/>}>
                        Basket ({cart.length})
                    </Button>
                </nav>
            </div>
            <Basket basketDrawerToggle={basketDrawerToggle} basketDrawer={basketDrawer}/>
        </header>
    );
}
