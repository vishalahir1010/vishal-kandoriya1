import { useState } from "react";
import axios from "axios";

function AddComment() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/comments",
        { username, comment,});

      setResponseData(response.data);

      setUsername("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Comment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <br /><br />

        <textarea placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}/>

        <br/><br />

        <button type="submit">Submit</button>
      </form>

      {responseData && (
        <div>
          <h3>Response</h3>

          <p><strong>ID:</strong> {responseData.id}</p>
          <p><strong>Username:</strong> {responseData.username}</p>
          <p><strong>Comment:</strong> {responseData.comment}</p>
        </div>
      )}
    </div>
  );
}

export default AddComment;