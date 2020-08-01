import knex from '../database/connection'
import { Request, Response } from 'express'

class ArticleSearchSingleController {
  async singleInfarto(request: Request, response: Response) {
    const requiredId = Number(request.params.id)
  
    const article = await knex('infarto').select('*')
  
    const articleSelected = article.filter(item => item.id === requiredId)
  
    return response.json(articleSelected)
  }

  async singleAlimentacao(request: Request, response: Response) {
    const requiredId = Number(request.params.id)
  
    const article = await knex('alimentacao').select('*')
  
    const articleSelected = article.filter(item => item.id === requiredId)
  
    return response.json(articleSelected)
  }

  async singleExercicio(request: Request, response: Response) {
    const requiredId = Number(request.params.id)
  
    const article = await knex('exercicio').select('*')
  
    const articleSelected = article.filter(item => item.id === requiredId)
  
    return response.json(articleSelected)
  }

  async singleTratamento(request: Request, response: Response) {
    const requiredId = Number(request.params.id)
  
    const article = await knex('tratamento').select('*')
  
    const articleSelected = article.filter(item => item.id === requiredId)
  
    return response.json(articleSelected)
  }
}

export default ArticleSearchSingleController