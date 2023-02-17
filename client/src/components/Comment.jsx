import "../styles/Comment.css";
import { useState } from "react";


const Comment = ({ handlePost, handleEdit, edit, id }) => {
  const initialState = {
    name: "",
    comment: "",
  };
  const [newComment, setNewComment] = useState(initialState);

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  return !edit ? (
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
          
        </div>
      </form>
    </div>
  ) : (
  
    <div>
      <h3>Edit Comment</h3>
      <form onSubmit={(e) => handleEdit(e, id, newComment)}>
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
          <button type="submit">SUBMIT EDIT CUTIE</button>
          
        </div>
      </form>
    </div>
  );
};

export default Comment;
