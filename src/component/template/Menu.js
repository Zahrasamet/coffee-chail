import React from "react";
import Card from "../module/card/Card";

function Menu({ data }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        
        <div className="section-title text-center">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            منو و قیمت
          </h4>
          <h1 className="display-4">
            کیفیت بالا، قیمت مناسب، لبخند شما هدف ماست.
          </h1>
        </div>

        <div className="row">
        
          <div className="col-lg-6 text-start mb-5 mb-lg-0">
            <h1 className="mb-5">نوشیدنی داغ</h1>
            {data
              .filter((item) => item.type === "hot")
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>

      
          <div className="col-lg-6 text-end">
            <h1 className="mb-5">نوشیدنی سرد</h1>
            {data
              .filter((item) => item.type === "cold")
              .map((item) => (
                <Card key={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
