import { createContext } from "react";

const UserLoginContext = createContext({
    loggedIn: false,
    user: 'Default'
});

export default UserLoginContext;