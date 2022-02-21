import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [pro, setPro] = useState({});
  const { cat } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cat}`)
      .then((d) => d.json())
      .then((data) => setPro(data));
  }, []);
  //   console.log(useParams());
  return (
    <div>
      <h3>{pro.title}</h3>
      <img style={{ height: "250px" }} src={`${pro.image}`}></img>
      <p>{pro.price}</p>
      <p>{pro.description}</p>
    </div>
  );
};
