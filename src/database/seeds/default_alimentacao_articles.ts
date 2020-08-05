import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('alimentacao').insert([
    {
      title: 'A importância da alimentação saudável',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sabah.com.tr%2Fsaglik%2F2018%2F04%2F04%2Fofis-calisanlari-bu-diyetle-haftada-4-kilo-veriyor%3Fpaging%3D2&psig=AOvVaw03nzHEXe1mtaWmLWfzbXTp&ust=1596679597691000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDrxLGlg-sCFQAAAAAdAAAAABAJ',
      content: 'Muitos indivíduos têm padrões diários, regulares e distintos para comer, e comummente muitos tem entre três e quatro refeições diárias, com lanches consistindo como pequenos montantes de comida que consumida entre as refeições. O objectivo de uma alimentação saudável é, há muito tempo, uma importante preocupação de diferentes pessoas e culturas. Juntamente com outras práticas, o jejum, a dieta e o vegetarianismo são técnicas empregadas por pessoas (e encorajadas por sociedades) para aumentar a longevidade e a saúde. Muitas religiões promovem o vegetabilismo considerando errado o consumo de animais. Os nutricionistas concordam que em vez de se deleitar em três refeições diárias, é muito mais saudável e fácil para o metabolismo comer 5 pequenas refeições a cada dia (um maior número de refeições pequenas gera uma melhor digestão; facilita para o intestino o depósito das excretas; e visto que refeições maiores são mais resistentes ao trato digestivo e podem precisar de laxativos). O ato de comer também pode ser uma maneira de ganhar dinheiro, como na ingestão competitiva.[2] ra o coração é interrompido e o coração não recebe sangue e oxigênio suficientes para se manter em atividade. Com isso, o músculo cardíaco morre ou é danificado. Pacientes diabéticos, com hipertensão arterial, obesos e que sofrem de estressem e depressão, assim como quem tem arritmia cardíaca, completam o grupo de risco da doença. Não são todas as pessoas que sofrem um infarto que chegam ao óbito. Para aumentar as chances de sobrevivência, é indispensável o atendimento médico com rapidez.',
      summary: 'A alimentação ajuda a prevenir o infarto',
      category: 'alimentacao',
      authorId: 1,
    },
    {
      title: 'Alimentação pós infarto',
      image: 'https://images.thestar.com/C4sfFA9I3IsLznMxVxoA3l5NhRw=/1086x688/smart/filters:cb(2700061000)/https://www.thespec.com/content/dam/thespec/life/2019/08/21/the-real-reason-you-should-stop-eating-lunch-at-your-desk/B88836881Z.1_20190821173837_000_G47MRKRL.3-0_Gallery.jpg',
      content: 'Dor no peito é o principal sintoma do infarto. O paciente também pode sentir dores estendidas para braços, ombros e pescoço. Na mulher, os sintomas podem ser diferentes: respiração curta, dor na mandíbula, náusea, dor de estômago e sensação de desconforto no peito. Esses sinais duram aproximadamente 20 minutos e podem ir e voltar. Pacientes diabéticos geralmente não apresentam sintomas, mas também podem ser acometidos pela doença. ',
      summary: 'Hábitos saudáveis para se recuperar.',
      category: 'alimentacao',
      authorId: 2,
    },
    {
      title: 'Alimentos para perder peso',
      image: 'https://bloximages.chicago2.vip.townnews.com/communityhealthmagazine.com/content/tncms/assets/v3/editorial/2/9f/29fbaedc-e716-11e6-bfba-3b5fc771fd70/588f7fbd1ee3c.image.jpg?resize=928%2C618',
      content: 'Hipertensão, colesterol elevado e diabetes são grandes fatores de risco para o infarto. Por isso, não devem ser olhados isoladamente, mas como partes de uma doença muito maior e irreversível. Além disso, depois de um infarto agudo do miocárdio, o paciente pode desenvolver a arritmia cardíaca ou parada cardiorrespiratória. Saiba mais sobre elas: O tratamento vai depender da gravidade do infarto. Após o ocorrido, os médicos vão agir para diminuir a lesão e evitar que o doente apresente complicações. Em geral, o atendimento é feito no pronto-socorro e as primeiras ações da equipe médica são: ',
      summary: 'Conheça os alimentos aliados para quem quer perder peso.',
      category: 'alimentacao',
      authorId: 3,
    },
    {
      title: 'Sucos que fazem bem ao coração',
      image: 'https://cdn05.zipify.com/lR5HIn_6VOQRgJqZ5ShBJ_8Bam8=/fit-in/1030x0/8d072e2d33204ebfaa6d225e7eb92ce4/adobestock_76901443.jpg',
      content: 'Marque no relógio: no tempo que você levará para ler esta reportagem, pelo menos dois brasileiros sucumbirão ao infarto, a causa de morte número 1 em nosso país e em boa parte do mundo. Esse cenário catastrófico é motivado pelo descontrole de fatores que patrocinam o entupimento das coronárias, as artérias que irrigam o coração, como o excesso de peso, o tabagismo, a pressão alta e altas taxas decolesterol e glicemia. Porém, chama a atenção a persistente lentidão com que as pessoas em geral (e, em certa medida, até profissionais de saúde) suspeitam dos sintomas de algo crítico no peito.',
      summary: 'Conheça os alimentos aliados para quem quer perder peso.',
      category: 'alimentacao',
      authorId: 4,
    },
  ])
}