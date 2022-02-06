import React from "react";
import ItemCount from "./ItemCount"

function ItemListContainer ({img, titles, description, price }) {

  function addItem(cont){
    console.log(cont)

  }
    return (
<div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col p-3 mb-5 mt-4">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titles}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{price} </small>
        <div>
          <ItemCount stock ={5} initial={1} onAdd={addItem} />
        </div>
      </div>
    </div>
  </div>
</div>
        )
    
}

export default  ItemListContainer ;