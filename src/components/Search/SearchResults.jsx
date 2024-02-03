import React from "react";

import SearchResultItem from "./SearchResultItem";

import "../../App.css";
import { useSelector } from "react-redux";

function SearchResults(props) {

  const heroes = useSelector(state => state.heroesByName.heroes.results);

  return (
    <>
      <br />
      <div className="row row-cols-3">
        {heroes?.map((hero) => (
          <SearchResultItem
            skillsAmount={props.skillsAmount}
            setSkillsAmount={props.setSkillsAmount}
            average={props.average}
            setAverage={props.setAverage}
            hero={hero}
            key={hero.id}
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
