export const initialState = [
  { id: 1, name: "Shape of You" },
  { id: 2, name: "Blinding Lights" }
];

export function playlistReducer(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload
        }
      ];

    case "REMOVE_SONG":
      return state.filter(song => song.id !== action.payload);

    case "EDIT_SONG":
      return state.map(song =>
        song.id === action.payload.id
          ? { ...song, name: action.payload.name }
          : song
      );

    default:
      return state;
  }
}