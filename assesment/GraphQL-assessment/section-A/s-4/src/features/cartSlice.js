import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Redux Thunk
export const applyPromoCode = createAsyncThunk(
  "cart/applyPromoCode",
  async (promoCode) => {
    // Simulating API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (promoCode === "SAVE20") {
      return {
        discount: 20,
      };
    }

    throw new Error("Invalid Promo Code");
  }
);

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    total: 0,
    discount: 0,
    loading: false,
    error: "",
  },

  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(applyPromoCode.pending, (state) => {
        state.loading = true;
      })

      .addCase(applyPromoCode.fulfilled, (state, action) => {
        state.loading = false;
        state.discount = action.payload.discount;
      })

      .addCase(applyPromoCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;