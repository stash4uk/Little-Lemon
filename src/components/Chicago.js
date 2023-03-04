function Chicago() {
  return (
    <div
      style={{
        display: "flex",
        // flexWrap: "wrap",
        justifyContent: "space-between",
        // backgroundColor: "#495E57",
        marginBottom: "8em",
      }}
    >
      <section
        style={{
          paddingInline: "15%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "50%",
          //   border: "solid 1px #F4CE14",
        }}
      >
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. We are a family owned Mediterranean restaurant, focused
          on traditional recipes served with a modern twist. We are a family
          owned Mediterranean restaurant, focused on traditional recipes served
          with a modern twist.
        </p>
      </section>
      <section style={{ paddingInline: "15%", width: "50%" }}>
        <div
          style={{
            // border: "solid 1px #F4CE14",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "10%",
            paddingBottom: "20%",
          }}
        >
          <img
            src={require("../icons_assets/restauranfood.jpg")}
            alt="Little Lemon Logo"
            width={"100%"}
            style={{
              clipPath: "inset(0 0 0 0 round 16px)",
              position: "relative",
              top: "30%",
              left: "40%",
            }}
          />
          <img
            src={require("../icons_assets/restauranfood.jpg")}
            alt="Little Lemon Logo"
            width={"100%"}
            style={{
              clipPath: "inset(0 0 0 0 round 16px)",
              position: "relative",
              top: "2em",
              //   right: "40%",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Chicago;
