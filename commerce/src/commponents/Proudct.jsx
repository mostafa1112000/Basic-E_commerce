import React from "react";
import { Link } from "react-router";
import "./product.css";
function Proudct(props) {
  let product = {};
  product = props;
  let { showButton } = props;

  console.log(product);
  return (
    <>
      <div className="card">
        <img
          src={product.props.image}
          className="card-img-top"
          alt={product.props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.props.title}</h5>
          <p className="card-text">{product.props.description} </p>
          <h3>Price: {product.props.price}$</h3>
          {showButton && (
            <Link
              to={`/product/${product.props.id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Proudct;
