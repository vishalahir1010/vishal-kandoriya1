import { useEffect, useRef } from "react";

export default function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  );
}