import '../styles/Comment.css';
import { useState } from "react";

const Comment = ({ handlePost }) => {
  const initialState = {
    name: "",
    comment: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h1>Post a Comment</h1>
      <form onSubmit={handlePost}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={formState.name}
          type="text"
          id="name"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          onChange={handleChange}
          value={formState.comment}
          type="text"
          id="comment"
          rows="4"
          cols="50"
        />
        <div className="button-container">
          <button type="submit">SUBMIT YA SEXY</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );  
};

export default Comment;
