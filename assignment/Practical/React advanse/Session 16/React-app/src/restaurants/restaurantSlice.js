import { createSlice } from "@reduxjs/toolkit";
import { fetchRestaurants, testThunk } from "./restaurantThunk";

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Test thunk

      .addCase(testThunk.fulfilled, (state, action) => {
        console.log(action.payload);
      })

      // Fetch Pending

      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Fetch Success

      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })

      // Fetch Failed

      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;