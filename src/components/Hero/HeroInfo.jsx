import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HeroInfo(props) {
  const { data } = props;

  const addTeamMember = () => {
    props.setHeroesTeam([...props.heroesTeam, data.id]);
    localStorage.setItem("teamHeroesId", JSON.stringify(props.heroesTeam));

    props.setSkillsAmount({
      intelligence:
        props.skillsAmount.intelligence +
        parseInt(data.powerstats.intelligence),
      strength:
        props.skillsAmount.strength + parseInt(data.powerstats.strength),
      speed: props.skillsAmount.speed + parseInt(data.powerstats.speed),
      durability:
        props.skillsAmount.durability + parseInt(data.powerstats.durability),
      power: props.skillsAmount.power + parseInt(data.powerstats.power),
      combat: props.skillsAmount.combat + parseInt(data.powerstats.combat),
    });

    props.setHeightAvg([...props.heightAvg, data.appearance.height]);
    props.setWeightAvg([...props.weightAvg, data.appearance.weight]);

    props.setAverage({
      height: [...props.average.height, data.appearance.height],
      weight: [...props.average.weight, data.appearance.weight]
    })

    props.setTeamPlayers([...props.teamPlayers, data]);
    localStorage.setItem("teamPlayers", JSON.stringify(props.teamPlayers));
  };

  return (
    <>
      <div
        onMouseLeave={() => {
          props.setSwapCard(false);
        }}
      >
        <div className="card-header bg-transparent border-success">
          <h5 className="card-title">{data && data.name}</h5>
        </div>
        <div className="card-body">
          <ul className="list">
            {data && (
              <>
                <li>Alignment: <strong>{data.biography.alignment}</strong></li>
                <li>Base: {data.work.base}</li>
                <li>Intelligence: {data.powerstats.intelligence}</li>
                <li>Power: {data.powerstats.power}</li>
                <li>Intelligence {data.powerstats.intelligence}</li>
                <li>Strength {data.powerstats.strength}</li>
                <li>Speed {data.powerstats.speed}</li>
                <li>Durability {data.powerstats.durability}</li>
                <li>Power{data.powerstats.power}</li>
                <li>Combat {data.powerstats.combat}</li>
              </>
            )}
          </ul>
          <div className="card-footer bg-transparent border-success info-buttons">
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
