import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('infarto').insert([
    {
      title: 'A principal causa do infarto',
      image: 'https://coracaoalerta.herokuapp.com/images/infarto_1.jpg',
      content: 'O infarto está entre as principais causas de morte no Brasil e no mundo e, por ano, mais de 100 mil brasileiros morrem em decorrência dele, o que equivale a dois estádios do Arena Fonte Nova, em Salvador, lotados em sua capacidade.Mais conhecido como ataque cardíaco, acontece quando o fluxo do sangue para o coração é interrompido e o coração não recebe sangue e oxigênio suficientes para se manter em atividade. Com isso, o músculo cardíaco morre ou é danificado. Pacientes diabéticos, com hipertensão arterial, obesos e que sofrem de estressem e depressão, assim como quem tem arritmia cardíaca, completam o grupo de risco da doença. Não são todas as pessoas que sofrem um infarto que chegam ao óbito. Para aumentar as chances de sobrevivência, é indispensável o atendimento médico com rapidez.',
      summary: 'Saiba os principais motivos da ocorrência do infarto ',
      category: 'infarto',
      authorId: 1,
    },
    {
      title: 'Sintomas do infarto',
      image: 'https://coracaoalerta.herokuapp.com/images/infarto_2.jpg',
      content: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas para braços, ombros e pescoço. Na mulher, os sintomas podem ser diferentes: respiração curta, dor na mandíbula, náusea, dor de estômago e sensação de desconforto no peito. Esses sinais duram aproximadamente 20 minutos e podem ir e voltar. Pacientes diabéticos geralmente não apresentam sintomas, mas também podem ser acometidos pela doença. ',
      summary: 'Conheça os sinais e sintomas do infarto.',
      category: 'infarto',
      authorId: 2,
    },
    {
      title: 'Como saber se estou tendo um infarto?',
      image: 'https://coracaoalerta.herokuapp.com/images/infarto_3.jpg',
      content: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser olhados isoladamente, mas como partes de uma doença muito maior e irreversível. Além disso, depois de um infarto agudo do miocárdio, o paciente pode desenvolver a arritmia cardíaca ou parada cardiorrespiratória. Saiba mais sobre elas: O tratamento vai depender da gravidade do infarto. Após o ocorrido, os médicos vão agir para diminuir a lesão e evitar que o doente apresente complicações. Em geral, o atendimento é feito no pronto-socorro e as primeiras ações da equipe médica são: ',
      summary: 'Entenda e reconheça os sintomas do infarto',
      category: 'infarto',
      authorId: 3,
    },
    {
      title: 'O que fazer quando estou tendo um infarto?',
      image: 'https://coracaoalerta.herokuapp.com/images/infarto_4.jpg',
      content: 'Marque no relógio: no tempo que você levará para ler esta reportagem, pelo menos dois brasileiros sucumbirão ao infarto, a causa de morte número 1 em nosso país e em boa parte do mundo. Esse cenário catastrófico é motivado pelo descontrole de fatores que patrocinam o entupimento das coronárias, as artérias que irrigam o coração, como o excesso de peso, o tabagismo, a pressão alta e altas taxas decolesterol e glicemia. Porém, chama a atenção a persistente lentidão com que as pessoas em geral (e, em certa medida, até profissionais de saúde) suspeitam dos sintomas de algo crítico no peito.',
      summary: 'Marque no relógio: no tempo que você ...',
      category: 'infarto',
      authorId: 4,
    },
  ])
}