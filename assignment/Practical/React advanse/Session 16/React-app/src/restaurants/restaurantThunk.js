import { createAsyncThunk } from "@reduxjs/toolkit";

// Simple async thunk (Task 1)

export const testThunk = createAsyncThunk(
  "restaurants/testThunk",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Redux Thunk is working!");
        resolve("Redux Thunk is working!");
      }, 1000);
    });
  }
);

// Fetch Restaurants (Task 2-5)

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/restaurants/restaurants"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const data = await response.json();

      if (!city) return data;

      const filtered = data.filter((restaurant) =>
        restaurant.city?.toLowerCase().includes(city.toLowerCase())
      );

      return filtered;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);