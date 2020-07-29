import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('role').notNullable()
    table.string('image').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('author')
}