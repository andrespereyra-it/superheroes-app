import { configureStore } from '@reduxjs/toolkit'
import heroesByNameReducer from './heroesByNameSlice'

export default configureStore({
  reducer: {
    heroesByName: heroesByNameReducer,
  },
})