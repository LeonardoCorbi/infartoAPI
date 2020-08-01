import knex from '../database/connection'
import { Request, Response } from 'express'

class ArticleSearchAllController {
  async searchInfarto(request: Request, response: Response) {
    const article = await knex('infarto').select('*')
  
    response.json(article)
  }

  async searchAlimentacao(request: Request, response: Response) {
    const article = await knex('alimentacao').select('*')
  
    response.json(article)
  }

  async searchExercicio(request: Request, response: Response) {
    const article = await knex('exercicio').select('*')
  
    response.json(article)
  }

  async searchTratamento(request: Request, response: Response) {
    const article = await knex('tratamento').select('*')
  
    response.json(article)
  }
}

export default ArticleSearchAllController