import React, { useEffect, useState } from "react";

import { getProduct } from "../api/api";
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom";

function ItemDetailContainer () {
  const [item, setItem] = useState([])
  const idProducto = 1 ;
  useEffect(() =>{
    

    getProduct().then((items) =>{
     const item = items.find((i) => {
     return i.id === parseInt(idProducto)
    });
      setItem(item);
    })

  },[]);

    return (
      <div>
      <ItemDetail item={item} />
      </div>
        )
    
}

export default  ItemDetailContainer ;