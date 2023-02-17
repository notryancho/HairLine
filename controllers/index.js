const { Comments, HairTypes, HairProducts } = require("../models")

const getAllHairProducts = async (req, res) => {
  try {
    const hairProducts = await HairProducts.find()
    return res.status(200).json({ hairProducts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllHairTypes = async (req, res) => {
  try {
    const hairTypes = await HairTypes.find()
    return res.status(200).json({ hairTypes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getHairProductById = async (req, res) => {
  try {
    const { id } = req.params
    const hairProduct = await HairProducts.findById(id).populate("comments")
    if (hairProduct) {
      return res.status(200).json({ hairProduct })
    }
    return res
      .status(404)
      .send("hairProduct with the specified ID does not exist")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getHairTypeById = async (req, res) => {
  try {
    const { id } = req.params
    const hairType = await HairTypes.findById(id).populate("comments")
    if (hairType) {
      return res.status(200).json({ hairType })
    }
    return res
      .status(404)
      .send("hairType with the specified ID does not exist")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllComments = async (req, res) => {
    try {
        const { id } = req.params
        const comments = await Comments.find({ hairId: id })
        return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const getAllComment = async (req, res) => {
//     try {
//       const { id } = req.params
//       const comment = await all Comment.findById(id).populate("comments")
//       if (comment) {
//         return res.status(200).json({ comment })
//       }
//       return res
//         .status(404)
//         .send("hairType with the specified ID does not exist")
//     } catch (error) {
//       return res.status(500).send(error.message)
//     }
//   }

const postComment = async (req, res) => {
  try {
    const comment = await new Comments(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comments.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comments.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Comment deleted")
    }
    throw new Error("Comment not found")
  } catch (error) {
    return res.status(501).send(error.message)
  }
}

module.exports = {
  getAllHairProducts,
  getAllHairTypes,
  getHairProductById,
  getHairTypeById,
  getAllComments,
  postComment,
  updateComment,
  deleteComment,

}
