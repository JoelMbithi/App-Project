import { createContext } from "react";
import { doctors } from "../assets/assets";

export const Appcontext = createContext()

{/* create context provider function */}

const AppContextProvider  =(props)=>{
    {/* add variables which can be accessed by any component using props */}

    const value= {
        doctors
    }
    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )

}

export default AppContextProvider