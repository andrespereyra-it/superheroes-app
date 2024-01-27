import { useEffect, useState } from "react";

import SearchResultItem from "./Search/SearchResultItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Team = (props) => {

  const [heightAvg, setHeightAvg] = useState(0);
  const [weightAvg, setWeightAvg] = useState(0);

  useEffect(() => {
    const avgHeight = () => {
      const acumAvgHeight = props.heightAvg
        .map((height) => parseFloat(height))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setHeightAvg(acumAvgHeight / props.heightAvg.length);
    };
    avgHeight();

    const avgWeight = () => {
      const acumAvgWeight = props.weightAvg
        .map((weight) => parseFloat(weight))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setWeightAvg(acumAvgWeight / props.weightAvg.length);
    };
    avgWeight();
  }, [
    props.heroesTeam,
    props.heightAvg,
    props.weightAvg,
  ]);

  return (
    <div className="team-container border border-white">
      {props.heroesTeam.length === 0 ? (
        <p className="py-4 text-center text-white">
          You don't have a team yet, please add a hero.
        </p>
      ) : (
        <>
          <div className="container text-white">
            <div className="row justify-content-around">
              <div className="col-md-6 team-col-line">
              <div style={{paddingTop:"30px"}} className="mb-4">
                <span className="display-6">
                  Your Team Statistics
                  </span>
                  <div style={{ padding: "90px" }}>
                    <p style={{ fontSize: "large" }}>
                      Average Height {heightAvg}{" "}
                    </p>
                    <p style={{ fontSize: "large" }}>
                      Average Weight {weightAvg}{" "}
                    </p>
                  </div></div>
              </div>
              <div className="col-md-6">
                <div style={{paddingTop:"30px"}} className="mb-4">
                  <span className="display-6">PowerStats</span>
                  <div style={{ padding: "10px" }}>
                    <p style={{ fontSize: "medium" }}>
                      Team Intelligence:<strong>{" " + props.skillsAmount.intelligence}</strong>{" "}
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Strength: <strong>{" " + props.skillsAmount.strength}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Speed: <strong>{" " + props.skillsAmount.speed}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Durability: <strong>{" " + props.skillsAmount.durability}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Power: <strong>{" " + props.skillsAmount.power}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Combat: <strong>{" " + props.skillsAmount.combat}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row row-cols-3 g-12">
              {props.teamPlayers.map((hero) => (
                <>
                  <SearchResultItem
                    data={hero}
                    key={hero.id}
                    setHeroesTeam={props.setHeroesTeam}
                    heroesTeam={props.heroesTeam}
                    teamPlayers={props.teamPlayers}
                    setTeamPlayers={props.setTeamPlayers}
                    addHeroDisabled={props.addHeroDisabled} 
                    setAddHeroDisabled={props.setAddHeroDisabled}
                  />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
