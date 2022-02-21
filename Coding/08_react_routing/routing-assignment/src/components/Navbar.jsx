import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link
        to="/"
        style={{
          margin: "0px 20px",
        }}
      >
        Home
      </Link>
      <Link to="/products">Products</Link>
    </div>
  );
};
