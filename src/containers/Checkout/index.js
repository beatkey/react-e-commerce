import React from 'react';

import Header from 'components/Header';
import {useBasket} from "context";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

function Checkout(){
    const {basket, setBasket} = useBasket();

    const deleteFromBasket = (basketID) => {
        localStorage.setItem("basket", JSON.stringify(basket.filter((item, index) => index !== basketID)))
        setBasket(basket.filter((item, index) => index !== basketID))
    }

    return (
        <>
            <Header/>
            <Box className="m-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width={128}>Image</TableCell>
                                <TableCell width="30%">Name</TableCell>
                                <TableCell width="10%">Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {basket.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell><img src={row.image} alt={row.title}/></TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.price}$</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => deleteFromBasket(index)} color="error"
                                                    aria-label="play/pause">
                                            <DeleteForeverIcon sx={{height: 24, width: 24}}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    Total Quantity
                                </TableCell>
                                <TableCell align="right">{basket.length}</TableCell>
                            </TableRow>
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    Total Price
                                </TableCell>
                                <TableCell align="right">
                                    {basket.reduce(function (sum, current) {
                                        return sum + current.price;
                                    }, 0).toFixed(2)}
                                    $
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Checkout;
