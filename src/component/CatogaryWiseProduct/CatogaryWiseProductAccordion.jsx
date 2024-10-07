import React from 'react';
import AccordionProductList from './AccordionProductList';

const CatogaryWiseProductAccordion = ({ productList, showItemsIndex, setShowItems }) => {
    
    const handleAccordion = () => {
        setShowItems();
    }

    return (
        <>
            <div className="m-5 border shadow-lg rounded-lg">
                <div className='flex justify-between cursor-pointer p-3' onClick={handleAccordion}>
                    <div className='flex gap-2'>
                        {
                            (productList.type.charAt(0).toUpperCase() + productList.type.slice(1))
                        }
                        <span>({productList.data.length})</span>
                    </div>
                    <div>
                        <button className="cursor-pointer w-6 h-6 justify-center items-center flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
                                    fill="grey" />
                            </svg>
                        </button>
                    </div>
                </div>
                {showItemsIndex && <hr />}
                {showItemsIndex &&
                    <div className='p-3 text-left'>
                        {showItemsIndex && <AccordionProductList productItems={productList.data} />}
                    </div>
                }
            </div>
        </>
    );
}

export default CatogaryWiseProductAccordion;