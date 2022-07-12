import {useEffect, useState} from "react";

import Header from "components/Header";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs(){
    const [value, setValue] = useState(0);
    const [categories, setCategories] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            setCategories(data)
            console.log(data)
            data.map((value, index) => {
                console.log(value, index)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                            {categories.map((value, index) => <Tab key={index} label={value} value={toString(index)} />)}
                        </TabList>
                    </Box>
                    {categories.map((value, index) => <TabPanel key={index} value={toString(index)}>{value}</TabPanel>)}
                </TabContext>
            </Box>
        </>
    )
}
