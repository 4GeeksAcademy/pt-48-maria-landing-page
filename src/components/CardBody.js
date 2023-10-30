import React from "react";
import imgBody from "../assets/imgBody.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function CardBody() {
  return (
    <>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-6 col-12 align-self-center">
            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
              <h2 className="card-title">Quick food delivery <br/>in your mobile</h2>
              <p className="card-text">
                Order your products at any time and we will <br/>deliver them
                directly to your home.
              </p>
              <button
                type="button"
                className="btn btn-success btn-rounded"
                style={{ backgroundColor: "#07DBCF" }}
              >
                Make an order
              </button>
            </div>
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-center">
            <img src={imgBody} className="img-fluid rounded-start" style={{height:'350px'}} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBody;

