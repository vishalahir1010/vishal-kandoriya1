import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";


const initialCartState = {
  items: [],
  discountApplied: false,
};

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    }
    case "APPLY_DISCOUNT": {
      return {
        ...state,
        discountApplied: true,
      };
    }
    case "CLEAR_CART":
      return initialCartState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cart: cartReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const applyDiscount = () => async (dispatch) => {
  dispatch({ type: "APPLY_DISCOUNT" });
};

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const updateQuantity = (id, quantity) => ({
  type: "UPDATE_QUANTITY",
  payload: { id, quantity },
});
