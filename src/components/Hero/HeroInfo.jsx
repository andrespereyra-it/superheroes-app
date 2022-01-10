import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HeroInfo(props) {
  const { data } = props;

  const addTeamMember = () => {
    props.setTheArray([...props.theArray, data.id]);
    localStorage.setItem("teamHeroesId", JSON.stringify(props.theArray));

    props.setIntelligenceSum([
      ...props.intelligenceSum,
      data.powerstats.intelligence,
    ]);

    props.setStrengthSum([...props.strengthSum, data.powerstats.strength]);

    props.setSpeedSum([...props.speedSum, data.powerstats.speed]);

    props.setDurabilSum([...props.durabilSum, data.powerstats.durability]);

    props.setPowerSum([...props.powerSum, data.powerstats.power]);

    props.setCombatSum([...props.combatSum, data.powerstats.combat]);

    props.setHeightAvg([...props.heightAvg, data.appearance.height]);

    props.setWeightAvg([...props.weightAvg, data.appearance.weight]);

    props.setTeamPlayers([...props.teamPlayers, data]);
    localStorage.setItem("teamPlayers", JSON.stringify(props.teamPlayers));    

    /* props.setWentBack(true) */
    /* handleDisabled(); */
  };

  /* const handleDisabled = () => {
    props.setAddHeroDisabled("disabled");
  } */

  return (
    <>
      <div
        onMouseLeave={() => {
          props.setSwapCard(false);
        }}
      >
        <div class="card-header bg-transparent border-success">
          <h5 className="card-title">{data && data.name}</h5>
        </div>
        <div className="card-body">
          <ul className="list">
            <li>
              Alignment: <strong>{data && data.biography.alignment}</strong>
            </li>
            <li>Base: {data && data.work.base}</li>
            <li>Intelligence: {data && data.powerstats.intelligence}</li>
            <li>Power: {data && data.powerstats.power}</li>
            <li>Intelligence {data && data.powerstats.intelligence}</li>
            <li>Strength {data && data.powerstats.strength}</li>
            <li>Speed {data && data.powerstats.speed}</li>
            <li>Durability {data && data.powerstats.durability}</li>
            <li>Power{data && data.powerstats.power}</li>
            <li>Combat {data && data.powerstats.combat}</li>
          </ul>
          <div class="card-footer bg-transparent border-success info-buttons">
          <NavLink
            className="btn btn-outline-success info-button"
            to={{
              pathname: "/detail",
              state: data,
            }}
          >
            More Info
          </NavLink>
          <input
            type="button"
            className="btn btn-outline-success info-button"
            value="Add Hero"
            onClick={addTeamMember}
            disabled={props.addHeroDisabled}
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroInfo;
