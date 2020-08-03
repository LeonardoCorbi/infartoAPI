import knex from '../database/connection'
import { Request, Response } from 'express'

class AuthorSearchSingleController {
  async search(request: Request, response: Response) {
    const requiredId = Number(request.params.id)

    const author = await knex('author').select('*')

    const requiredAuthor = author.filter(author => author.id === requiredId)
  
    return response.json(requiredAuthor)
  }
}

export default AuthorSearchSingleController