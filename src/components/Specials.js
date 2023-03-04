function Specials() {
  return (
    <div>
      <section
        style={{
          display: "flex",
          // flexWrap: "wrap",
          justifyContent: "space-between",
          paddingInline: "15%",
          marginTop: "3em",
          // border: "solid 1px #F4CE14",
          // backgroundColor: "#495E57",
        }}
      >
        <div>
          <h3>Specials</h3>
        </div>
        <div
          style={{
            //   paddingLeft: "15%",
            marginBlock: "1em",
            direction: "flex",
            justifyContent: "flex-end",
            //   border: "solid 1px #F4CE14",
          }}
        >
          <button
            style={{
              borderRadius: "16px",
              padding: "1em 3em",
              backgroundColor: "#F4CE14",
              borderStyle: "none",
              width: "100%",
            }}
          >
            Online Menu
          </button>
        </div>
      </section>
      <section style={{ display: "flex", paddingInline: "15%" }}>
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#EDEFEE",
            marginRight: "1em",
            clipPath: "inset(0 0 0 0 round 16px 16px 0 0)",
            width: "33%",
          }}
        >
          <img
            src={require("../icons_assets/greek salad.jpg")}
            alt="Little Lemon Logo"
            width={"100%"}
            style={{ clipPath: "inset(0 0 0 0 round 16px 16px 0 0)" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "1em",
            }}
          >
            <h4>Greek Salad</h4>
            <p style={{ color: "#EE9972" }}>$12.99</p>
          </div>
          <p style={{ paddingInline: "1em" }}>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <h5 style={{ paddingInline: "1em" }}>Order a delivery</h5>
        </article>
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#EDEFEE",
            marginInline: "1em",
            clipPath: "inset(0 0 0 0 round 16px 16px 0 0)",
            width: "33%",
          }}
        >
          <img
            src={require("../icons_assets/bruchetta.jpg")}
            alt="Little Lemon Logo"
            width={"100%"}
            style={{ clipPath: "inset(0 0 0 0 round 16px 16px 0 0)" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "1em",
            }}
          >
            <h4>Bruchetta</h4>
            <p style={{ color: "#EE9972" }}>$5.99</p>
          </div>
          <p style={{ paddingInline: "1em" }}>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <h5 style={{ paddingInline: "1em" }}>Order a delivery</h5>
        </article>
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#EDEFEE",
            marginLeft: "1em",
            clipPath: "inset(0 0 0 0 round 16px 16px 0 0)",
            width: "33%",
          }}
        >
          <img
            src={require("../icons_assets/lemon dessert.jpg")}
            alt="Little Lemon Logo"
            width={"100%"}
            style={{ clipPath: "inset(0 0 17% 0 round 16px 16px 0 0)" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "1em",
            }}
          >
            <h4>Lemon Dessert</h4>
            <p style={{ color: "#EE9972" }}>$5.00</p>
          </div>
          <p style={{ paddingInline: "1em" }}>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <h5 style={{ paddingInline: "1em" }}>Order a delivery</h5>
        </article>
      </section>
    </div>
  );
}
export default Specials;
