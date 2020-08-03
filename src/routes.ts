import express from 'express'
import knex from './database/connection'

import ArticlesCreateController from './controllers/ArticlesCreateController'
const articlesCreateController = new ArticlesCreateController()

import ArticleSearchAllController from './controllers/ArticleSearchAllController'
const articleSearchAllController = new ArticleSearchAllController()

import ArticleSearchSingleController from './controllers/ArticleSearchSingleController'
const articleSearchSingleController = new ArticleSearchSingleController()

import AuthorCreatorController from './controllers/AuthorCreatorController'
const authorCreatorController = new AuthorCreatorController()

import AuthorSearchAllController from './controllers/AuthorSearchAllController'
const authorSearchAllController = new AuthorSearchAllController()

import AuthorSearchSingleController from './controllers/AuthorSearchSingleController'
const authorSearchSingleController = new AuthorSearchSingleController()

const routes = express.Router()

// 01:40:57

routes.post('/infarto', articlesCreateController.createInfarto)
routes.post('/alimentacao', articlesCreateController.createAlimentacao)
routes.post('/exercicio', articlesCreateController.createExercicio)
routes.post('/tratamento', articlesCreateController.createTratamento)
routes.post('/authorAdmLeoLeo', authorCreatorController.create)

routes.get('/infarto', articleSearchAllController.showInfarto)
routes.get('/alimentacao', articleSearchAllController.showAlimentacao)
routes.get('/exercicio', articleSearchAllController.showExercicio)
routes.get('/tratamento', articleSearchAllController.showTratamento)
routes.get('/authorAdmLeoLeo', authorSearchAllController.search)

routes.get('/infarto/:id', articleSearchSingleController.indexInfarto)
routes.get('/alimentacao/:id', articleSearchSingleController.indexAlimentacao)
routes.get('/exercicio/:id', articleSearchSingleController.indexExercicio)
routes.get('/tratamento/:id', articleSearchSingleController.indexTratamento)
routes.get('/authorAdmLeoLeo/:id', authorSearchSingleController.search)

export default routes