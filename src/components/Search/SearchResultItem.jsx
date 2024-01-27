import React, { useState } from "react";

import HeroImage from "../Hero/HeroImage";
import HeroInfo from "../Hero/HeroInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function SearchResultItem(props) {
  const { data } = props;

  const [swapCard, setSwapCard] = useState(false);

  return (
    <div>
      <div>
        <div className="card bg-dark text-white flexbox-item">
          {swapCard ? (
            <HeroInfo
              skillsAmount={props.skillsAmount}
              setSkillsAmount={props.setSkillsAmount}
              setSwapCard={setSwapCard}
              data={data}
              heroesTeam={props.heroesTeam}
              setHeroesTeam={props.setHeroesTeam}
              heightAvg={props.heightAvg}
              setHeightAvg={props.setHeightAvg}
              weightAvg={props.weightAvg}
              setWeightAvg={props.setWeightAvg}
              teamPlayers={props.teamPlayers}
              setTeamPlayers={props.setTeamPlayers}
              addHeroDisabled={props.addHeroDisabled} 
              setAddHeroDisabled={props.setAddHeroDisabled}
            />
          ) : (
            <HeroImage setSwapCard={setSwapCard} data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
