import React, { useState } from "react";

import HeroImage from "../Hero/HeroImage";
import HeroInfo from "../Hero/HeroInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function SearchResultItem(props) {
  const { data } = props;

  const [swapCard, setSwapCard] = useState(false);

  return (
    <>
      <div className="col-md-4">
        <div className="card bg-dark text-white card-info">
          {swapCard ? (
            <div className="card-info">
              <HeroInfo
                setSwapCard={setSwapCard}
                data={data}
                theArray={props.theArray}
                setTheArray={props.setTheArray}
                intelligenceSum={props.intelligenceSum}
                setIntelligenceSum={props.setIntelligenceSum}
                strengthSum={props.strengthSum}
                setStrengthSum={props.setStrengthSum}
                speedSum={props.speedSum}
                setSpeedSum={props.setSpeedSum}
                durabilSum={props.durabilSum}
                setDurabilSum={props.setDurabilSum}
                powerSum={props.powerSum}
                setPowerSum={props.setPowerSum}
                combatSum={props.combatSum}
                setCombatSum={props.setCombatSum}
                heightAvg={props.heightAvg}
                setHeightAvg={props.setHeightAvg}
                weightAvg={props.weightAvg}
                setWeightAvg={props.setWeightAvg}
                teamPlayers={props.teamPlayers}
                setTeamPlayers={props.setTeamPlayers}
              />
            </div>
          ) : (
            <div>
              <HeroImage setSwapCard={setSwapCard} data={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResultItem;
