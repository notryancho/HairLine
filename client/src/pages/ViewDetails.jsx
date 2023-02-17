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

//   const handlePost = async (e) => {
//     e.preventDefault()
//     const newCommentPackage = {
//         name:newComment.name, 
//         comment:newComment.comment
//     }
//     const response = await axios.post(`http://localhost:3001/postComment`, newCommentPackage)
//     setDetails(response.data.hairType);
//   };

  
  const handleEdit = async (hairTypeId, commentId, updatedComment) => {
    const response = await axios.put(`http://localhost:3001/updateComment`, {
      hairTypeId,
      commentId,
      updatedComment,
    });
    setDetails(response.data.hairType);
  };
  
  const handleDelete = async (hairTypeId, commentId) => {
    const response = await axios.delete(`http://localhost:3001/deleteComment`, {
      data: {
        hairTypeId,
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
        <p>{details.description}</p>
        <Comment 
        //  handlePost={() => handlePost(details._id)} 
         />
        {details.comments && (
          <div className="comments-container">
            {details.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
                <div className="comment-buttons">
                  <button onClick={() => handleEdit(details._id, comment._id)}>Edit</button>
                  <button onClick={() => handleDelete(details._id, comment._id)}>Delete</button>
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
