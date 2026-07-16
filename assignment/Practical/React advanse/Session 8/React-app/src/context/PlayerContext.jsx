import { createContext, useMemo, useState } from "react";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => ({currentTrack,setCurrentTrack, isPlaying,setIsPlaying,
      theme, setTheme,}),
    [currentTrack, isPlaying, theme]);

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}