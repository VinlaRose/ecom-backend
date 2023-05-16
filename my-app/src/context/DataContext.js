import { createContext, useEffect, useState } from "react"
import { products } from "../backend/db/products";

export const  DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    useEffect(() => setData(products), [] );
    console.log(data)

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )

}