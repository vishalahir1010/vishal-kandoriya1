import { useRef, useState } from "react";

export default function FeedbackForm() {
  const messageRef = useRef(null);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleFocusMessage = () => {
    messageRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, message });

    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>  
      <input type="text" placeholder="Your name"  value={name}
        onChange={(e) => setName(e.target.value)}/>
    <br />
    <br />
      <textarea ref={messageRef} placeholder="Your feedback"  value={message}
        onChange={(e) => setMessage(e.target.value)} />
    <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleFocusMessage}>
        Focus Message
      </button>
    </form>
  );
}