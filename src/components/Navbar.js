import { Link, NavLink } from "react-router-dom";   // <== IMPORT NavLink

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        {/* <Link to="/"> Home </Link> */}
        {/* <Link to="/about"> About </Link> */}
        {/* <Link to="/projects"> Projects </Link> */}

        {/*  ADD 👇 */}
        <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
        <NavLink to="/about" activeClassName="selected"> About </NavLink>
        <NavLink to="/projects" activeClassName="selected"> Projects </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
