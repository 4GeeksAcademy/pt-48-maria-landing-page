import React from "react";

function CardDown({ image, texto }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mx-auto">
      <div className="card h-100 border-0">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{texto}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDown;

