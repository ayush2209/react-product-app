import React, { useContext } from 'react';
import UserLoginContext from '../utils/UserLogginContext';

import TextField from '@mui/material/TextField';

const UpdateContext = () => {

    const { user, setUserName } = useContext(UserLoginContext);

    const handleOnChange = (e) => {
        setUserName(e.target.value);
    }
    return (
        <div>
            <TextField
                id="outlined-basic"
                className='w-full md:w-[350px]'
                label="Update the Context API Data"
                variant="outlined"
                value={user}
                onChange={handleOnChange} />
        </div>
    )
}

export default UpdateContext;
