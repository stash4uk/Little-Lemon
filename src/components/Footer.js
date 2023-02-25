function Footer() {
  return (
    <>
      <img
        src={require("../icons_assets/restauranfood.jpg").default}
        alt="Something visual"
      />
      <h3>Doormat Navigation</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <h3>Social Media Links</h3>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </>
  );
}
export default Footer;
