import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItems } from "../../store/cartSlice";


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const AccordionProductList = ({ productItems }) => {

    const dispatch = useDispatch();
    const handleBuyNow = (productItems) => {
        dispatch(addItems(productItems));
    }

    console.log('Hi');

    return (
        productItems?.map((productItems, index) => (
            <div key={index} className='flex flex-col sm:flex-row justify-between flex-wrap py-3 px-2 border-b'>
                <div className='m-3 w-full sm:w-[75%]'>
                    <div className='font-semibold'>{productItems.title}</div>
                    <div className='font-serif'> ₹ {productItems.price}</div>
                    <div>{productItems.description}</div>
                </div>
                <div className='w-full sm:w-[20%] p-4 align-middle'>
                    <div className="object-cover h-20 hidden sm:block">
                        <img className='h-full w-full object-contain' src={productItems?.image} alt="" />
                    </div>
                    <div className='flex justify-center mt-3'>
                        <Button className="w-full sm:w-auto" variant="contained" onClick={() => handleBuyNow(productItems)}>
                            <AddShoppingCartIcon />
                            <span className="ml-2"> Buy Now </span>
                           </Button>
                    </div>
                </div>
            </div>
        ))
    )
}

export default AccordionProductList;