import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('infarto').insert([
    {
      title: 'A principal causa do infarto',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klikdokter.com%2Frubrik%2Fread%2F3594073%2Fhati-hati-perilaku-sedenter-bisa-memicu-penyakit-jantung&psig=AOvVaw2iJK2kvJf8K06g0p5xpLUQ&ust=1596679054751000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiYwa-jg-sCFQAAAAAdAAAAABAE',
      content: 'O infarto está entre as principais causas de morte no Brasil e no mundo e, por ano, mais de 100 mil brasileiros morrem em decorrência dele, o que equivale a dois estádios do Arena Fonte Nova, em Salvador, lotados em sua capacidade.Mais conhecido como ataque cardíaco, acontece quando o fluxo do sangue para o coração é interrompido e o coração não recebe sangue e oxigênio suficientes para se manter em atividade. Com isso, o músculo cardíaco morre ou é danificado. Pacientes diabéticos, com hipertensão arterial, obesos e que sofrem de estressem e depressão, assim como quem tem arritmia cardíaca, completam o grupo de risco da doença. Não são todas as pessoas que sofrem um infarto que chegam ao óbito. Para aumentar as chances de sobrevivência, é indispensável o atendimento médico com rapidez.',
      summary: 'Saiba os principais motivos da ocorrência do infarto ',
      category: 'infarto',
      authorId: 1,
    },
    {
      title: 'Sintomas do infarto',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sohati.com%2FArticle%2F%25D8%25A3%25D8%25AE%25D8%25A8%25D8%25A7%25D8%25B1-%25D8%25A7%25D9%2584%25D8%25B5%25D8%25AD%25D8%25A9-%25D9%2588%25D8%25A7%25D9%2584%25D8%25B7%25D8%25A8%2F%25D9%2584%25D8%25A7-%25D8%25AA%25D9%2587%25D9%2585%25D9%2584%25D9%2588%25D8%25A7-%25D9%2587%25D8%25B0%25D9%2587-%25D8%25A7%25D9%2584%25D8%25A3%25D8%25B9%25D8%25B1%25D8%25A7%25D8%25B6-%25D8%25A7%25D9%2584%25D8%25AA%25D9%258A-%25D8%25AA%25D8%25AF%25D9%2591%25D9%2584-%25D8%25B9%25D9%2584%25D9%2589-%25D8%25B6%25D8%25B9%25D9%2581-%25D8%25B9%25D8%25B6%25D9%2584%25D8%25A9-%25D8%25A7%25D9%2584%25D9%2582%25D9%2584%25D8%25A8-%25D8%25B9%25D9%2586%25D8%25AF%25D9%2583%25D9%2585&psig=AOvVaw1ZAYv_SB-FGa96x9qmX652&ust=1596679289134000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCotJ6kg-sCFQAAAAAdAAAAABAO',
      content: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas para braços, ombros e pescoço. Na mulher, os sintomas podem ser diferentes: respiração curta, dor na mandíbula, náusea, dor de estômago e sensação de desconforto no peito. Esses sinais duram aproximadamente 20 minutos e podem ir e voltar. Pacientes diabéticos geralmente não apresentam sintomas, mas também podem ser acometidos pela doença. ',
      summary: 'Conheça os sinais e sintomas do infarto.',
      category: 'infarto',
      authorId: 2,
    },
    {
      title: 'Como saber se estou tendo um infarto?',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BB%25D0%25B5%25D0%25BA%25D0%25B0%25D1%2580%25D1%2581%25D1%2582%25D0%25B2%25D0%25B0-%25D0%25BD%25D0%25B0-%25D0%25BB%25D0%25B0%25D0%25B4%25D0%25BE%25D0%25BD%25D0%25B8.html&psig=AOvVaw1HL-efdFW0t8xredYs_F3y&ust=1596679422944000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi9q96kg-sCFQAAAAAdAAAAABAJ',
      content: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser olhados isoladamente, mas como partes de uma doença muito maior e irreversível. Além disso, depois de um infarto agudo do miocárdio, o paciente pode desenvolver a arritmia cardíaca ou parada cardiorrespiratória. Saiba mais sobre elas: O tratamento vai depender da gravidade do infarto. Após o ocorrido, os médicos vão agir para diminuir a lesão e evitar que o doente apresente complicações. Em geral, o atendimento é feito no pronto-socorro e as primeiras ações da equipe médica são: ',
      summary: 'Entenda e reconheça os sintomas do infarto',
      category: 'infarto',
      authorId: 3,
    },
    {
      title: 'O que fazer quando estou tendo um infarto?',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.123rf.com%2Farchivio-fotografico%2Fvintage_medical.html&psig=AOvVaw2uk-836CFXbZpY3ajNiyqg&ust=1596679369410000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD21MSkg-sCFQAAAAAdAAAAABAU',
      content: 'Marque no relógio: no tempo que você levará para ler esta reportagem, pelo menos dois brasileiros sucumbirão ao infarto, a causa de morte número 1 em nosso país e em boa parte do mundo. Esse cenário catastrófico é motivado pelo descontrole de fatores que patrocinam o entupimento das coronárias, as artérias que irrigam o coração, como o excesso de peso, o tabagismo, a pressão alta e altas taxas decolesterol e glicemia. Porém, chama a atenção a persistente lentidão com que as pessoas em geral (e, em certa medida, até profissionais de saúde) suspeitam dos sintomas de algo crítico no peito.',
      summary: 'Marque no relógio: no tempo que você levará para ler esta reportagem, pelo menos dois brasileiros sucumbirão ao infarto, a causa de morte número 1 em nosso país',
      category: 'infarto',
      authorId: 4,
    },
  ])
}