import { createSlice } from '@reduxjs/toolkit'

export const heroesByNameSlice = createSlice({
  name: 'heroesByName',
  initialState: {
    heroes: []
    /* id: "",
    name: "",
    powerstats: {},
    image: {} */
  },
  reducers: {
    getHeroesByName: (state, action) => {
        /* const { id, name, powerstats, image } = action.payload.results;
        state.id = id;
        state.name = name;
        state.powerstats = powerstats;
        state.image = image */
        state.heroes = action.payload
    }
  },
})

export const { getHeroesByName } = heroesByNameSlice.actions
export default heroesByNameSlice.reducer