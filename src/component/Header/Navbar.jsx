
const Navbar = ({setSearchProduct}) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center p-4 sticky top-0 left-0 shadow-lg z-[2] backdrop-filter backdrop-blur-lg">
            <div style={{ color: 'lightslategrey' }}>
                <h3>
                    Product
                </h3>
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Bucchuk Product"
                    className="border border-gray-300 rounded-md p-2"
                    onChange={(event) => {
                        setSearchProduct(event.target.value);
                    }} 
                />
            </div>
            <div className='hidden md:flex gap-5 cursor-pointer'>
                <li className='list-none'>About</li>
            </div>
        </div>
    )
}

export default Navbar;