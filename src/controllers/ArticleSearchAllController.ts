import knex from '../database/connection'
import { Request, Response } from 'express'

class ArticleSearchAllController {
  async showInfarto(request: Request, response: Response) {
    const article = await knex('infarto').select('*')
  
    return response.json(article)
  }

  async showAlimentacao(request: Request, response: Response) {
    const article = await knex('alimentacao').select('*')
  
    return response.json(article)
  }

  async showExercicio(request: Request, response: Response) {
    const article = await knex('exercicio').select('*')
  
    return response.json(article)
  }

  async showTratamento(request: Request, response: Response) {
    const article = await knex('tratamento').select('*')
  
    return response.json(article)
  }
}

export default ArticleSearchAllController