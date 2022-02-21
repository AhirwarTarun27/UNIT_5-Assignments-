import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Products = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((d) => d.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      {item.map((e, i) => (
        <span key={i}>
          <Link to={`/products/${e.id}`}>
            <h3>{e.title}</h3>
          </Link>
        </span>
      ))}
    </>
  );
};
