import  * as React from "react";
import { useState } from "react";


function ItemCount(){
    
    const [Count,setCount] = useState(1);
    
    const sumador = () => {
        if(Count<10){
        setCount(Count +1);
        }
    };
    const resta = () => {
        if(Count>0){
            setCount(Count -1);
        }
        
    };

    return(
        <div>
            <h2>Contador: {Count}</h2>
            <button onClick= {sumador} >Suma</button>
            <button onClick= {resta} >Resta</button>
        </div>
    );
}

export default ItemCount;