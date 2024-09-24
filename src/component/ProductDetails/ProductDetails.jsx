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
        const data  = await response.json();
        setProduct(data);
    };

    if(!product) {
        return (
            <p>Loading</p>
        );
    }

    return (
        <>
            <div className="product-details">
                <div className="product-details-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details-content">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;