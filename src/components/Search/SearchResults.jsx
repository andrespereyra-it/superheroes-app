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
            skillsAmount={props.skillsAmount}
            setSkillsAmount={props.setSkillsAmount}
            average={props.average}
            setAverage={props.setAverage}
            data={superhero}
            key={superhero.id}
            setHeroesTeam={props.setHeroesTeam}
            heroesTeam={props.heroesTeam}
            heightAvg={props.heightAvg}
            setHeightAvg={props.setHeightAvg}
            weightAvg={props.weightAvg}
            setWeightAvg={props.setWeightAvg}
            teamPlayers={props.teamPlayers}
            setTeamPlayers={props.setTeamPlayers}
            addHeroDisabled={props.addHeroDisabled}
            setAddHeroDisabled={props.setAddHeroDisabled}
          />
        ))}
      </div>
    </>
  );
}

export default SearchResults;
