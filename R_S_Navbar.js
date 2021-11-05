// npm install react-router-dom@5 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Pull in Data</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/comments">Comments</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
