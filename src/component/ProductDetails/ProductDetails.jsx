import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {

    useEffect(() => {
        getProductDetails();
    }, []);

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const getProductDetails = async () => {
        const API_URL = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setProduct(data);
    };

    if (!product) {
        return (
            <p>Loading</p>
        );
    }

    return (
        <>
            <div>
                <div>
                    <h1 className='text-2xl font-bold p-5'>Product Details</h1>
                    <hr className='border-dashed' />
                </div>
                <div className="flex items-center flex-wrap justify-between">
                    <div className="aspect-h-1 aspect-w-1 rounded-md group-hover:opacity-75 overflow-hidden">
                        <img className='h-auto max-w-xs' src={product.image} alt={product.title} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className='font-bold'>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>

                        <div className='flex gap-6'>
                            <button>Buy Now</button>
                            <button>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;