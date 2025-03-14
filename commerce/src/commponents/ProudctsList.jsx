import React, { useEffect, useState } from "react";
import Proudct from "./Proudct";

function ProudctsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [proudcts, setProudcts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProudcts(data));
  };
  {
    /* this button get the all  category*/
  }

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  {
    /* this button get the all product of one category*/
  }

  const getProductInCategorey = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProudcts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div>
      <h2 className="text-center p-3">Our Proudcts</h2>

      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>
        {/* this button make loop the all product of one category*/}
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getProductInCategorey(cat);
              }}
              className="btn btn-info"
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {proudcts.map((proudct) => {
            return (
              <div className="col-3" key={proudct.id}>
                <Proudct props={proudct} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProudctsList;
