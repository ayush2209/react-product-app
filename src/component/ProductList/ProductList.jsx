import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

import ProductCard, { recomendedProductComponent } from './ProductCard';

const ProductList = ({ searchProduct }) => {

    const RecommendedProductComponent = recomendedProductComponent(ProductCard);

    useEffect(() => {
        getAllPhotos();
    }, []);


    useEffect(() => {
        const filteredOption = productList?.filter((product) => {
            return product.title?.toLowerCase().includes(searchProduct.toLowerCase());
        })
        setTempProductList(filteredOption);

        if (searchProduct === '') {
            setTempProductList(productList);
        }
    }, [searchProduct]);

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
        <div className='mt-3 m-4'>
            <div className='flex flex-col md:flex-row justify-end gap-3'>
                <div className='w-full md:w-[250px]'>
                    <Autocomplete
                        options={getProductListDropdown()}
                        onChange={handleSelectionChange}
                        renderInput={(params) => <TextField {...params} label="Product" />}
                    />
                </div>
                <div className='w-full md:w-auto hidden sm:block'>
                    <Box 
                        className='w-full md:w-[250px]'
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Search Item" variant="outlined" onKeyDown={searchClicked} fullWidth />
                    </Box>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {tempProductList.length === 0 ? (
                    <h1 className='flex justify-center items-center'>No Product Found</h1>
                ) : (
                    tempProductList?.map((product) => (
                        <Link to={`/productDetails/${product.id}`} key={product.id} style={{ textDecoration: 'none' }} >
                            {product?.rating?.rate >= 4 ? <RecommendedProductComponent product={product} /> : <ProductCard product={product} />}
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductList;
