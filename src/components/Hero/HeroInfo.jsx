import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { useSelector } from "react-redux";

function HeroInfo(props) {
  const { hero } = props;

  const addTeamMember = () => {
    props.setHeroesTeam([...props.heroesTeam, hero.id]);
    localStorage.setItem("teamHeroesId", JSON.stringify(props.heroesTeam));

    props.setSkillsAmount({
      intelligence:
        props.skillsAmount.intelligence +
        parseInt(hero.powerstats.intelligence),
      strength:
        props.skillsAmount.strength + parseInt(hero.powerstats.strength),
      speed: props.skillsAmount.speed + parseInt(hero.powerstats.speed),
      durability:
        props.skillsAmount.durability + parseInt(hero.powerstats.durability),
      power: props.skillsAmount.power + parseInt(hero.powerstats.power),
      combat: props.skillsAmount.combat + parseInt(hero.powerstats.combat),
    });

    props.setHeightAvg([...props.heightAvg, hero.appearance.height]);
    props.setWeightAvg([...props.weightAvg, hero.appearance.weight]);

    props.setAverage({
      height: [...props.average.height, hero.appearance.height],
      weight: [...props.average.weight, hero.appearance.weight]
    })

    props.setTeamPlayers([...props.teamPlayers, hero]);
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
          <h5 className="card-title">{hero && hero.name}</h5>
        </div>
        <div className="card-body">
          <ul className="list">
            {hero && (
              <>
                <li>Alignment: <strong>{hero.biography.alignment}</strong></li>
                <li>Base: {hero.work.base}</li>
                <li>Intelligence: {hero.powerstats.intelligence}</li>
                <li>Power: {hero.powerstats.power}</li>
                <li>Intelligence {hero.powerstats.intelligence}</li>
                <li>Strength {hero.powerstats.strength}</li>
                <li>Speed {hero.powerstats.speed}</li>
                <li>Durability {hero.powerstats.durability}</li>
                <li>Power{hero.powerstats.power}</li>
                <li>Combat {hero.powerstats.combat}</li>
              </>
            )}
          </ul>
          <div className="card-footer bg-transparent border-success info-buttons">
            <NavLink
              className="btn btn-outline-success info-button"
              to={{
                pathname: "/detail",
                state: hero,
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
