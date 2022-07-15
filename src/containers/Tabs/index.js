import React, {useEffect, useState} from "react";

import {useGeneral} from "context";

import Header from "components/Header";
import Products from "../Products";
import View from "components/Product/View"
import Sort from "components/Product/Sort"

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoadingSvg from "assets/svg/oval.svg"

export default function Tabs() {
    const [value, setValue] = useState(null);
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        fetchProductByCategory(newValue)
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            await setCategories(data)
            if (data.length > 0) {
                await setValue(data[0])
                let array = [];
                data.map(value => array[value] = null)
                setProducts(array)
                await fetchProductByCategory(data[0])
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchProductByCategory = async (categoryName) => {
        if (products[categoryName] !== undefined) {
            return
        }
        try {
            let url = "https://fakestoreapi.com/products/category/" + categoryName;
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                await setProducts({
                    ...products,
                    [categoryName]: data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Header/>

            <Box sx={{width: '100%', typography: 'body1'}}>
                <div className="d-flex justify-content-center my-3" style={{gap: 10}}>
                    <View/>
                </div>
                {
                    categories == null || value == null
                        ?
                        <img width={64} height={64} src={LoadingSvg} alt="Loading"/>
                        :
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                    {categories.map((value, index) =>
                                        <Tab key={index}
                                             label={value}
                                             value={value}/>
                                    )}
                                </TabList>
                            </Box>
                            {categories.map((value, index) =>
                                <TabPanel key={index} value={value}>
                                    {
                                        products[value] == null
                                            ?
                                            <img width={64} height={64} src={LoadingSvg} alt="Loading"/>
                                            :
                                            <Products products={products[value]}/>
                                    }
                                </TabPanel>
                            )}
                        </TabContext>
                }
            </Box>
        </>
    )
}
