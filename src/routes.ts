import express from 'express'

const routes = express.Router()

const infarto = [
  {
    id : 1 ,
    titulo : 'A principal causa do infarto' ,
    imagem : 'img.com',
    conteudo : 'Saiba os principais motivos da ocorrência do infarto.',
    resumo : 'Saiba os principais motivos da ocorrência do infarto.',
  },
  {
    id : 2 ,
    titulo : 'Sintomas do infarto' ,
    imagem : 'img.com',
    conteudo : 'Conheça os sinais e sintomas do infarto.',
    resumo : 'Conheça os sinais e sintomas do infarto.',
  },
]
// 29:57

routes.post('/infarto',)
routes.post('/alimentacao',)
routes.post('/exercicio',)
routes.post('/tratamento',)

routes.get('/infarto',)
routes.get('/alimentacao',)
routes.get('/exercicio',)
routes.get('/tratamento',)

routes.get('/infarto/:id', (request, response) => {
  const requiredId = Number(request.params.id)

  const article = infarto.filter(item => item.id === requiredId)

  return response.json(article)
})
routes.get('/alimentacao/:id',)
routes.get('/exercicio/:id',)
routes.get('/tratamento/:id',)

export default routes