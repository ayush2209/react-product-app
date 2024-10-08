import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItems } from "../../store/cartSlice";
const AccordionProductList = ({ productItems }) => {

    const dispatch = useDispatch();
    const handleBuyNow = (productItems) => {
        dispatch(addItems(productItems));
    }

    return (
        productItems.map((productItems, index) => (
            <div key={index} className='flex justify-between flex-wrap py-3 px-2'>
                <div className='m-3 w-[75%]'>
                    <div className='font-semibold'>{productItems.title}</div>
                    <div className='font-serif'> ₹ {productItems.price}</div>
                    <div>{productItems.description}</div>
                </div>
                <div className='w-[20%] p-4 align-middle'>
                    <img className='hidden sm:block' src={productItems?.image} alt="" />
                    <div className='flex justify-center mt-3'>
                        <Button className="w-full sm:w-auto" variant="contained" onClick={() => handleBuyNow(productItems)}>Buy Now</Button>
                    </div>
                </div>
                <hr />
            </div>
        ))
    )
}

export default AccordionProductList;