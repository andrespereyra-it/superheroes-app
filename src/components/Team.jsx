import { useEffect, useState } from "react";

import SearchResultItem from "./Search/SearchResultItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Team = (props) => {
  const [intelAcum, setIntelAcum] = useState(0);
  const [strenAcum, setStrenAcum] = useState(0);
  const [speedAcum, setSpeedAcum] = useState(0);
  const [durabilAcum, setDurabilAcum] = useState(0);
  const [powerAcum, setPowerAcum] = useState(0);
  const [combatAcum, setCombatAcum] = useState(0);

  const [heightAvg, setHeightAvg] = useState(0);
  const [weightAvg, setWeightAvg] = useState(0);

  useEffect(() => {
    const sumIntel = () => {
      const acumIntel = props.intelligenceSum
        .map((intel) => parseFloat(intel))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setIntelAcum(acumIntel);
    };
    sumIntel();

    const sumStren = () => {
      const acumStren = props.strengthSum
        .map((stren) => parseFloat(stren))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setStrenAcum(acumStren);
    };
    sumStren();

    const sumSpeed = () => {
      const acumSpeed = props.speedSum
        .map((speed) => parseFloat(speed))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setSpeedAcum(acumSpeed);
    };
    sumSpeed();

    const sumDurabil = () => {
      const acumDurabil = props.durabilSum
        .map((durabil) => parseFloat(durabil))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setDurabilAcum(acumDurabil);
    };
    sumDurabil();

    const sumPower = () => {
      const acumPower = props.powerSum
        .map((power) => parseFloat(power))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setPowerAcum(acumPower);
    };
    sumPower();

    const sumCombat = () => {
      const acumCombat = props.combatSum
        .map((combat) => parseFloat(combat))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setCombatAcum(acumCombat);
    };
    sumCombat();

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
    props.theArray,
    props.intelligenceSum,
    props.strengthSum,
    props.speedSum,
    props.durabilSum,
    props.powerSum,
    props.combatSum,
    props.heightAvg,
    props.weightAvg,
  ]);

  return (
    <div className="team-container border border-white">
      {props.theArray.length === 0 ? (
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
                      Team Intelligence:<strong>{" " + intelAcum}</strong>{" "}
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Strength: <strong>{" " + strenAcum}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Speed: <strong>{" " + speedAcum}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Durability: <strong>{" " + durabilAcum}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Power: <strong>{" " + powerAcum}</strong>
                    </p>
                    <p style={{ fontSize: "medium" }}>
                      Team Combat: <strong>{" " + combatAcum}</strong>
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
                    setTheArray={props.setTheArray}
                    theArray={props.theArray}
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
