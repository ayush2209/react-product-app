
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserLoginContext from '../../utils/UserLogginContext';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = ({ setSearchProduct }) => {

    const { user } = useContext(UserLoginContext);
    const cartItems = useSelector(state => state.cart.items.length);

    const [loginState, setLoginState] = useState('Login');

    const handleLoginState = () => {
        if (loginState === 'Login') {
            setLoginState('Logout');
        } else {
            setLoginState('Login');
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center p-4 sticky top-0 left-0 shadow-lg z-[2] backdrop-filter backdrop-blur-lg">
            <div style={{ color: 'lightslategrey' }}>                
                <Link to="/" className='font-bold hover:text-pink-600'> Product </Link>              
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
                <Link className='hover:text-pink-600' to="/about">About</Link>
                {/* {cartItems > 0 && ( */}
                    <Link className='hover:text-pink-600 flex align-middle justify-center gap-3' to="/cart">
                        <Badge badgeContent={cartItems} color="success">
                            <AddShoppingCartIcon color="action" />
                        </Badge>
                        <span>Cart</span>
                    </Link>
                {/* )} */}

                {loginState == 'Logout' && <Link className='text-cyan-700 font-semibold hover:text-pink-600'>{user}</Link>}
                
                <Link className='hover:text-pink-600' onClick={handleLoginState}>{loginState}</Link>
            </div>
        </div>
    )
}

export default Navbar;