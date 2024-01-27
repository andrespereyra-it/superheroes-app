import { createSlice } from '@reduxjs/toolkit'

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState: {
    value: [],
  },
  reducers: {
    getHeroes: (state) => {
        fetch(`https://www.superheroapi.com/api/10160325470374276/search/`)
        .then(response => {
          //console.log("Full Response:", response);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          //console.log("API Response:", data)
          return data.results
        })
        .catch(error => console.error("Error:", error));
    }
  },
})

// Action creators are generated for each case reducer function
export const { getHeroes } = heroesSlice.actions

export default heroesSlice.reducer