import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Comment from "../components/Comment"
import axios from "axios"

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

  const handleEdit = async (id) => {}

  const handleDelete = async (id) => {}

  return (
    details && (
      <div>
        <h1>{details.name}</h1>
        <img src={details.imageUrl} alt="details" />
        <Comment />
        {details.comments.map((comment) => (
          <div>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
            <div>
              <button onClick={() => handleEdit(comment._id)}>Edit</button>
              <button onClick={() => handleDelete(comment._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    )
  )
}

export default ViewDetails