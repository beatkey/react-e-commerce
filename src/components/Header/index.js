import React, {useContext, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Basket from './Basket';

import {BasketContext} from '../../context/basket';
import {LoggedInContext} from '../../context/loggedIn';

import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {TableRows, ViewComfy, ViewStream, ViewWeek} from '@mui/icons-material';


export default function Header(props) {
    const {view, ChangeView} = props;
    const [cart] = useContext(BasketContext);
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
    const [basketDrawer, setBasketDrawer] = useState(false);
    let location = useLocation();

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
