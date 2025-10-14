import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ title, desc, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        {/* تصویر سرویس */}
        <div className="col-sm-5 text-center text-sm-right mb-3 mb-sm-0">
          <img className="img-fluid rounded" src={img} alt={title} />
        </div>

        {/* توضیحات سرویس */}
        <div className="col-sm-7" style={{ textAlign: "right", fontFamily: "'IRANYekan', sans-serif" }}>
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "1.1rem"
            }}
          >
            <div
              style={{
                background: "#da9f5b",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={Icons[icon]}
                style={{ fontSize: "1rem", color: "#fff" }}
              />
            </div>
            <span>{title}</span>
          </h4>
          <p style={{ margin: 0, lineHeight: "1.6", textAlign: "justify" }}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
