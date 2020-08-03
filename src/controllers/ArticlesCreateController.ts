import knex from '../database/connection'
import { Request, Response } from 'express'

class ArticlesCreateController {
  async createInfarto(request: Request, response: Response) {
    const {
      title,
      image,
      content,
      summary,
      authorId
    } = request.body

    const article = await knex('infarto').insert({
      title,
      image,
      content,
      summary,
      authorId
    })

    return response.json(article)
  }

  async createAlimentacao(request: Request, response: Response) {
    const {
      title,
      image,
      content,
      summary,
      authorId
    } = request.body

    const article = await knex('alimentacao').insert({
      title,
      image,
      content,
      summary,
      authorId
    })

    return response.json(article)
  }

  async createExercicio(request: Request, response: Response) {
    const {
      title,
      image,
      content,
      summary,
      authorId
    } = request.body

    const article = await knex('exercicio').insert({
      title,
      image,
      content,
      summary,
      authorId
    })

    return response.json(article)
  }

  async createTratamento(request: Request, response: Response) {
    const {
      title,
      image,
      content,
      summary,
      authorId
    } = request.body

    const article = await knex('tratamento').insert({
      title,
      image,
      content,
      summary,
      authorId
    })

    return response.json(article)
  }

}

export default ArticlesCreateController