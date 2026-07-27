// store.js
import { createStore } from "redux";

// Action Types
const ADD_SONG = "ADD_SONG";
const REMOVE_SONG = "REMOVE_SONG";

// Action Creators
export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});

export const removeSong = (index) => ({
  type: REMOVE_SONG,
  payload: index,
});

// Initial State
const initialState = {
  playlist: [],
};

// Reducer
const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };

    case REMOVE_SONG:
      return {
        ...state,
        playlist: state.playlist.filter(
          (_, index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

// Store
const store = createStore(playlistReducer);

export default store;   