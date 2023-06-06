

export const GettingDataCheck = () => {

    

    const getData = async() => {
        try{
            const response = await fetch("/api/products");
            console.log( await response.json())
        }catch(e){
            console.error(e);
        }
        
    }

    const dataget = () => {
        getData();
    }
    return(
        <button style={{marginTop : "100px"}} onClick={dataget}>data get</button>
    )
}