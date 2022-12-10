import AppContext from "./context";
import { useState } from "react";


function ConetxtProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    const [userData, setuserData] = useState([])

    const contextData = {
        'cartItems': [cartItems, setCartItems],
        'userData': [userData, setuserData]
    };

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );
}

export default ConetxtProvider;