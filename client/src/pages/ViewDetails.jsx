import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Comment from "../components/Comment"
import axios from "axios"
import Nav from "../components/Nav";
import '../styles/ViewDetails.css';

const ViewDetails = () => {
  const [details, setDetails] = useState([])
  const [toggle, setToggle] = useState(false) 
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

  
  const handleEdit = async (e, id, newComment) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/updateCommentById/${id}`, newComment)
    getDetails()

  };
  
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/deleteCommentById/${id}`)
    getDetails()
  };

  const toggleEdit = () => {
    setToggle(!toggle)
  }
  
  
  return (
    details && (
      <div className="details-container">
        {window.location.pathname !== "/" && <Nav />}
        <h1>{details.name}</h1>
        <img src={details.imageUrl} alt="details" />
        <p>DESCRIPTION:</p>
        <p> {details.description}</p>
        <Comment handlePost={handlePost} edit={false}/>
        {details.comments && (
          <div className="comments-container">
            {details.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <p>Name: {comment.name}</p>
                <p>Comment: {comment.comment}</p>
                <div className="comment-buttons">
                  <button onClick={() => toggleEdit(comment._id)}>Edit</button>
                  <button onClick={() => handleDelete(comment._id)}>Delete</button>
                </div>
                {toggle && <Comment handleEdit={handleEdit} edit={true} id={comment._id}/>}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  )
}

export default ViewDetails
