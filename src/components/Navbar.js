import { Link } from "react-router-dom";   // <== IMPORT

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link>                   {/* <== ADD */}
        <Link to="/about"> About </Link>               {/* <== ADD */}
        <Link to="/projects"> Projects </Link>           {/* <== ADD */}

      </ul>
    </nav>
  );
}

export default Navbar;
