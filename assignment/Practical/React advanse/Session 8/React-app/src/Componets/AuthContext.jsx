import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    // New reducer action
    case "UPDATE_DISPLAY_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload,
        },
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  // New context function
  const updateDisplayName = (name) => {
    dispatch({
      type: "UPDATE_DISPLAY_NAME",
      payload: name,
    });
  };

  return (
    <AuthContext.Provider
      value={{user: state.user,login, logout,updateDisplayName,}} >
      {children}
    </AuthContext.Provider>
  );
}