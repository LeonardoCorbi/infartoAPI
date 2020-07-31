import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('infarto').insert([
    {
      title: 'A principal causa do infarto',
      image: 'https://images.unsplash.com/photo-1596125100296-5f2d1be9e963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nunc imperdiet, efficitur nisl nec, aliquam velit. Quisque eget odio et lacus posuere interdum. Donec sollicitudin sem mauris, ut vestibulum ligula porttitor ut. Fusce et mollis tellus, in egestas sapien. In convallis arcu purus, vitae convallis urna varius eget. Nunc sed orci quis magna blandit condimentum. Vivamus sit amet justo pharetra nisl posuere tristique. Nullam blandit eu velit pellentesque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non neque elementum, sagittis ligula eget, gravida nibh. Etiam eleifend ac libero quis dictum. Curabitur orci odio, porta sit amet erat.',
      summary: 'Saiba os principais motivos da ocorrência do infarto',
    },
    {
      title: 'Sintomas do infarto',
      image: 'https://images.unsplash.com/photo-1596124579928-4bf06a8adfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nunc imperdiet, efficitur nisl nec, aliquam velit. Quisque eget odio et lacus posuere interdum. Donec sollicitudin sem mauris, ut vestibulum ligula porttitor ut. Fusce et mollis tellus, in egestas sapien. In convallis arcu purus, vitae convallis urna varius eget. Nunc sed orci quis magna blandit condimentum. Vivamus sit amet justo pharetra nisl posuere tristique. Nullam blandit eu velit pellentesque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non neque elementum, sagittis ligula eget, gravida nibh. Etiam eleifend ac libero quis dictum. Curabitur orci odio, porta sit amet erat. Conheça os sinais e sintomas do infarto.',
      summary: 'Conheça os sinais e sintomas do infarto.',
    },
    {
      title: 'Vrau vrau',
      image: 'https://images.unsplash.com/photo-1596124579928-4bf06a8adfef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nunc imperdiet, efficitur nisl nec, aliquam velit. Quisque eget odio et lacus posuere interdum. Donec sollicitudin sem mauris, ut vestibulum ligula porttitor ut. Fusce et mollis tellus, in egestas sapien. In convallis arcu purus, vitae convallis urna varius eget. Nunc sed orci quis magna blandit condimentum. Vivamus sit amet justo pharetra nisl posuere tristique. Nullam blandit eu velit pellentesque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non neque elementum, sagittis ligula eget, gravida nibh. Etiam eleifend ac libero quis dictum. Curabitur orci odio, porta sit amet erat. Conheça os sinais e sintomas do infarto.',
      summary: 'Chabalaba',
    },
  ])
}