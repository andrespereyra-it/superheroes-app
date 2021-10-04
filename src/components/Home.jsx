import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import SearchBar from "./Search/SearchBar";
import SearchResults from "./Search/SearchResults";
import Team from "./Team";
import useUser from "./hooks/useUser";

import "../App.css";

function Home() {
  const { isLogged } = useUser();

  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  const [theArray, setTheArray] = useState([]);

  const [intelligenceSum, setIntelligenceSum] = useState([]);
  const [strengthSum, setStrengthSum] = useState([]);
  const [speedSum, setSpeedSum] = useState([]);
  const [durabilSum, setDurabilSum] = useState([]);
  const [powerSum, setPowerSum] = useState([]);
  const [combatSum, setCombatSum] = useState([]);

  const [heightAvg, setHeightAvg] = useState([]);
  const [weightAvg, setWeightAvg] = useState([]);

  const [teamPlayers, setTeamPlayers] = useState([]);

  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);

  const history = useHistory();

  const searchSuperHeroes = async () => {
    try {
      const res = await axios(
        `https://superheroapi.com/api/10160325470374276/search/${searchText}`
      );
      setSuperheroData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div className="App">
      <div className="App-content">
        <div className="container">
          <div className="box">
            <div>
              <Team
                theArray={theArray}
                intelligenceSum={intelligenceSum}
                strengthSum={strengthSum}
                speedSum={speedSum}
                durabilSum={durabilSum}
                powerSum={powerSum}
                combatSum={combatSum}
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
              />
              <br />
              <SearchBar searchText={searchText} handleChange={handleChange} />

              <SearchResults
                superheroData={superheroData}
                theArray={theArray}
                setTheArray={setTheArray}
                intelligenceSum={intelligenceSum}
                setIntelligenceSum={setIntelligenceSum}
                strengthSum={strengthSum}
                setStrengthSum={setStrengthSum}
                speedSum={speedSum}
                setSpeedSum={setSpeedSum}
                durabilSum={durabilSum}
                setDurabilSum={setDurabilSum}
                powerSum={powerSum}
                setPowerSum={setPowerSum}
                combatSum={combatSum}
                setCombatSum={setCombatSum}
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
