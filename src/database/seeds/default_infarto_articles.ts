import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('infarto').insert([
    {
      title: 'O que é?',
      image: 'https://conteudo.imguol.com.br/c/entretenimento/fc/2018/10/22/dor-no-peito-infarto-1540237667765_v2_1920x1080.png',
      content: 'O infarto está entre as principais causas de morte no Brasil e no mundo e, por ano, mais de 100 mil brasileiros morrem em decorrência dele, o que equivale a dois estádios do Arena Fonte Nova, em Salvador, lotados em sua capacidade.Mais conhecido como ataque cardíaco, acontece quando o fluxo do sangue para o coração é interrompido e o coração não recebe sangue e oxigênio suficientes para se manter em atividade. Com isso, o músculo cardíaco morre ou é danificado. Pacientes diabéticos, com hipertensão arterial, obesos e que sofrem de estressem e depressão, assim como quem tem arritmia cardíaca, completam o grupo de risco da doença. Não são todas as pessoas que sofrem um infarto que chegam ao óbito. Para aumentar as chances de sobrevivência, é indispensável o atendimento médico com rapidez.',
      summary: 'O infarto está entre as principais causas ',
      category: 'infarto',
      authorId: 1,
    },
    {
      title: 'Sintomas do infarto',
      image: 'https://blog.partmedsaude.com.br/wp-content/uploads/2019/03/280158-ataque-cardiaco-entenda-como-ocorre-um-infarto-e-como-se-prevenir.jpg',
      content: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas para braços, ombros e pescoço. Na mulher, os sintomas podem ser diferentes: respiração curta, dor na mandíbula, náusea, dor de estômago e sensação de desconforto no peito. Esses sinais duram aproximadamente 20 minutos e podem ir e voltar. Pacientes diabéticos geralmente não apresentam sintomas, mas também podem ser acometidos pela doença. ',
      summary: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas',
      category: 'infarto',
      authorId: 2,
    },
    {
      title: 'Fatores de Risco',
      image: 'https://www.h9j.com.br/suasaude/PublishingImages/9sinaisinfarto.png',
      content: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser olhados isoladamente, mas como partes de uma doença muito maior e irreversível. Além disso, depois de um infarto agudo do miocárdio, o paciente pode desenvolver a arritmia cardíaca ou parada cardiorrespiratória. Saiba mais sobre elas: O tratamento vai depender da gravidade do infarto. Após o ocorrido, os médicos vão agir para diminuir a lesão e evitar que o doente apresente complicações. Em geral, o atendimento é feito no pronto-socorro e as primeiras ações da equipe médica são: ',
      summary: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser',
      category: 'infarto',
      authorId: 3,
    },
  ])
}