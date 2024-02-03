import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import SearchBar from "./Search/SearchBar";
import SearchResults from "./Search/SearchResults";
import Team from "./Team";
import useUser from "../hooks/useUser";
import { axiosInstance } from "../services/apiService";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesByName } from "../store/heroesByNameSlice";

function Home() {
  const { isLogged } = useUser();

  const [searchText, setSearchText] = useState("");

  const [heroesTeam, setHeroesTeam] = useState([]);

  const [skillsAmount, setSkillsAmount] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  });

  const [heightAvg, setHeightAvg] = useState([]);
  const [weightAvg, setWeightAvg] = useState([]);

  const [average, setAverage] = useState({
    height: [],
    weight: []
  })

  const [teamPlayers, setTeamPlayers] = useState([]);

  const [addHeroDisabled, setAddHeroDisabled] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const searchSuperHeroes = () => {
    searchText && fetch(
      `https://www.superheroapi.com/api/10160325470374276/search/${searchText}`
    )
      .then( response => response.json())
      .then( data => {
        dispatch(getHeroesByName(data))
      })
      .catch(error => console.log(error))
  }

  function handleChange(e) {
    const searchTerm = e.target.value;

    if (!isLogged) return history.push("/login");

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      //setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <div className="container">
          <div className="box">
            <div>
              <Team
                skillsAmount={skillsAmount}
                setSkillsAmount={setSkillsAmount}
                average={average}
                setAverage={setAverage}
                heroesTeam={heroesTeam}
                heightAvg={heightAvg}
                weightAvg={weightAvg}
                teamPlayers={teamPlayers}
                setTeamPlayers={setTeamPlayers}
                addHeroDisabled={addHeroDisabled}
                setAddHeroDisabled={setAddHeroDisabled}
              />
              <br />
              <br />
              <SearchBar searchText={searchText} handleChange={handleChange} />

              <SearchResults
                skillsAmount={skillsAmount}
                setSkillsAmount={setSkillsAmount}
                average={average}
                setAverage={setAverage}
                heroesTeam={heroesTeam}
                setHeroesTeam={setHeroesTeam}
                heightAvg={heightAvg}
                setHeightAvg={setHeightAvg}
                weightAvg={weightAvg}
                setWeightAvg={setWeightAvg}
                teamPlayers={teamPlayers}
                setTeamPlayers={setTeamPlayers}
                addHeroDisabled={addHeroDisabled}
                setAddHeroDisabled={setAddHeroDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
