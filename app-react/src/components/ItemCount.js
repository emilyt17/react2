import React, { useState, useEffect } from "react";


function ItemCount ({stock, initial, onAdd}) {
    const [cont , setCont] = useState(initial);
    function sumItem () {
        if(cont < stock ){
        setCont(cont + 1);
        }
    };

    function resItem(){
        if (cont > 1){
        setCont(cont - 1);
        }
    };



    return (
        <div>
            <button onClick={sumItem}>+ </button>
            <h5>{cont}</h5>
            <button onClick={resItem}> - </button>
            <br/>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
        )
    
}

export default  ItemCount;