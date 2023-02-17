import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Comment from "../components/Comment"
import axios from "axios"
import Nav from "../components/Nav";
import '../styles/ViewDetails.css';



const ViewDetails = () => {
  const [details, setDetails] = useState([])
  let { id } = useParams()

  const getDetails = async () => {
    const details = await axios.get(
      `http://localhost:3001/api/getHairTypeById/${id}`
    )
    setDetails(details.data.hairType)
  }

  useEffect(() => {
    getDetails()
  }, [])

  const handlePost = async (hairTypeId, comment) => {
    const response = await axios.post(`http://localhost:3001/postComment`, {
      hairTypeId,
      comment,
    });
    setDetails(response.data.hairType);
  };
  
  const handleEdit = async (commentId, updatedComment) => {
    const response = await axios.put(`http://localhost:3001/updateComment`, {
      commentId,
      updatedComment,
    });
    setDetails(response.data.hairType);
  };
  
  const handleDelete = async (commentId) => {
    const response = await axios.delete(`http://localhost:3001/deleteComment`, {
      data: {
        commentId,
      },
    });
    setDetails(response.data.hairType);
  };
  

  return (
    details && (
      <div className="details-container">
        {window.location.pathname !== "/" && <Nav />}
        <h1>{details.name}</h1>
        <img src={details.imageUrl} alt="details" />
        <Comment handlePost={() => handlePost(details._id)} />
        {details.comments && (
          <div className="comments-container">
            {details.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
                <div className="comment-buttons">
                  <button onClick={() => handleEdit(comment._id)}>Edit</button>
                  <button onClick={() => handleDelete(comment._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  )
}

export default ViewDetails