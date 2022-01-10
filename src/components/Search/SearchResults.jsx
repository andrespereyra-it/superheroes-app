import React from "react";

import SearchResultItem from "./SearchResultItem";

import "../../App.css";

function SearchResults(props) {
  const { superheroData = [] } = props;

  return (
    <>
      <br />
      <div className="row row-cols-3">
        {superheroData.map((superhero) => (
          <SearchResultItem
            data={superhero}
            key={superhero.id}
            setTheArray={props.setTheArray}
            theArray={props.theArray}
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
            addHeroDisabled={props.addHeroDisabled} 
            setAddHeroDisabled={props.setAddHeroDisabled}
            /* wentBack={props.wentBack}
            setWentBack={props.setWentBack} */
          />
        ))}
      </div>
    </>
  );
}

export default SearchResults;
