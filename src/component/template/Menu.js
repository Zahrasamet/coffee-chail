import Card from "../module/card/Card";


function Menu({ data }) {
  console.log("Menu =>", data);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu &amp; Pricing
          </h4>
          <h1 className="display-4">کیفیت بالا، قیمت مناسب، لبخند شما هدف ماست.</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">نوشیدنی داغ</h1>

            {data
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} />
              ))}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">نوشیدنی سرد</h1>
            {data
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
