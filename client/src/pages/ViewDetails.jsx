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

  const handlePost = async (e, newComment) => {
    e.preventDefault()
   const comment = await axios.post(`http://localhost:3001/api/postComment`, newComment)
   
   await axios.put(`http://localhost:3001/api/updateHairTypeById/${details._id}`, {
    // comments: [details.]
    comments: [...details.comments, comment.data.comment._id],
   })
   getDetails()

  };

  
  const handleEdit = async (id) => {
    
  };
  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/deleteCommentById/${id}`)
    getDetails()
  };

  
  
  return (
    details && (
      <div className="details-container">
        {window.location.pathname !== "/" && <Nav />}
        <h1>{details.name}</h1>
        <img src={details.imageUrl} alt="details" />
        <p>Description: {details.description}</p>
        <Comment handlePost={handlePost} />
        {details.comments && (
          <div className="comments-container">
            {details.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>Name: {comment.name}</p>
                <p>Comment: {comment.comment}</p>
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
