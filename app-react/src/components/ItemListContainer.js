import React from "react";


function ItemListContainer (imgSrc, title) {
    return (
<div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col p-3 mb-5 mt-4">
    <div className="card h-100">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
        )
    
}

export default  ItemListContainer ;