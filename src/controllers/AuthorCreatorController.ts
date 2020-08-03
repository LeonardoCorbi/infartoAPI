import knex from '../database/connection'
import { Request, Response } from 'express'

class AuthorCreatorController {
  async create(request: Request, response: Response) {
    const {
      name,
      role,
      image,
      password
    } = request.body 
    
    const author = await knex('author').insert({
      name,
      role,
      image,
      password
    })

    return response.json(author)
  }
}

export default AuthorCreatorController