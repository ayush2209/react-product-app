
import { Link } from 'react-router-dom';

const Navbar = ({setSearchProduct}) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center p-4 sticky top-0 left-0 shadow-lg z-[2] backdrop-filter backdrop-blur-lg">
            <div style={{ color: 'lightslategrey' }}>
                <h3>
                    <Link to="/"> Product </Link>
                   
                </h3>
            </div>
            {/* <div>
                <input 
                    type="text"
                    placeholder="Search Product"
                    className="border border-gray-300 rounded-md p-2"
                    onChange={(event) => {
                        setSearchProduct(event.target.value);
                    }} 
                />
            </div> */}
            <div className='flex gap-5 cursor-pointer'>
               
                {/* <Link to="/productCatogary">Product Catogary</Link>  */}
                {/* <li className='list-none'>About</li> */}
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;