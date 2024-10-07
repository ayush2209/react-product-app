import React, { useContext } from 'react';
import { CusotmRating } from '../Rating/CustomRating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import UserLoginContext from '../../utils/UserLogginContext';

const ProductCard = ({ product }) => {

    const { user } = useContext(UserLoginContext);

    return (
        <Card className='m-4 w-[300px]' key={product.id} sx={{ boxShadow: 4 }}>
            <CardHeader onClick={(event) => event.preventDefault()}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {product?.title?.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.category.toUpperCase()}
            />
            <CardActionArea >
                <CardMedia
                    className='object-cover h-80 hover:scale-105 transition duration-1000 ease-in-out'
                    component="img"
                    image={product.image ? product.image : "https://placehold.co/600x400"} alt={product?.title || 'Product Image'}
                />
                <CardContent onClick={(event) => event.preventDefault()}>
                    <p className='font-light md:truncate hover:overflow-visible hover:whitespace-normal hover:text-ellipsis'>{product.title}</p>
                </CardContent>
            </CardActionArea>
            <CardActions className='flex items-center align-middle justify-between' onClick={(event) => event.preventDefault()}>
                <div>
                    <Button size="small" color="primary">
                        ₹ {product.price}
                    </Button>
                </div>
                <div>
                    <CusotmRating key={product.id} ratingValue={product} />
                    <hr />
                    <p className='text-xs text-end text-red-400 m-2'>By: {user}</p>
                </div>
            </CardActions>
        </Card>
    )
}


// Higher Order Component (HOC) for product list that adds a "Recommended" tag if the product rating is more than 4.
export const recomendedProductComponent = (ProductList) => {
    return (props) => {
        return (
            <div className='relative'>
                <p className='absolute top-[0px] shadow-lg left-[70%] bg-yellow-600 font-serif text-white border-dashed rounded-lg p-2 '>Recomended</p>
                <ProductList {...props} />
            </div>
        )
    }
}

export default ProductCard;