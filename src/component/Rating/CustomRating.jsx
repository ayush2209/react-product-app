import React from 'react';
import { Rating } from '@mui/material';

export const CusotmRating = (props) => {
    return (
        <> 
            <Rating name="read-only" value={props.ratingValue?.rating?.rate} readOnly />
        </>
    )
}