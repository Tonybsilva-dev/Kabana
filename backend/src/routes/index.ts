import express from 'express'
const routes = express.Router()

// const ProductController = require('./controllers/ProductController')
const UsersController = require('../controllers/UsersController')

// //Products
// routes.get('/products', ProductController.index)
// routes.get('/products/:id', ProductController.show)
// routes.post('/products', ProductController.store)
// routes.put('/products/:id', ProductController.update)
// routes.delete('/products/:id', ProductController.destroy)

// Users
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users', UsersController.store)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.destroy)

module.exports = routes
