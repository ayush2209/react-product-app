import React, { useEffect, useState } from 'react'
import './ProductList.css';

import { CusotmRating } from '../Rating/CustomRating';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5',
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#000000',
            secondary: '#757575',
        },
    },
});

const ProductList = () => {

    useEffect(() => {
        getAllPhotos();
    }, []);

    const [productList, setProductList] = useState([]);
    const [tempProductList, setTempProductList] = useState([]);

    const getAllPhotos = async () => {
        const resposne = await fetch('https://fakestoreapi.com/products');
        const data = await resposne.json();
        setProductList(data);
        setTempProductList(data);
    }

    const searchClicked = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13) {
            event.preventDefault();
            const filteredOption = productList?.filter((product) => {
                return product.title?.toLowerCase().includes(event.target?.value?.toLowerCase());
            })
            setTempProductList(filteredOption);
        } else if (event.target?.value === '') {
            setTempProductList(productList);
        }
    }

    const getProductListDropdown = (event) => {
        return Array.from(new Set(productList.map(e => e.category.charAt(0).toUpperCase() + e.category.slice(1))));
    }

    const handleSelectionChange = (event, value) => {
        console.log(value, event);
        if (value) {
            const filteredOption = productList?.filter((product) => {
                return product.category === value.toLowerCase();
            });
            setTempProductList(filteredOption);
        } else {
            setTempProductList(productList);
        }
    };

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ color: 'lightslategrey' }}> Product List </h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <Autocomplete
                                disablePortal
                                options={getProductListDropdown()}
                                onChange={handleSelectionChange}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Product" />}
                            />
                        </div>
                        <div>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Search Item" variant="outlined" onKeyDown={searchClicked} />
                            </Box>
                        </div>
                        {/* <Stack spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                freeSolo
                                id="free-solo"
                                disableClearable
                                options={productList.map((option) => option.title)}
                                inputValue={searchProdutInput}
                                onInputChange={(event, newInputValue) => {
                                    setSearchProdutInput(newInputValue);
                                }}
                                filterOptions={(options, state) =>
                                    state.inputValue === '' ? [] : options.filter((option) =>
                                        option.toLowerCase().includes(state.inputValue.toLowerCase())
                                    )
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search input"
                                        slotProps={{
                                            input: {
                                                ...params.InputProps,
                                                type: 'search',
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Stack> */}
                    </div>
                </div>
                <div className='productList'>
                    {
                        tempProductList?.map((product) => (
                            <Card className='card_Items' sx={{ maxWidth: 345 }} key={product.id}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {product.title.charAt(0).toUpperCase()}
                                        </Avatar>
                                    }
                                    title={product.category.toUpperCase()}
                                />
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.image ? product.image : "https://placehold.co/600x400"} alt={product.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <Button size="small" color="primary">
                                            {product.price}
                                        </Button>
                                    </div>
                                    <div>
                                        <CusotmRating key={product.id} ratingValue={product} />
                                    </div>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </ThemeProvider>
        </>
    )
}

export default ProductList;
