const ProductList = ({ productItems }) => {
    return (
        (productItems.map((productItems , index) => (
            <>
                <div className='flex justify-between py-3 px-2'>
                    <div className='m-3'>
                        <div className='font-semibold'>{productItems.title}</div>
                        <div className='font-serif'> ₹ {productItems.price}</div>
                        <div>{productItems.description}</div>
                    </div>
                    <div className='w-1/12 p-4 align-middle'>
                        <img className='' src={productItems?.image} alt="" />
                    </div>
                </div>
                { <hr />}
            </>
        ))
        )
    )
}

export default ProductList;