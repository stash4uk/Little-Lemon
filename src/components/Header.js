import { Link } from "react-router-dom";

function Header() {
  return (
    <menu
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={require("../icons_assets/Logo.svg").default}
        alt="Little Lemon Logo"
        style={{ cursor: "pointer" }}
      />
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
        <Link to="/menu" className="navLink">
          Menu
        </Link>
        <Link to="/reservations" className="navLink">
          Reservations
        </Link>
        <Link to="/order-online" className="navLink">
          Order Online
        </Link>
        <Link to="/login" className="navLink">
          Login
        </Link>
      </ul>
    </menu>
  );
}

export default Header;
