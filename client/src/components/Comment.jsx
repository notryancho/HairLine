import "../styles/Comment.css";
import { useState } from "react";


const Comment = ({ handlePost }) => {
  const initialState = {
    name: "",
    comment: "",
  };
  const [newComment, setNewComment] = useState(initialState);

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Post a Comment</h1>
      <form onSubmit={(e) => handlePost(e, newComment)}> 
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={newComment.name}
          type="text"
          id="name"
          required
          placeholder={"Name"}
          name="name"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          onChange={handleChange}
          value={newComment.comment}
          type="text"
          id="comment"
          rows="4"
          cols="50"
          required
          placeholder={"Comment"}
          name="comment"
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
