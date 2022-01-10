import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HeroDetail(props) {
  const data = props.location.state;

  return (
    <div className="App">
      <div className="App-content">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-md-4">
                <div className="imgAbt">
                  <img
                    width="220"
                    className="card-img-top img-heroe img-fluid"
                    style={{border: "1px solid rgba(0, 0, 0, 0.253)"}}
                    src={data && data.image.url}
                    alt={data && data.id}
                  />
                </div>
              </div>
              <div style={{border: "1px solid #fff"}} className="col-md-8 text-white">
                <br />
                <h5>
                  <strong>{data && data.name}</strong>
                </h5>
                <ul style={{textAlign:"justify",padding:"20px"}}className="list text-white">
                  <li>Weight: {data && data.appearance.weight}</li>
                  <li>Height: {data && data.appearance.height}</li>
                  <li>Name: {data && data.name}</li>
                  <li>Aliases: {data && data.biography.aliases}</li>
                  <li>Eye-Color: {data && data.appearance["eye-color"]}</li>
                  <li>Hair-Color: {data && data.appearance["hair-color"]}</li>
                  <li>Base: {data && data.work.base}</li>
                </ul>
                <Link className="btn btn-outline-dark" to="/">Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDetail;
