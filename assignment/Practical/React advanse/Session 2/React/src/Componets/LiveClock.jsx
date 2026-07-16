import React from 'react'
import CurrentTime from '../hooks/UseCurrentTime'
import useCurrentTime from '../hooks/UseCurrentTime';

export default function LiveClock() {
    const currentTime = useCurrentTime()
  return (
    <div>
      <h2>Live Clock</h2>
      <h3>{currentTime.toLocaleTimeString()}</h3>
    </div>
  );
};
