import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';
import { addItems, removeItems } from '../../store/cartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Button from '@mui/material/Button';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';

const ProductDetails = () => {

    useEffect(() => {
        getProductDetails();
    }, []);

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();
    const cartDetails = useSelector(state => state.cart.items);

    const getProductDetails = async () => {
        const API_URL = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setProduct(data);
    };

    const handleAddToCart = (product) => {
        console.log('Product Added to Cart', product);
        dispatch(addItems(product));
    }

    const handleItemRemove= (product) => {
        dispatch(removeItems(product));
    }

    if (!product) {
        return (
            <p>Loading</p>
        );
    }

    return (
        <>
            <div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold p-3'>Product Details</h1>
                    <hr className='border-dashed' />
                </div>
                <div className="flex items-center flex-wrap justify-between p-4 max-w-full">
                    <div className="w-full md:w-[30%] px-4 rounded-md overflow-hidden">
                        <img className='h-auto' src={product.image} alt={product.title} />
                    </div>
                    <div className="flex flex-col gap-4 px-4 w-full md:w-[70%]">
                        <h2 className='font-bold'>{product.title}</h2>
                        <p>{product.description}</p>
                        <div>
                            <div className='text-[#388e3c] font-semibold'>Special Price</div>
                            <div>₹ {product.price}</div>
                        </div>
                        <div className='flex gap-4 mt-3 flex-wrap w-full'>
                            <button className='bg-[#fb641b] p-2 w-full md:w-[25%] border rounded-lg text-white shadow-lg uppercase'>
                                <span><AutoFixHighIcon /></span>
                                <span className='ml-2 align-middle'>Buy Now</span>
                            </button>
                            <button className='bg-[#ff9f00] p-2 w-full md:w-[25%] border rounded-lg text-white shadow-lg uppercase'
                                onClick={() => handleAddToCart(product)}>
                                <span><AddShoppingCartIcon color="action" /></span>
                                <span className='ml-2'>Add to Cart </span>
                            </button>
                        </div>

                        {
                            cartDetails?.length > 0 && (
                                <Button className='w-full sm:w-[52%]' variant="contained"
                                onClick={()=> handleItemRemove(product)}>
                                    <RemoveShoppingCartRoundedIcon />
                                    <span className='ml-2'>Claer Cart</span>
                                </Button>
                            )
                        }
                        
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;