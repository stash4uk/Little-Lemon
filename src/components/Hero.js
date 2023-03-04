function Hero() {
  return (
    <div
      style={{
        display: "flex",
        // flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "#495E57",
        marginBottom: "8em",
      }}
    >
      <section
        style={{
          padding: "0 0 0 15%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h1 className="heroTitle">Little Lemon</h1>
          <h3 className="heroContent">Chicago</h3>
        </div>
        <p className="heroContent">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          style={{
            borderRadius: "16px",
            paddingBlock: "1em",
            backgroundColor: "#F4CE14",
            borderStyle: "none",
            width: "100%",
          }}
        >
          Reserve a Table
        </button>
      </section>
      <section style={{ paddingInline: "15%" }}>
        <div
          style={{
            // border: "solid 1px #F4CE14",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            top: "30%",
          }}
        >
          <img
            src={require("../icons_assets/restauranfood.jpg")}
            alt="Little Lemon Logo"
            width={"50%"}
            style={{ clipPath: "inset(15% 0 25% 0 round 16px)" }}
          />
        </div>
      </section>
    </div>
  );
}
export default Hero;
