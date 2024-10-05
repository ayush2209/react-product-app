import { createContext } from "react";

const UserLoginContext = createContext({
    loggedIn: false
});

export default UserLoginContext;