import express from 'express'
import knex from './database/connection'

import ArticlesCreateController from './controllers/ArticlesCreateController'
const articlesCreateController = new ArticlesCreateController()

import ArticleSearchAllController from './controllers/ArticleSearchAllController'
const articleSearchAllController = new ArticleSearchAllController()

import ArticleSearchSingleController from './controllers/ArticleSearchSingleController'
const articleSearchSingleController = new ArticleSearchSingleController()

const routes = express.Router()

// 01:16:51

routes.post('/infarto', articlesCreateController.createInfarto)
routes.post('/alimentacao', articlesCreateController.createAlimentacao)
routes.post('/exercicio', articlesCreateController.createExercicio)
routes.post('/tratamento', articlesCreateController.createTratamento)
routes.post('/author', )

routes.get('/infarto', articleSearchAllController.searchInfarto)
routes.get('/alimentacao', articleSearchAllController.searchAlimentacao)
routes.get('/exercicio', articleSearchAllController.searchExercicio)
routes.get('/tratamento', articleSearchAllController.searchTratamento)
routes.get('/author', )

routes.get('/infarto/:id', articleSearchSingleController.singleInfarto)
routes.get('/alimentacao/:id', articleSearchSingleController.singleAlimentacao)
routes.get('/exercicio/:id', articleSearchSingleController.singleExercicio)
routes.get('/tratamento/:id', articleSearchSingleController.singleTratamento)
routes.get('/author/:id', )

export default routes