import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('tratamento').insert([
    {
      title: 'Dúvidas sobre medicações',
      image: 'https://raw.githubusercontent.com/LeonardoCorbi/infartoAPI/master/src/images/tratamento_1.jpg?token=APDDTKXA2S3IKMHG37WUTVS7FXRVY',
      content: 'Muitos indivíduos têm padrões diários, regulares e distintos para comer, e comummente muitos tem entre três e quatro refeições diárias, com lanches consistindo como pequenos montantes de comida que consumida entre as refeições. O objectivo de uma alimentação saudável é, há muito tempo, uma importante preocupação de diferentes pessoas e culturas. Juntamente com outras práticas, o jejum, a dieta e o vegetarianismo são técnicas empregadas por pessoas (e encorajadas por sociedades) para aumentar a longevidade e a saúde. Muitas religiões promovem o vegetabilismo considerando errado o consumo de animais. Os nutricionistas concordam que em vez de se deleitar em três refeições diárias, é muito mais saudável e fácil para o metabolismo comer 5 pequenas refeições a cada dia (um maior número de refeições pequenas gera uma melhor digestão; facilita para o intestino o depósito das excretas; e visto que refeições maiores são mais resistentes ao trato digestivo e podem precisar de laxativos). O ato de comer também pode ser uma maneira de ganhar dinheiro, como na ingestão competitiva.[2] ra o coração é interrompido e o coração não recebe sangue e oxigênio suficientes para se manter em atividade. Com isso, o músculo cardíaco morre ou é danificado. Pacientes diabéticos, com hipertensão arterial, obesos e que sofrem de estressem e depressão, assim como quem tem arritmia cardíaca, completam o grupo de risco da doença. Não são todas as pessoas que sofrem um infarto que chegam ao óbito. Para aumentar as chances de sobrevivência, é indispensável o atendimento médico com rapidez.',
      summary: 'A alimentação ajuda a prevenir o infarto',
      category: 'tratamento',
      authorId: 1,
    },
    {
      title: 'Quando é indicado fazer uma cirurgia',
      image: 'https://raw.githubusercontent.com/LeonardoCorbi/infartoAPI/master/src/images/tratamento_2.jpg?token=APDDTKVA7LC2GVM7YJHYNMC7FXRXC',
      content: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas para braços, ombros e pescoço. Na mulher, os sintomas podem ser diferentes: respiração curta, dor na mandíbula, náusea, dor de estômago e sensação de desconforto no peito. Esses sinais duram aproximadamente 20 minutos e podem ir e voltar. Pacientes diabéticos geralmente não apresentam sintomas, mas também podem ser acometidos pela doença. ',
      summary: 'Fazer exercícios ajudam a prevenir o infarto?',
      category: 'tratamento',
      authorId: 2,
    },
    {
      title: 'Frequência de exames',
      image: 'https://raw.githubusercontent.com/LeonardoCorbi/infartoAPI/master/src/images/tratamento_3.jpg?token=APDDTKQ7URLA3WJNCCQDVTC7FXRYQ',
      content: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser olhados isoladamente, mas como partes de uma doença muito maior e irreversível. Além disso, depois de um infarto agudo do miocárdio, o paciente pode desenvolver a arritmia cardíaca ou parada cardiorrespiratória. Saiba mais sobre elas: O tratamento vai depender da gravidade do infarto. Após o ocorrido, os médicos vão agir para diminuir a lesão e evitar que o doente apresente complicações. Em geral, o atendimento é feito no pronto-socorro e as primeiras ações da equipe médica são: ',
      summary: 'Conheça os exercícios aliados para quem quer perder peso.',
      category: 'tratamento',
      authorId: 3,
    },
    {
      title: 'Quais exames eu devo fazer?',
      image: 'https://raw.githubusercontent.com/LeonardoCorbi/infartoAPI/master/src/images/tratamento_4.jpg?token=APDDTKTT3PU3X7NWELYYXVS7FXR2G',
      content: 'Marque no relógio: no tempo que você levará para ler esta reportagem, pelo menos dois brasileiros sucumbirão ao infarto, a causa de morte número 1 em nosso país e em boa parte do mundo. Esse cenário catastrófico é motivado pelo descontrole de fatores que patrocinam o entupimento das coronárias, as artérias que irrigam o coração, como o excesso de peso, o tabagismo, a pressão alta e altas taxas decolesterol e glicemia. Porém, chama a atenção a persistente lentidão com que as pessoas em geral (e, em certa medida, até profissionais de saúde) suspeitam dos sintomas de algo crítico no peito.',
      summary: 'Hábitos saudáveis para se recuperar.',
      category: 'tratamento',
      authorId: 4,
    },
  ])
}