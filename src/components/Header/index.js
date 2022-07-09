import React, {useContext, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Basket from './Basket';

import {BasketContext} from '../../context/basket';
import {LoggedInContext} from '../../context/loggedIn';

import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {TableRows, ViewComfy, ViewStream, ViewWeek} from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function Header(props) {
    let location = useLocation();
    const {view, ChangeView} = props;
    const [cart] = useContext(BasketContext);
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [basketDrawer, setBasketDrawer] = useState(false);

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

    const ViewIcon = () => {
        switch (view){
            case 1:
                return <ViewComfy />;
                break;
            case 2:
                return <ViewWeek />;
                break;
            case 3:
                return <ViewStream />;
                break;
            case 4:
                return <TableRows />;
                break;
        }
    };

    console.log(loggedIn)

    return (
        <header className="container-fluid">
            <div className="row align-items-center">
                <div className="col-auto">
                    <nav className="gap">
                        <Link to="/">
                            <Button variant="contained" className="me-2">
                                Home
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="contained" className="me-2">
                                About
                            </Button>
                        </Link>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Dashboard
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
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                        {location.pathname=="/" &&
                        <Button onClick={() => ChangeView()} variant="contained" color="success" endIcon={<ViewIcon />}>
                            View
                        </Button> }
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
