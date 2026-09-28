import heroPortalImg from '../assets/images/bune_horizontal_sigil_cover_1790629957069.jpg';
import ritualExuImg from '../assets/images/ritual_exu_caminhos_1790550925693.jpg';
import ervasImg from '../assets/images/ervas_banhos_defumacao_1790550945705.jpg';
import planetariaImg from '../assets/images/magia_planetaria_jupiter_1790550955010.jpg';
import grimorioImg from '../assets/images/grimorio_prosperidade_cover_1790550937370.jpg';

export type RitualCategory =
  | 'PROSPERIDADE'
  | 'ABERTURA DE CAMINHOS'
  | 'PROTEÇÃO'
  | 'PODER PESSOAL'
  | 'AMOR'
  | 'OUTROS';

export interface RitualFAQ {
  question: string;
  answer: string;
}

export interface RitualItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: RitualCategory;
  traditionContext: string;
  symbolicObjective: string;
  dateDisplay: string;
  timeDisplay: string;
  isoDate: string; // Used by real-time countdown and automatic status calculation
  price: number;
  featured?: boolean;
  isPast?: boolean;
  registrationsNote?: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullExplanation: string[];
  historicalAndSymbolicContext: string[];
  whoIsItFor: string[];
  experienceObjectives: string[];
  howParticipationWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  whatParticipantNeedsToDo: string[];
  whatHappensAfterRegistration: string[];
  importantNotices: string[];
  faq: RitualFAQ[];
  checkoutUrl: string;
  recommendedProductSlug: string;
  orderBumpProductSlug: string;
}

export const RITUAL_CATEGORIES: RitualCategory[] = [
  'PROSPERIDADE',
  'ABERTURA DE CAMINHOS',
  'PROTEÇÃO',
  'PODER PESSOAL',
  'AMOR',
  'OUTROS',
];

export const RITUALS_DATA: RitualItem[] = [
  {
    id: 'ritual-10-10',
    slug: 'portal-da-prosperidade-10-10',
    name: 'PORTAL 10/10 — RITUAL COLETIVO DE PROSPERIDADE COM BUNE',
    subtitle:
      'Operação Cerimonial Salomônica com o Duque Bune (26º Espírito do Lemegeton) para Abertura de Caminhos Financeiros, Sabedoria e Prosperidade',
    category: 'PROSPERIDADE',
    traditionContext: 'Tradição Salomônica & Demonologia Histórica Europeia (Lemegeton / Ars Goetia — 26º Espírito: Duque Bune)',
    symbolicObjective: 'Sintonização simbólica e teúrgica com a egrégora do Duque Bune para destravar fluxos materiais, atrair oportunidades de negócios, ampliar o magnetismo intelectual e estruturar a prosperidade.',
    dateDisplay: '10/10/2026',
    timeDisplay: '10:10 da manhã (Horário de Brasília)',
    isoDate: '2026-10-10T10:10:00-03:00',
    price: 97,
    featured: true,
    registrationsNote: 'Caderno Litúrgico limitado à capacidade de inscrição nominal no altar de Cobre e Ouro',
    image: heroPortalImg,
    imageAlt: 'Altar salomônico iluminado por velas douradas e alaranjadas com o selo tradicional do Duque Bune traçado em lâmina de cobre e grimório antigo no Portal 10/10',
    shortDescription:
      'Uma operação cerimonial solene realizada na convergência numérica 10/10, consagrada ao Grande Duque Bune — inteligência clássica da Ars Goetia associada à riqueza, à sabedoria prática, à eloquência persuasiva e à abertura de portas materiais.',
    fullExplanation: [
      'O Portal 10/10 — Ritual Coletivo de Prosperidade com Bune é a nossa grande operação cerimonial do segundo semestre. Na tradição dos grimórios salomônicos europeus (especialmente no Lemegeton Clavicula Salomonis / Ars Goetia), Bune (ou Bime) é catalogado como o 26º Espírito: um Grande, Poderoso e Forte Duque que governa 30 legiões de espíritos e cuja virtude clássica consiste em conceder riqueza simbólica e material, tornar o homem sábio e eloquente, e oferecer respostas verdadeiras às demandas de estruturação de vida.',
      'Unindo a potência aritmética do Portal 10/10 (o número 10 da Roda da Fortuna e de Malkuth, a esfera da realização concreta) à regência venusiana e solar do Duque Bune, este rito coletivo trabalha a remoção de estagnações profissionais, o destravamento de negociações, a clareza para tomada de decisões financeiras e o magnetismo na comunicação.',
      'Longe de superstições ou promessas irreais, a cerimônia é executada com rigor litúrgico: o Selo Tradicional do Duque Bune consagrado em lâmina de cobre e ouro, incensos clássicos de sândalo, olíbano e casca de laranja doce, velas de cera pura alaranjadas, verdes e douradas, e cálices de vinho tinto suave e mel. Cada inscrito tem seu nome completo e três pedidos objetivos de prosperidade integrados ao Pergaminho Central do Altar.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto Histórico: Este ritual fundamenta-se estritamente na Tradição Salomônica Europeia e no estudo histórico do Lemegeton (Ars Goetia) e da Pseudomonarchia Daemonum de Johann Weyer (século XVI). Nesses tratados clássicos, o Duque Bune é reverenciado por sua natureza nobre, pacífica e altamente favorável aos que buscam erudição, boa palavra nos negócios e prosperidade estruturada.',
      'Separação Rigorosa de Tradições: Em fidelidade absoluta aos princípios da Aurea Arcana, esclarecemos que esta operação pertence exclusivamente ao Ocultismo Cerimonial Ocidental e à Goetia Salomônica. Não misturamos, sob nenhuma hipótese, o culto tradicional de Exu, Umbanda ou Quimbanda com daemons europeus. Cada tradição possui sua própria cosmologia, liturgia e fundamento.',
      'O Portal 10/10 (décimo dia do décimo mês) atua como uma chave temporal de máxima convergência simbólica para assentar no plano material (10 / Malkuth) os projetos, vendas, contratos e estudos que precisam de fluxo, reconhecimento e colheita.',
    ],
    whoIsItFor: [
      'Empreendedores, comerciantes, terapeutas e profissionais liberais que desejam destravar o fluxo de clientes, vendas e negociações por meio do magnetismo e da eloquência associados ao Duque Bune.',
      'Pessoas que sentem sua vida material estagnada e buscam uma operação cerimonial séria, segura e fundamentada na tradição salomônica para abertura de caminhos.',
      'Estudantes de ocultismo, demonologia histórica e magia cerimonial que desejam se conectar à corrente do Duque Bune em uma data de alta potência sem precisar montar toda a estrutura de metais e círculo em casa.',
      'Iniciantes que buscam seu primeiro contato respeitoso, ético e guiado com a egrégora de prosperidade do Duque Bune.',
    ],
    experienceObjectives: [
      'Integrar seu nome e seus três pedidos de prosperidade, carreira ou negócios ao Altar Central do Duque Bune no Portal 10/10.',
      'Trabalhar o arquétipo da eloquência, do poder de persuasão e da sabedoria estratégica para fechar acordos e enxergar oportunidades.',
      'Realizar a sintonização pessoal em casa (opcional e simples) utilizando o Enn tradicional de Bune ("Wehl Melan Avage Bune Tasa") e o roteiro enviado no caderno litúrgico.',
      'Alinhar a intenção espiritual a um plano de ação material concreto para os 30 dias subsequentes ao portal.',
    ],
    howParticipationWorks: [
      {
        step: '01. Inscrição e Registro no Pergaminho de Cobre',
        title: 'Envio do Nome e Pedidos para o Altar do Duque Bune',
        description:
          'Assim que sua inscrição de R$ 97,00 é confirmada, você acessa o formulário litúrgico para registrar seu nome completo, data de nascimento e até 3 metas materiais ou profissionais específicas.',
      },
      {
        step: '02. Preparação Pessoal (09 e 10 de Outubro)',
        title: 'Recebimento do Caderno Litúrgico do Duque Bune (PDF)',
        description:
          'Você recebe por e-mail e WhatsApp o guia exclusivo do participante contendo a história do Duque Bune, o Selo tradicional pronto para impressão, a pronúncia do Enn de conexão e a receita do banho preparatório de louro, canela e casca de laranja.',
      },
      {
        step: '03. A Cerimônia do Portal 10/10 (às 10:10 da manhã)',
        title: 'Consagração Coletiva no Templo Central',
        description:
          'Exatamente às 10:10 da manhã do dia 10/10/2026 (na convergência quádrupla 10/10 às 10:10), nossos oficiantes realizam a conjuração e as ofertas tradicionais ao Duque Bune (mel, vinho tinto, laranjas doces, cobre e incenso de sândalo). Você pode acompanhar em meditação em casa por 15 minutos ou seguir sua rotina normalmente.',
      },
      {
        step: '04. Ata Litúrgica e Pós-Ritual',
        title: 'Registro Fotográfico e Diretrizes de 21 Dias',
        description:
          'Em até 24 horas após o encerramento do rito, todos os participantes recebem a Ata Litúrgica com fotos do altar consagrado ao Duque Bune e as orientações práticas para manter a sintonia durante o ciclo lunar.',
      },
    ],
    whatParticipantNeedsToDo: [
      'Preencher o formulário pós-inscrição com seu nome completo, data de nascimento e os pedidos de prosperidade que serão consagrados no altar.',
      'Se desejar realizar a conexão simultânea em casa (opcional), separar 1 vela dourada, laranja ou verde, 1 taça com água ou suco de laranja/vinho suave e uma colher de mel.',
      'Caso esteja trabalhando, em trânsito ou ocupado(a) às 10:10 da manhã do dia 10/10, fique tranquilo(a): seu nome e seus pedidos estarão fisicamente assentados junto ao Sigilo do Duque Bune no templo central.',
    ],
    whatHappensAfterRegistration: [
      'Acesso imediato ao Formulário do Livro de Altar do Portal 10/10 com o Duque Bune.',
      'Download imediato do PDF exclusivo: "Caderno Litúrgico do Portal 10/10 — Sintonização com o Duque Bune".',
      'Acesso ao grupo silencioso de avisos no WhatsApp para acompanhamento das instruções do ritual.',
      'Recebimento da Ata Litúrgica com o registro fotográfico da cerimônia no dia 11/10.',
    ],
    importantNotices: [
      'Aviso Ético e Legal: Práticas espirituais, simbólicas e cerimoniais pertencem ao campo da fé, da cultura esotérica e do desenvolvimento pessoal; não prometemos enriquecimento garantido, ganhos em jogos de azar ou retorno financeiro automático.',
      'Rigor Tradicional: Este ritual segue a tradição salomônica europeia (Lemegeton / Ars Goetia) de forma harmônica, respeitosa e estruturada, sem qualquer vínculo ou mistura com ritos afro-brasileiros.',
      'As inscrições no valor de R$ 97,00 encerram-se automaticamente quando o cronômetro do Portal 10/10 zerar ou ao atingir o limite de nomes no altar.',
    ],
    faq: [
      {
        question: 'É seguro participar de um ritual coletivo com o Duque Bune?',
        answer:
          'Sim, totalmente seguro. Na tradição salomônica, o Duque Bune é reconhecido como uma das inteligências mais nobres, cordiais e receptivas aos buscadores que se aproximam com respeito, clareza de propósito e dignidade. Todo o protocolo cerimonial de proteção, harmonia e licenciamento é conduzido por oficiantes experientes.',
      },
      {
        question: 'Preciso fazer algum pacto ou obrigação futura ao participar?',
        answer:
          'Não. Trata-se de uma operação cerimonial coletiva pontual de sintonização e petição no Portal 10/10. As ofertas tradicionais (velas, incensos nobres, mel, frutas cítricas e vinho) já estão integralmente incluídas no altar do templo, sem gerar dívidas espirituais ou obrigações vitalícias.',
      },
      {
        question: 'E se eu estiver trabalhando ou não puder estar em casa às 10:10 da manhã do dia 10/10/2026?',
        answer:
          'Sua participação é 100% válida através do testemunho nominal (seu nome completo, data de nascimento e intenções escritas e consagradas sobre o altar de cobre do Duque Bune). A sintonização doméstica é um complemento opcional que pode ser feito às 10:10 da manhã ou em qualquer horário tranquilo do dia 10/10.',
      },
      {
        question: 'Qual é o valor da inscrição e o que está incluso?',
        answer:
          'O valor único de participação individual é de R$ 97,00. Inclui a inscrição do seu nome e intenções no altar central, todos os elementos materiais da oferta coletiva no templo, o Caderno Litúrgico em PDF com o Selo e Enn do Duque Bune, e o envio da Ata Fotográfica pós-ritual.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/portal-10-10-bune',
    recommendedProductSlug: 'daemons-simbologia-historia-e-interpretacoes',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  {
    id: 'ritual-exu-caminhos-novembro',
    slug: 'abertura-de-caminhos-tradicao-exu',
    name: 'FIRMEZA DAS SETE ENCRUZILHADAS — ABERTURA DE CAMINHOS',
    subtitle: 'Rito Tradicional de Vitalidade, Movimento e Desobstrução de Jornadas',
    category: 'ABERTURA DE CAMINHOS',
    traditionContext: 'Tradição Afro-Brasileira — Fundamento de Exu (Senhor do Movimento e da Comunicação)',
    symbolicObjective: 'Movimentação de estagnações, proteção nas escolhas profissionais e abertura de novas oportunidades.',
    dateDisplay: '02/11/2026',
    timeDisplay: '21h30 (Horário de Brasília)',
    isoDate: '2026-11-02T21:30:00-03:00',
    price: 167,
    registrationsNote: 'Vagas limitadas aos elementos individuais assentados na mesa',
    image: ritualExuImg,
    imageAlt: 'Sete chaves antigas de bronze, moedas douradas e vaso de barro com defumação suave em pedra escura',
    shortDescription:
      'Cerimônia fundamentada no conhecimento tradicional sobre Exu enquanto princípio cósmico de dinamismo, comunicação, guarda e abertura das estradas materiais e espirituais.',
    fullExplanation: [
      'Nas tradições de matriz afro-brasileira, nada se move sem Exu. Ele é o senhor das encruzilhadas, o guardião da palavra, do comércio, da diplomacia e do movimento vital que transforma potencialidade em acontecimento.',
      'Esta cerimônia coletiva honra a sabedoria tradicional de Exu com profundo respeito litúrgico, sem folclorizações e sem misturá-lo à demonologia europeia — erro histórico cometido por séculos de desconhecimento colonial.',
      'O trabalho visa simbolicamente destravar portas fechadas, fortalecer a presença pessoal nas negociações do mundo e pedir guarda contra ciladas, inveja e caminhos obstruídos.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto: Ritual conduzido dentro dos fundamentos tradicionais afro-brasileiros dedicados a Exu, respeitando suas ervas, pontos riscados em pemba consagrada e elementos vitais.',
      'Distinção Fundamental: Exu não é um "daemon" salomônico nem possui qualquer relação com o conceito judaico-cristão de mal. Exu é força dinâmica de comunicação, vitalidade, ordem e reciprocidade.',
    ],
    whoIsItFor: [
      'Quem sente que seus esforços batem na trave e precisa renovar o fluxo de movimento e comunicação em sua vida.',
      'Comerciantes, negociadores, autônomos e trabalhadores que lidam diariamente com o público e com tomadas de decisão nas encruzilhadas da vida.',
      'Admiradores e estudiosos das tradições afro-brasileiras que buscam uma firmeza séria, limpa e fundamentada.',
    ],
    experienceObjectives: [
      'Pedir desobstrução simbólica para projetos, vendas, contratações e parcerias.',
      'Fortalecer a vitalidade cotidiana e o discernimento diante de escolhas difíceis.',
      'Estabelecer guarda espiritual para os caminhos profissionais.',
    ],
    howParticipationWorks: [
      {
        step: '01. Registro do Pedido de Abertura',
        title: 'Inscrição no Caderno das Sete Chaves',
        description: 'Após a inscrição, você envia seu nome completo, data de nascimento e os caminhos específicos que deseja movimentar.',
      },
      {
        step: '02. Banho de Descarrego e Movimento',
        title: 'Preparação Individual Guiada',
        description: 'Você recebe as instruções exatas do banho de ervas mornas para realizar antes do horário da firmeza.',
      },
      {
        step: '03. A Firmeza Coletiva (02/11/2026)',
        title: 'Rito com Pemba, Velas e Elementos Tradicionais',
        description: 'Condução solene do ponto riscado coletivo e entrega das firmezas em intenção aos inscritos.',
      },
    ],
    whatParticipantNeedsToDo: [
      'Enviar nome completo e data de nascimento após a inscrição.',
      'Manter postura de respeito, clareza de propósito e ação ética nos dias seguintes ao rito.',
    ],
    whatHappensAfterRegistration: [
      'Acesso imediato ao Guia de Preparação para a Firmeza das Sete Encruzilhadas.',
      'Confirmação por e-mail e envio da Ata de Realização em até 24h após o rito.',
    ],
    importantNotices: [
      'Práticas espirituais e ritualísticas pertencem ao campo da experiência pessoal e religiosa/espiritual; não existe garantia de resultados materiais ou financeiros específicos.',
      'Não realizamos trabalhos para prejudicar terceiros.',
    ],
    faq: [
      {
        question: 'Preciso ser iniciado na Umbanda ou Quimbanda para participar?',
        answer: 'Não. A firmeza coletiva é aberta a qualquer pessoa respeitosa que deseje honrar a força de abertura de caminhos de Exu.',
      },
      {
        question: 'Este ritual exige que eu despache materiais na rua?',
        answer: 'Não. Toda a parte material e litúrgica é realizada integralmente em nosso espaço sagrado. Em casa, você fará apenas um banho de ervas simples e acenderá uma vela se desejar.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/firmeza-sete-encruzilhadas',
    recommendedProductSlug: 'magias-de-prosperidade-com-exu',
    orderBumpProductSlug: 'guia-de-banhos-ervas-e-defumacoes',
  },
  {
    id: 'ritual-escudo-protecao',
    slug: 'escudo-hermetico-de-protecao-e-corte',
    name: 'ESCUDO DE OBSIDIANA — PROTEÇÃO E CORTE SIMBÓLICO',
    subtitle: 'Rito de Banimento de Miasmas, Blindagem Áurica e Purificação com Ervas Amargas e Resinas',
    category: 'PROTEÇÃO',
    traditionContext: 'Magia Natural, Fitoterapia Ritualística & Hermetismo Prático',
    symbolicObjective: 'Corte de desgastes energéticos, inveja, fadiga psíquica e fortalecimento das fronteiras pessoais.',
    dateDisplay: '24/10/2026',
    timeDisplay: '22h00 (Horário de Brasília)',
    isoDate: '2026-10-24T22:00:00-03:00',
    price: 147,
    registrationsNote: 'Realizado em noite de Lua Minguante propícia para banimentos',
    image: ervasImg,
    imageAlt: 'Arranjo ritualístico de ervas secas, alecrim, louro, mirra e turíbulo de bronze com fumaça dourada',
    shortDescription:
      'Operação ritualística de limpeza profunda e blindagem espiritual conduzida na força da Lua Minguante, utilizando defumações clássicas, sal consagrado e geometria de contenção.',
    fullExplanation: [
      'Antes de semear a prosperidade em terreno fértil, a tradição ensina que é indispensável limpar o solo das ervas daninhas, do cansaço acumulado e das projeções alheias de escassez e hostilidade.',
      'O Escudo de Obsidiana é um rito coletivo focado em purificação e proteção espiritual. Combinamos a ciência ancestral das defumações resinosas (mirra, benjoim, arruda e alecrim) com fórmulas clássicas de banimento hermético.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto: Fundamentado na Magia Natural Mediterrânea e no Hermetismo Prático, utilizando o ciclo lunar minguante para dissolução de cargas densas e selamento do campo pessoal.',
    ],
    whoIsItFor: [
      'Pessoas que se sentem constantemente drenadas após interações sociais ou ambientes de trabalho competitivos.',
      'Quem deseja encerrar um ciclo de perdas simbólicas, desânimo ou sensação de peso no ambiente doméstico.',
    ],
    experienceObjectives: [
      'Promover uma higiene espiritual e simbólica profunda.',
      'Aprender a proteger o próprio lar utilizando defumações e selos tradicionais.',
    ],
    howParticipationWorks: [
      {
        step: '01. Inscrição e Nomeação',
        title: 'Inclusão na Urna de Purificação',
        description: 'Seu nome e endereço residencial (opcional, para irradiação ao lar) são incluídos na operação de limpeza.',
      },
      {
        step: '02. Roteiro Doméstico de Defumação',
        title: 'Guia Prático de Limpeza do Lar',
        description: 'Você recebe o protocolo exato para defumar sua casa ou quarto no final de semana do ritual.',
      },
    ],
    whatParticipantNeedsToDo: [
      'Preencher os dados de inscrição e seguir o banho de descarrego indicado no manual.',
    ],
    whatHappensAfterRegistration: [
      'Recebimento imediato do manual "Protocolo de Blindagem Doméstica" em PDF.',
    ],
    importantNotices: [
      'Práticas espirituais e ritualísticas pertencem ao campo da experiência pessoal e religiosa/espiritual; não substituem acompanhamento médico ou psicológico e não garantem resultados materiais específicos.',
    ],
    faq: [
      {
        question: 'Posso incluir o endereço da minha empresa ou comércio?',
        answer: 'Sim. No formulário pós-inscrição você pode indicar seu endereço residencial ou comercial para direcionamento simbólico da limpeza.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/escudo-de-obsidiana',
    recommendedProductSlug: 'guia-de-banhos-ervas-e-defumacoes',
    orderBumpProductSlug: 'magias-para-abertura-de-caminhos',
  },
  {
    id: 'ritual-soberania-solar',
    slug: 'coroa-solar-poder-pessoal-e-magnetismo',
    name: 'COROA SOLAR — PODER PESSOAL, VOZ E SOBERANIA',
    subtitle: 'Consagração Hermética sob a Regência do Sol para Autoridade, Autoconfiança e Clareza de Comando',
    category: 'PODER PESSOAL',
    traditionContext: 'Magia Planetária — Esfera Solar (Tiphereth) & Simbologia Alquímica do Ouro',
    symbolicObjective: 'Fortalecimento do magnetismo pessoal, presença, liderança ética e superação da autossabotagem.',
    dateDisplay: '15/11/2026',
    timeDisplay: '12h00 (Hora Solar — Horário de Brasília)',
    isoDate: '2026-11-15T12:00:00-03:00',
    price: 187,
    registrationsNote: 'Rito diurno realizado no ápice solar de domingo',
    image: planetariaImg,
    imageAlt: 'Esfera armilar de latão antigo e mapa celeste com selos solares e jupterianos folheados a ouro',
    shortDescription:
      'Operação teúrgica realizada em domingo (Dia do Sol) ao meio-dia, voltada ao despertar do centro solar interno, da dignidade pessoal e do brilho intelectual e profissional.',
    fullExplanation: [
      'Na astrologia tradicional e na magia planetária, o Sol rege a vitalidade central, a nobreza de caráter, o reconhecimento justo e a capacidade de governar a própria vida com firmeza e lucidez.',
      'Este rito coletivo é realizado ao meio-dia de domingo, utilizando incensos solares de olíbano puro, açafrão, louro e folhas de ouro simbólicas.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto: Magia Planetária Clássica e Alquimia Espiritual Ocidental (Ouro Filosófico / Sol Invictus).',
    ],
    whoIsItFor: [
      'Profissionais, líderes, palestrantes, artistas e estudiosos que desejam vencer a timidez, a hesitação e o medo de ocupar seu espaço.',
    ],
    experienceObjectives: [
      'Trabalhar simbolicamente a autoconfiança, a clareza de expressão e o posicionamento pessoal.',
    ],
    howParticipationWorks: [
      {
        step: '01. Inscrição no Pantáculo Solar',
        title: 'Registro Nominal',
        description: 'Seu nome é inscrito ao redor do Pantáculo Solar consagrado no templo.',
      },
      {
        step: '02. Prática Solar de Domingo',
        title: 'Meditação Teúrgica e Banho Dourado',
        description: 'Receba o guia com a oração órfica ao Sol e o banho de ervas solares.',
      },
    ],
    whatParticipantNeedsToDo: [
      'Registrar o nome completo e realizar a leitura da invocação solar no domingo do rito.',
    ],
    whatHappensAfterRegistration: [
      'Envio imediato do dossiê "Os Sete Selos Solares do Poder Pessoal" em PDF.',
    ],
    importantNotices: [
      'Práticas espirituais e ritualísticas pertencem ao campo da experiência pessoal e simbólica; não há garantia de resultados materiais ou financeiros específicos.',
    ],
    faq: [
      {
        question: 'Por que este ritual ocorre às 12h00 e não à noite?',
        answer: 'Porque na magia planetária tradicional as operações solares devem ocorrer no dia do Sol (domingo) e no momento de culminação diurna da luz solar.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/coroa-solar',
    recommendedProductSlug: 'magia-planetaria-e-prosperidade',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  {
    id: 'ritual-venus-harmonia',
    slug: 'jardim-de-venus-magnetismo-e-harmonia-afetiva',
    name: 'CÁLICE DE VÊNUS — MAGNETISMO, BELEZA E HARMONIA AFETIVA',
    subtitle: 'Rito Planetário Venusiano de Atração Consciente, Autoestima e Concórdia nas Relações',
    category: 'AMOR',
    traditionContext: 'Magia Planetária Clássica — Esfera de Vênus (Netzach)',
    symbolicObjective: 'Cultivo do magnetismo afetivo, reconciliação consigo mesmo e atração de relações recíprocas e saudáveis.',
    dateDisplay: '27/11/2026',
    timeDisplay: '20h00 (Sexta-feira de Vênus)',
    isoDate: '2026-11-27T20:00:00-03:00',
    price: 167,
    registrationsNote: 'Não realizamos amarrações; rito estritamente ético de magnetismo e harmonia',
    image: grimorioImg,
    imageAlt: 'Grimório de luxo com detalhes em vinho profundo e ouro sobre pedestal de mármore escuro',
    shortDescription:
      'Celebrado na sexta-feira consagrada a Vênus, este rito trabalha o magnetismo natural, a doçura estratégica, a harmonia conjugal e a abertura para novos encontros dignos.',
    fullExplanation: [
      'A Aurea Arcana rejeita qualquer prática de coerção psíquica ou "amarração". Na verdadeira tradição esotérica, a força de Vênus opera pelo encanto natural, pela beleza interior, pela diplomacia e pela harmonia que atrai por afinidade genuína.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto: Magia Planetária Renascentista (Hinos Órficos a Afrodite/Vênus) combinada à perfumaria botânica tradicional (rosa damascena, verbena, mirra e hibisco).',
    ],
    whoIsItFor: [
      'Quem busca elevar a autoestima, o poder de sedução consciente e a harmonia em relacionamentos existentes ou novos.',
    ],
    experienceObjectives: [
      'Despertar o magnetismo venusiano e dissolver bloqueios emocionais de rejeição.',
    ],
    howParticipationWorks: [
      {
        step: '01. Registro no Altar de Cobre',
        title: 'Inscrição Nominal',
        description: 'Na tradição planetária, o cobre é o metal sagrado de Vênus. Seu nome é consagrado sobre a lâmina de cobre do templo.',
      },
    ],
    whatParticipantNeedsToDo: [
      'Inscrever seu nome e realizar o banho perfumado indicado no caderno do participante.',
    ],
    whatHappensAfterRegistration: [
      'Acesso imediato ao manual do participante em PDF.',
    ],
    importantNotices: [
      'Não realizamos amarrações amorosas ou rituais contra o livre-arbítrio de terceiros. Práticas espirituais pertencem ao campo da experiência pessoal.',
    ],
    faq: [
      {
        question: 'Posso colocar o nome de outra pessoa para amarração?',
        answer: 'Não. Trabalhamos apenas o seu próprio magnetismo pessoal ou a harmonia mútua de um casal que já está junto de livre vontade.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/calice-de-venus',
    recommendedProductSlug: 'guia-de-banhos-ervas-e-defumacoes',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  // PAST RITUALS (RITUAIS REALIZADOS) for historical credibility
  {
    id: 'ritual-passado-equinocio-setembro',
    slug: 'equinocio-da-colheita-dourada-2026',
    name: 'EQUINÓCIO DE PRIMAVERA — SEMEADURA ÁUREA',
    subtitle: 'Rito Sazonal de Equilíbrio entre Luz e Sombra e Plantio de Intenções',
    category: 'PROSPERIDADE',
    traditionContext: 'Tradição Hermética Sazonal & Ciclos Solares',
    symbolicObjective: 'Renovação de projetos e consagração de sementes simbólicas no início da primavera austral.',
    dateDisplay: '22/09/2026',
    timeDisplay: '21h00 (Horário de Brasília)',
    isoDate: '2026-09-22T21:00:00-03:00',
    price: 167,
    isPast: true,
    registrationsNote: 'Cerimônia concluída com ata enviada aos participantes',
    image: planetariaImg,
    imageAlt: 'Instrumentos astronômicos antigos de bronze e pergaminho dourado do Equinócio',
    shortDescription:
      'Cerimônia realizada no marco astronômico do Equinócio de Setembro de 2026, dedicada ao florescimento de iniciativas intelectuais e materiais.',
    fullExplanation: [
      'Este rito foi conduzido em 22 de setembro de 2026, marcando o ponto exato de equilíbrio entre o dia e a noite no hemisfério sul.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto: Ritos Solares Sazonais do Hermetismo Ocidental.',
    ],
    whoIsItFor: ['Membros e inscritos do ciclo de Primavera 2026.'],
    experienceObjectives: ['Equilíbrio interior e plantio simbólico de metas.'],
    howParticipationWorks: [
      {
        step: 'Concluído',
        title: 'Cerimônia Realizada em 22/09/2026',
        description: 'As inscrições para esta edição encontram-se encerradas.',
      },
    ],
    whatParticipantNeedsToDo: ['Evento já realizado.'],
    whatHappensAfterRegistration: ['Ata litúrgica já entregue aos participantes.'],
    importantNotices: ['Inscrições encerradas para esta data.'],
    faq: [],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/equinocio-2026',
    recommendedProductSlug: 'magia-planetaria-e-prosperidade',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  {
    id: 'ritual-passado-portal-08-08',
    slug: 'portal-08-08-justica-e-estrutura',
    name: 'PORTAL 08/08 — ARCANO DA FORÇA E DA ESTRUTURA',
    subtitle: 'Consagração de Disciplina, Patrimônio e Domínio das Paixões',
    category: 'PODER PESSOAL',
    traditionContext: 'Simbologia Hermética & Magia Planetária',
    symbolicObjective: 'Estruturação de longo prazo, resiliência e domínio próprio.',
    dateDisplay: '08/08/2026',
    timeDisplay: '21h00 (Horário de Brasília)',
    isoDate: '2026-08-08T21:00:00-03:00',
    price: 197,
    isPast: true,
    registrationsNote: 'Cerimônia concluída em agosto de 2026',
    image: heroPortalImg,
    imageAlt: 'Altar do Portal 08/08 com velas douradas e grimório antigo',
    shortDescription:
      'Operação ritualística realizada em 08 de agosto de 2026, trabalhando a simbologia do duplo oito e do equilíbrio entre impulso e razão.',
    fullExplanation: [
      'Rito concluído com sucesso em 08/08/2026.',
    ],
    historicalAndSymbolicContext: ['Tradição Hermética Ocidental.'],
    whoIsItFor: ['Inscritos da edição de Agosto de 2026.'],
    experienceObjectives: ['Consolidação de hábitos e força interior.'],
    howParticipationWorks: [
      {
        step: 'Concluído',
        title: 'Cerimônia Realizada em 08/08/2026',
        description: 'Inscrições encerradas.',
      },
    ],
    whatParticipantNeedsToDo: ['Evento encerrado.'],
    whatHappensAfterRegistration: ['Ata entregue.'],
    importantNotices: ['Inscrições encerradas.'],
    faq: [],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/portal-08-08',
    recommendedProductSlug: 'grimorio-da-prosperidade',
    orderBumpProductSlug: 'guia-de-banhos-ervas-e-defumacoes',
  },
  {
    id: 'ritual-passado-caminhos-julho',
    slug: 'firmeza-de-inverno-guarda-e-caminhos',
    name: 'NOITE DOS GUARDIÕES — PROTEÇÃO E GUARDA DE INVERNO',
    subtitle: 'Firmeza Tradicional de Proteção de Caminhos e Limpeza de Meio de Ano',
    category: 'PROTEÇÃO',
    traditionContext: 'Tradição Afro-Brasileira — Fundamento de Guarda e Defesa',
    symbolicObjective: 'Proteção espiritual para o segundo semestre e limpeza de demandas simbólicas.',
    dateDisplay: '13/07/2026',
    timeDisplay: '21h30 (Horário de Brasília)',
    isoDate: '2026-07-13T21:30:00-03:00',
    price: 157,
    isPast: true,
    registrationsNote: 'Cerimônia concluída em julho de 2026',
    image: ritualExuImg,
    imageAlt: 'Mesa ritual tradicional de guarda com chaves e elementos de proteção',
    shortDescription:
      'Trabalho coletivo de guarda e limpeza realizado em julho de 2026 para abertura segura do segundo semestre.',
    fullExplanation: ['Cerimônia histórica realizada em 13 de julho de 2026.'],
    historicalAndSymbolicContext: ['Fundamento tradicional afro-brasileiro de guarda e limpeza.'],
    whoIsItFor: ['Participantes inscritos em julho de 2026.'],
    experienceObjectives: ['Guarda espiritual e limpeza de meio de ano.'],
    howParticipationWorks: [
      {
        step: 'Concluído',
        title: 'Cerimônia Realizada em 13/07/2026',
        description: 'Inscrições encerradas.',
      },
    ],
    whatParticipantNeedsToDo: ['Evento encerrado.'],
    whatHappensAfterRegistration: ['Ata entregue.'],
    importantNotices: ['Inscrições encerradas.'],
    faq: [],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/noite-dos-guardioes-julho',
    recommendedProductSlug: 'magias-de-prosperidade-com-exu',
    orderBumpProductSlug: 'guia-de-banhos-ervas-e-defumacoes',
  },
];

export function getFeaturedRitual(): RitualItem {
  return RITUALS_DATA.find((r) => r.slug === 'portal-da-prosperidade-10-10') || RITUALS_DATA[0];
}

export function getRitualBySlug(slug: string): RitualItem | undefined {
  return RITUALS_DATA.find((r) => r.slug === slug);
}

export function isRitualExpired(isoDate: string): boolean {
  return new Date(isoDate).getTime() <= Date.now();
}
