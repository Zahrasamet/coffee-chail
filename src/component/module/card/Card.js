import React from "react";

function Card({ title, desc, img, price }) {
  return (
    <div className="row align-items-center mb-5">
      {/* تصویر سمت چپ */}
      <div className="col-4 col-sm-3 mb-3 mb-sm-0">
        <img
          className="w-100 rounded-circle"
          src={img}
          alt={title}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
          }}
        />
        <h5 className="menu-price text-start mt-2">{price}</h5>
      </div>

      {/* متن سمت راست */}
      <div className="col-8 col-sm-9 text-start">
        <h4>{title}</h4>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
