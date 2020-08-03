import knex from '../database/connection'
import { Request, Response } from 'express'

class AuthorSearchAllController {
  async search(request: Request, response: Response) {
    const author = await knex('author').select('*')
  
    return response.json(author)
  }
}

export default AuthorSearchAllController