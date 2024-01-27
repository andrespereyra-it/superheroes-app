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
import { getHeroes } from "../store/heroesSlice";

function Home() {

  const { isLogged } = useUser();

  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  const [heroesTeam, setHeroesTeam] = useState([]);

  const [skillsAmount, setSkillsAmount] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0
  })

  const [heightAvg, setHeightAvg] = useState([]);
  const [weightAvg, setWeightAvg] = useState([]);

  const [teamPlayers, setTeamPlayers] = useState([]);

  const [addHeroDisabled, setAddHeroDisabled] = useState("");

  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);

  const history = useHistory();

  /* const searchSuperHeroes = async () => {
    try {
      //const res = await axios(`http://superheroapi.com/api/10160325470374276/search/${searchText}`);
      const res = await axiosInstance.get(`/search/${searchText}`)
      setSuperheroData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }; */

  const heroes = useSelector((state) => state.heroes.value)
  const dispatch = useDispatch()

  /* useEffect(() => {
    dispatch(getHeroes())
    console.log("heroes", heroes)
  }, [dispatch, heroes]) */

  const searchSuperHeroes = () => {
  fetch(`https://www.superheroapi.com/api/10160325470374276/search/${searchText}`)
  .then(response => {
    //console.log("Full Response:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("API Response:", data)
    setSuperheroData(data.results)
  })
  .catch(error => console.error("Error:", error));
}

  function handleChange(e) {
    const searchTerm = e.target.value;

    if (!isLogged) return history.push("/login");

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  console.log("superheroData", superheroData)

  return (
    <div className="App">
      <div className="App-content">
        <div className="container">
          <div className="box">
            <div>
              <Team
              skillsAmount={skillsAmount}
               setSkillsAmount={setSkillsAmount}
                heroesTeam={heroesTeam}
                heightAvg={heightAvg}
                weightAvg={weightAvg}
                superheroData={superheroData}
                teamPlayers={teamPlayers}
                setTeamPlayers={setTeamPlayers}
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
                addHeroDisabled={addHeroDisabled} 
                setAddHeroDisabled={setAddHeroDisabled}
              />
              <br /><br />
              <SearchBar searchText={searchText} handleChange={handleChange} />

              <SearchResults
              skillsAmount={skillsAmount}
              setSkillsAmount={setSkillsAmount}
                superheroData={superheroData}
                heroesTeam={heroesTeam}
                setHeroesTeam={setHeroesTeam}
                heightAvg={heightAvg}
                setHeightAvg={setHeightAvg}
                weightAvg={weightAvg}
                setWeightAvg={setWeightAvg}
                teamPlayers={teamPlayers}
                setTeamPlayers={setTeamPlayers}
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
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
