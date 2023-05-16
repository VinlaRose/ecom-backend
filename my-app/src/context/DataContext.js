import { createContext, useEffect, useState } from "react"


export const  DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);

    const getData = async() => {
        try{
            const response = await fetch("/api/products");
            const reqData = await response.json()
            setData(reqData.products )
        }catch(e){
            console.error(e);
        }
        
    }

   useEffect(() => {
    getData();
   }, [])

   

   
    
    
    
    

    return(
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )

}