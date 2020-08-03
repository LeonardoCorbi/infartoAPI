import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('author').insert([
    {
      name: 'Leonardo Corbi',
      role: 'Desenvolvedor full-stack',
      image: 'https://scontent.fcpq6-1.fna.fbcdn.net/v/t31.0-1/s200x200/25073066_1713381298712708_6958147949395695580_o.jpg?_nc_cat=105&_nc_sid=7206a8&_nc_ohc=9weSb9KVCx4AX-BJSAL&_nc_ht=scontent.fcpq6-1.fna&_nc_tp=7&oh=fbfdb0dd6750279973b19d48a1b75939&oe=5F4B4FBD',
      password: '1509'
    },
    {
      name: 'Gabrielly Vicente',
      role: 'UI/UX designer',
      image: 'https://gabriellyvicente.github.io/assets/images/gabrielly.jpg',
      password: '1509'
    },
    {
      name: 'Teste',
      role: 'Nao faz nada',
      image: 'https://gabriellyvicente.github.io/assets/images/gabrielly.jpg',
      password: '1234'
    }
  ])
}