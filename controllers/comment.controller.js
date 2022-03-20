const createComment = (req, res) => {
    const { content, posterId, articleId } = req.body
    const comment = await prisma.comment.create({
        data: { content, posterId, articleId },
    });
    return res.status(201).json(comment)
}

const getComments = (req, res) => {
    const comment = await prisma.category.findMany()
    return res.status(200).json(comment)
}


const getComment = (req, res) => {
    const { commentId } = req.body
    const comment = await prisma.category.findOne({
        where: { id: commentId }
    })
    return res.status(200).json(comment)
}

module.exports = {
    createComment,
    getComment,
    getComments
}