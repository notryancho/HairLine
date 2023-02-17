import '../styles/Comment.css';
import { useState } from "react";
import axios from 'axios'


const Comment = ({ handlePost }) => {
const [newComment, setNewComment] = useState({name:'', comment:''}) 
//   const initialState = {
//     name: "",
//     comment: "",
//   };
//   const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newCommentPackage = {
        name:newComment.name, 
        comment:newComment.comment
    }
    const response = await axios.post(`http://localhost:3001/api/postComment`, newCommentPackage)
    console.log(response.data.comment);
  };
  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handlePost(formState.comment);
//     setFormState(initialState);
//   };
  
  return (
    <div>
      <h1>Post a Comment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={newComment.name}
          type="text"
          id="name"
          required
          placeholder={'Name'}
          name="name"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          onChange={handleChange}
          value={Comment.comment}
          type="text"
          id="comment"
          rows="4"
          cols="50"
          required
          placeholder={'Comment'}
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

