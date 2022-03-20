const express = require('express');
const { getArticles, getArticle } = require('./controllers/article.controller');
const { getCategory, getCategories, createCategory } = require('./controllers/category.controller');
const { createComment, getComment, getComments } = require('./controllers/comment.controller');
const { createUser, getUser } = require('./controllers/user.controller');

const app = express()

// article routes;
app.get('/', getArticles)
app.get('/:articleId', getArticle)

// user routes
app.post('/users', createUser)
app.get('/users/:userId', getUser)

// categories routes
app.post('/categories', createCategory)
app.get('/categories', getCategories)
app.get('/categories/:categorieId', getCategory)

// comments routes
app.post('/comments', createComment)
app.get('/comments', getComment)
app.get('/comments/:commentId', getComments)



const PORT = 5000

app.listen(PORT, () => console.log('app run on ' + PORT));