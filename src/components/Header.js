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
        <li className="navLink">Home</li>
        <li className="navLink">About</li>
        <li className="navLink">Menu</li>
        <li className="navLink">Reservations</li>
        <li className="navLink">Order Online</li>
        <li className="navLink">Login</li>
      </ul>
    </menu>
  );
}

export default Header;
