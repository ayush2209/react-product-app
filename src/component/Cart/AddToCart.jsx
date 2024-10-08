import React from 'react'
import Button from '@mui/material/Button';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../store/cartSlice';

const AddToCart = () => {
    
    // To update any data in the store, we need to use dispatch
    const dispatch = useDispatch(); 
    // Subscribing to read the value from the slice store
    const reducer = useSelector(state => state.cart.items);
    const handleItemRemove = () => {
        dispatch(clearItems());
    }

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center p-2'>
                <div className='text-lime-900 font-bold'>Cart Items</div>
                <div>
                    <Button className='' variant="contained" disabled={reducer.length === 0}
                        onClick={handleItemRemove}>
                        <RemoveShoppingCartRoundedIcon />
                        <span className='ml-2'>Clear Cart</span>
                    </Button>
                </div>
            </div>
            <hr />

            <div className='w-[75%] py-4 justify-items-center mx-auto'>
                    {reducer.length === 0 ? (
                        <div className='flex justify-center items-center mt-40'>
                            <h1 className='text-center font-mono text-red-400 border rounded-lg shadow-lg p-5'>No Items in Cart</h1>
                        </div>
                    ) : (
                        reducer.map((product, index) => (
                            <div key={index} className='flex justify-between flex-wrap py-3 px-2 border'>
                                <div className='m-3 w-[75%]'>
                                    <div className='font-semibold'>{product.title}</div>
                                    <div className='font-serif'> ₹ {product.price}</div>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
            </div>
        </div>
    )
}

export default AddToCart