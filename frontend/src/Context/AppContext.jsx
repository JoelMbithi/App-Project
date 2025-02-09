import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(); // Change Appcontext to AppContext

const AppContextProvider = (props) => {
    const value = {
        doctors
    };
    return (
        <AppContext.Provider value={value}> {/* Change Appcontext to AppContext */}
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
