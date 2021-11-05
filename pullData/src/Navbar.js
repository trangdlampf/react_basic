import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Pull in Data</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/source">Source</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;