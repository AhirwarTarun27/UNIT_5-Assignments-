import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((d) => d.json())
      .then((data) => setCat(data));
  }, []);
  return (
    <>
      <h2>Category Page</h2>
      <p>Total Category : {cat.length}</p>
      <div>
        {cat.map((e, i) => (
          <h3 key={i}>{e}</h3>
        ))}
      </div>
    </>
  );
};
