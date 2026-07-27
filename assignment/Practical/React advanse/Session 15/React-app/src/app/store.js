import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "../playlist/playlistSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});