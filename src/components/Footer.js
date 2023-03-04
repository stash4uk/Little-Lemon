function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        // flexWrap: "wrap",
        paddingInline: "15%",
        paddingBlock: "5%",
        backgroundColor: "#495E57",
      }}
    >
      <img
        src={require("../icons_assets/restauranfood.jpg")}
        alt="Footer Logo"
        width={"20%"}
        style={{
          clipPath: "inset(0 0 0 0 round 16px)",
        }}
      />
      <div className="footerBlock"></div>
      <div className="footerBlock">
        <h3 className="heroTitle">Doormat Navigation</h3>
        <ul className="heroContent" style={{ listStyle: "none", padding: "0" }}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footerBlock">
        <h3 className="heroTitle">Contact</h3>
        <ul className="heroContent" style={{ listStyle: "none", padding: "0" }}>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footerBlock">
        <h3 className="heroTitle">Social Media Links</h3>
        <ul className="heroContent" style={{ listStyle: "none", padding: "0" }}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
