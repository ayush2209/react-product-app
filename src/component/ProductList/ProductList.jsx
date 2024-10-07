import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

import ProductCard, { recomendedProductComponent } from './ProductCard';
import CatogaryWiseProductAccordion from '../CatogaryWiseProduct/CatogaryWiseProductAccordion';
import UpdateContext from '../UpdateContext';

const ProductList = ({ searchProduct }) => {

    const RecommendedProductComponent = recomendedProductComponent(ProductCard);

    const [productList, setProductList] = useState([]);
    const [tempProductList, setTempProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [showItemsIndex, setShowItemsIndex] = useState(0);

    const handleSetShowItems = (index) => {
        setShowItemsIndex(prevIndex => (prevIndex === index ? null : index));
    }

    useEffect(() => {
        getAllPhotos();
    }, []);

    useEffect(() => {
        setCategoryList(groupProductsByCategory(tempProductList));
    }, [productList]);

    useEffect(() => {
        const filteredOption = productList?.filter((product) => {
            return product.title?.toLowerCase().includes(searchProduct?.toLowerCase());
        })
        setTempProductList(filteredOption);

        if (searchProduct === '') {
            setTempProductList(productList);
        }
    }, [searchProduct]);

    const getAllPhotos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProductList(data);
            setTempProductList(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }

    const groupProductsByCategory = (products) => {
        const groupedData = products.reduce((acc, product) => {
            const category = product.category.split(' ')[0];
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {});

        return Object.keys(groupedData).map((category, index) => ({
            type: category,
            data: groupedData[category],
            id: index + Math.floor(Math.random() * (9999 - 1000 + 1)) + 100000
        }));
    };

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
        if (value) {
            const filteredOption = productList?.filter((product) => {
                return product.category === value?.toLowerCase();
            });
            setTempProductList(filteredOption);
        } else {
            setTempProductList(productList);
        }
    };

    return (
        <div className='mt-3 m-4'>
            <div className='flex flex-col my-4 sm:flex-row justify-between'>
                <div className='mb-3 sm:mb-0'>
                    <UpdateContext />
                </div>
                <div className='flex flex-col sm:flex-row justify-end gap-3'>
                    <div className='w-full sm:w-[250px]'>
                        <Autocomplete
                            options={getProductListDropdown()}
                            onChange={handleSelectionChange}
                            renderInput={(params) => <TextField {...params} label="Product" />}
                        />
                    </div>
                    <div className='w-full md:w-auto hidden sm:block'>
                        <Box
                            className='w-full sm:w-[250px]'
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Search Product" variant="outlined" onKeyDown={searchClicked} fullWidth />
                        </Box>
                    </div>
                </div>
            </div>
            
            <div className='my-3 text-center border-double border-4 border-indigo-600'>
                <div className='py-4'>Lifting the State : All Product Catogory Using Accordion.</div>
                <div>
                    {categoryList.length > 0 && categoryList.map((product, index) => (
                        <CatogaryWiseProductAccordion
                            key={product.id}
                            productList={product}
                            showItemsIndex={index === showItemsIndex ? true : false}
                            setShowItems={() => handleSetShowItems(index)} />
                    ))}
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
