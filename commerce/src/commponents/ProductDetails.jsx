import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import Proudct from "./Proudct";
function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/ ${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <Fragment>
      <Proudct props={product} showButton={false} />
    </Fragment>
  );
}

export default ProductDetails;
