import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about" style={{ margin: "0px 10px" }}>
        About
      </Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
