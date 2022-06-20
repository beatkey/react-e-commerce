import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Basket from "./Basket";

import {BasketContext} from "../../context/basket";
import {LoggedInContext} from '../../context/loggedIn';

import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Header() {
    const [cart] = useContext(BasketContext);
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [basketDrawer, setBasketDrawer] = useState(false);

    const basketDrawerToggle = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setBasketDrawer(open);
    };

    const Logout = () => {
        setLoggedIn(false)
    }

    return (
        <header className="container-fluid">
            <div className="row align-items-center">
                <div className="col-auto">
                    <nav className="gap">
                        <Button variant="contained" className="me-2">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="contained">
                            <Link to="/about">About</Link>
                        </Button>
                    </nav>
                </div>
                <nav className="col-auto ms-auto">
                    {loggedIn
                        ? <Button onClick={Logout} className="NavItem me-3" variant="contained">
                            Logout
                        </Button>
                        : <Button className="NavItem me-3" variant="contained">
                            <Link to="/sign-in">Sign In</Link>
                        </Button>
                    }
                    <Button onClick={basketDrawerToggle(true)} className="NavItem" variant="contained"
                            startIcon={<ShoppingBasketIcon/>}>
                        Basket ({cart.length})
                    </Button>
                </nav>
            </div>
            <Basket basketDrawerToggle={basketDrawerToggle} basketDrawer={basketDrawer}/>
        </header>
    )
}
