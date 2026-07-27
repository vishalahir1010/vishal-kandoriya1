import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state > 0 ? state - 1 : 0;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

function PlaylistCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Playlist Counter</h2>

      <h3>Songs: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Add Song
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={count === 0}
      >
        Remove Song
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default PlaylistCounter;