import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HeroImage(props) {
  const { data } = props;

  return (
    <>
      <div
        onMouseEnter={() => {
          props.setSwapCard(true);
        }}
      >
        <img
          className="card-img"
          src={data && data.image.url}
          alt={data && data.id}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{data && data.name}</h5>
        </div>
      </div>
    </>
  );
}

export default HeroImage;
