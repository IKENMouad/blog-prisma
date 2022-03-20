const { prisma } = require("@prisma/client")

const articles = [
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
    { id: 3, title: "title 3" },
]

const getArticles = (req, res) => {
    const articles = await prisma.article.findMany({
        where: { published: true },
        include: { author: true },
    })
    return res.status(200).json(articles)
}


const createArticle = (req, res) => {
    const { published, title, content, image, author, authorId, categorieId } = req.body
    const article = articles.find(el => el.id === articleId)
    return res.status(200).json(article)
}


const getArticle = (req, res) => {
    let { articleId } = req.params
    articleId = parseInt(articleId)
    const article = articles.find(el => el.id === articleId)
    return res.status(200).json(article)
}


module.exports = {
    getArticle, getArticles, createArticle
}