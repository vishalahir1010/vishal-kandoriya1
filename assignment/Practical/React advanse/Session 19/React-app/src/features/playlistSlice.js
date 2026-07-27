import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [
    {
      id: 1,
      title: "Shape of You",
    },
    {
      id: 2,
      title: "Perfect",
    },
  ],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },

    editSong: (state, action) => {
      const { id, title } = action.payload;

      const song = state.songs.find((song) => song.id === id);

      if (song) {
        song.title = title;
      }
    },

    deleteSong: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song.id !== action.payload
      );
    },
  },
});

export const { addSong, editSong, deleteSong } =
  playlistSlice.actions;

export default playlistSlice.reducer;