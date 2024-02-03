import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HeroImage(props) {
  const { data, hero } = props;

  return (
    <>
      <div
        onMouseEnter={() => {
          props.setSwapCard(true);
        }}
      >
        <img
          className="card-img"
          src={hero && hero.image.url}
          alt={hero && hero.id}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{hero && hero.name}</h5>
        </div>
      </div>
    </>
  );
}

export default HeroImage;
