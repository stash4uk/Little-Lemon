function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingInline: "5%",
      }}
    >
      <div className="footerBlock">
        <img
          src={require("../icons_assets/Logo.svg").default}
          alt="Footer Logo"
        />
      </div>
      <div className="footerBlock">
        <h3>Doormat Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footerBlock">
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footerBlock">
        <h3>Social Media Links</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
