import heroPortalImg from '../assets/images/bune_horizontal_sigil_cover_1790629957069.jpg';
import exuCaminhosImg from '../assets/images/ritual_exu_caminhos_1790550925693.jpg';
import jupiterImg from '../assets/images/magia_planetaria_jupiter_1790550955010.jpg';
import ervasProtecaoImg from '../assets/images/ervas_banhos_defumacao_1790550945705.jpg';
import altarSolarImg from '../assets/images/hero_ritual_portal_1010_1790550914915.jpg';

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
  isoDate: string;
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
];

export const RITUALS_DATA: RitualItem[] = [
  {
    id: 'ritual-10-10',
    slug: 'portal-da-prosperidade-10-10',
    name: 'PORTAL 10/10 — RITUAL COLETIVO DE PROSPERIDADE COM BUNE',
    subtitle:
      'Operação Cerimonial Salomônica com o Duque Bune (26º Espírito do Lemegeton) para Abertura de Caminhos Financeiros, Sabedoria e Prosperidade',
    category: 'PROSPERIDADE',
    traditionContext:
      'Tradição Salomônica & Demonologia Histórica Europeia (Lemegeton / Ars Goetia — 26º Espírito: Duque Bune)',
    symbolicObjective:
      'Sintonização simbólica e teúrgica com a egrégora do Duque Bune para destravar fluxos materiais, atrair oportunidades de negócios, ampliar o magnetismo intelectual e estruturar a prosperidade.',
    dateDisplay: '10/10/2026',
    timeDisplay: '10:10 da manhã (Horário de Brasília)',
    isoDate: '2026-10-10T10:10:00-03:00',
    price: 97,
    featured: true,
    isPast: false,
    registrationsNote:
      'Caderno Litúrgico limitado à capacidade de inscrição nominal no altar de Cobre e Ouro',
    image: heroPortalImg,
    imageAlt:
      'Altar salomônico iluminado por velas douradas e alaranjadas com o sigilo tradicional do Duque Bune traçado em ouro e grimório antigo no Portal 10/10',
    shortDescription:
      'Uma operação cerimonial solene realizada na convergência numérica 10/10 às 10:10 da manhã, consagrada ao Grande Duque Bune — inteligência clássica da Ars Goetia associada à riqueza, à sabedoria prática, à eloquência persuasiva e à abertura de portas materiais.',
    fullExplanation: [
      'O Portal 10/10 — Ritual Coletivo de Prosperidade com Bune é a nossa grande operação cerimonial. Na tradição dos grimórios salomônicos europeus (especialmente no Lemegeton Clavicula Salomonis / Ars Goetia), Bune (ou Bime) é catalogado como o 26º Espírito: um Grande, Poderoso e Forte Duque que governa 30 legiões de espíritos e cuja virtude clássica consiste em conceder riqueza simbólica e material, tornar o homem sábio e eloquente, e oferecer respostas verdadeiras às demandas de estruturação de vida.',
      'Unindo a potência aritmética do Portal 10/10 às 10:10 da manhã (o número 10 da Roda da Fortuna e de Malkuth, a esfera da realização concreta) à regência venusiana e solar do Duque Bune, este rito coletivo trabalha a remoção de estagnações profissionais, o destravamento de negociações, a clareza para tomada de decisões financeiras e o magnetismo na comunicação.',
      'Longe de superstições ou promessas irreais, a cerimônia é executada com rigor litúrgico: o Sigilo Tradicional do Duque Bune consagrado em lâmina de cobre e ouro, incensos clássicos de sândalo, olíbano e casca de laranja doce, velas de cera pura alaranjadas, verdes e douradas, e cálices de vinho tinto suave e mel. Cada inscrito tem seu nome completo e três pedidos objetivos de prosperidade integrados ao Pergaminho Central do Altar.',
    ],
    historicalAndSymbolicContext: [
      'Tradição e Contexto Histórico: Este ritual fundamenta-se estritamente na Tradição Salomônica Europeia e no estudo histórico do Lemegeton (Ars Goetia) e da Pseudomonarchia Daemonum de Johann Weyer (século XVI). Nesses tratados clássicos, o Duque Bune é reverenciado por sua natureza nobre, pacífica e altamente favorável aos que buscam erudição, boa palavra nos negócios e prosperidade estruturada.',
      'Separação Rigorosa de Tradições: Em fidelidade absoluta aos princípios da Aurea Arcana, esclarecemos que esta operação pertence exclusivamente ao Ocultismo Cerimonial Ocidental e à Goetia Salomônica. Não misturamos, sob nenhuma hipótese, o culto tradicional de Exu, Umbanda ou Quimbanda com daemons europeus. Cada tradição possui sua própria cosmologia, liturgia e fundamento.',
      'O Portal 10/10 (décimo dia do décimo mês, às 10:10 da manhã) atua como uma chave temporal de máxima convergência simbólica para assentar no plano material (10 / Malkuth) os projetos, vendas, contratos e estudos que precisam de fluxo, reconhecimento e colheita.',
    ],
    whoIsItFor: [
      'Empreendedores, comerciantes, terapeutas e profissionais liberais que desejam destravar o fluxo de clientes, vendas e negociações por meio do magnetismo e da eloquência associados ao Duque Bune.',
      'Pessoas que sentem sua vida material estagnada e buscam uma operação cerimonial séria, segura e fundamentada na tradição salomônica para abertura de caminhos.',
      'Estudantes de ocultismo, demonologia histórica e magia cerimonial que desejam se conectar à corrente do Duque Bune em uma data de alta potência sem precisar montar toda a estrutura de metais e altar em casa.',
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
          'Assim que sua inscrição de R$ 97,00 é confirmada, você registra seu nome completo, data de nascimento e até 3 metas materiais ou profissionais específicas.',
      },
      {
        step: '02. Preparação Pessoal (09 e 10 de Outubro)',
        title: 'Recebimento do Caderno Litúrgico do Duque Bune (PDF)',
        description:
          'Você recebe o guia exclusivo do participante contendo a história do Duque Bune, o Sigilo tradicional pronto para impressão, a pronúncia do Enn de conexão e a receita do banho preparatório de louro, canela e casca de laranja.',
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
      'Preencher no checkout seu nome completo, data de nascimento e os pedidos de prosperidade que serão consagrados no altar.',
      'Se desejar realizar a conexão simultânea em casa (opcional), separar 1 vela dourada, laranja ou verde, 1 taça com água ou suco de laranja/vinho suave e uma colher de mel.',
      'Caso esteja trabalhando, em trânsito ou ocupado(a) às 10:10 da manhã do dia 10/10, fique tranquilo(a): seu nome e seus pedidos estarão fisicamente assentados junto ao Sigilo do Duque Bune no templo central.',
    ],
    whatHappensAfterRegistration: [
      'Registro imediato no Livro de Altar do Portal 10/10 com o Duque Bune.',
      'Recebimento do PDF exclusivo: "Caderno Litúrgico do Portal 10/10 — Sintonização com o Duque Bune".',
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
        question:
          'E se eu estiver trabalhando ou não puder estar em casa às 10:10 da manhã do dia 10/10/2026?',
        answer:
          'Sua participação é 100% válida através do testemunho nominal (seu nome completo, data de nascimento e intenções escritas e consagradas sobre o altar de cobre do Duque Bune). A sintonização doméstica é um complemento opcional que pode ser feito às 10:10 da manhã ou em qualquer horário tranquilo do dia 10/10.',
      },
      {
        question: 'Qual é o valor da inscrição e o que está incluso?',
        answer:
          'O valor único de participação individual é de R$ 97,00. Inclui a inscrição do seu nome e intenções no altar central, todos os elementos materiais da oferta coletiva no templo, o Caderno Litúrgico em PDF com o Sigilo e Enn do Duque Bune, e o envio da Ata Fotográfica pós-ritual.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/portal-10-10-bune',
    recommendedProductSlug: 'grimorio-da-prosperidade',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  {
    id: 'ritual-passado-exu-caminhos',
    slug: 'firmeza-abertura-de-caminhos-exu',
    name: 'FIRMEZA COLETIVA DE ABERTURA DE CAMINHOS NAS SETE ENCRUZILHADAS',
    subtitle:
      'Cerimônia Tradicional de Matriz Afro-Brasileira para Movimento, Desbloqueio Profissional e Vitalidade Material',
    category: 'ABERTURA DE CAMINHOS',
    traditionContext:
      'Tradição Afro-Brasileira — Fundamento Tradicional de Exu (Sem sincretismo com demonologia europeia)',
    symbolicObjective:
      'Desobstrução de caminhos estagnados, ativação do movimento comercial e proteção de jornada.',
    dateDisplay: '07/07/2026',
    timeDisplay: '21:00 (Cerimônia Concluída)',
    isoDate: '2026-07-07T21:00:00-03:00',
    price: 87,
    isPast: true,
    registrationsNote: 'Cerimônia realizada com sucesso · Ata Litúrgica enviada aos inscritos',
    image: exuCaminhosImg,
    imageAlt:
      'Altar tradicional de firmeza de caminhos com velas, elementos da terra e pontos riscados em pemba',
    shortDescription:
      'Cerimônia coletiva já realizada dedicada à força dinâmica de Exu como guardião da comunicação, do movimento e da abertura de caminhos materiais.',
    fullExplanation: [
      'Esta firmeza coletiva foi realizada em 07/07/2026 dentro dos fundamentos tradicionais de matriz afro-brasileira, honrando Exu como o princípio dinâmico de movimento, comunicação e abertura de veredas.',
      'Todos os nomes inscritos no caderno litúrgico foram consagrados e a Ata Fotográfica foi encaminhada aos participantes.',
    ],
    historicalAndSymbolicContext: [
      'Operação conduzida estritamente dentro da cosmovisão afro-brasileira, preservando a separação histórica e litúrgica em relação aos grimórios europeus.',
    ],
    whoIsItFor: [
      'Comerciantes, autônomos e buscadores que participaram do ciclo de abertura de caminhos de julho.',
    ],
    experienceObjectives: [
      'Movimentação de oportunidades profissionais e remoção de entraves cotidianos.',
    ],
    howParticipationWorks: [
      {
        step: '01. Inscrição Encerrada',
        title: 'Registro Nominal Concluído',
        description: 'Os nomes inscritos foram integrados à firmeza realizada em 07/07/2026.',
      },
      {
        step: '02. Ata Litúrgica Entregue',
        title: 'Relatório Pós-Ritual',
        description: 'Os participantes receberam o registro da cerimônia por e-mail.',
      },
    ],
    whatParticipantNeedsToDo: ['Cerimônia já concluída.'],
    whatHappensAfterRegistration: ['Inscrições encerradas para esta data.'],
    importantNotices: [
      'Esta cerimônia já foi realizada. Para participar da próxima operação aberta, inscreva-se no Portal 10/10 com o Duque Bune.',
    ],
    faq: [
      {
        question: 'Este ritual ainda aceita inscrições?',
        answer:
          'Não, esta cerimônia já foi realizada e encontra-se registrada em nosso histórico litúrgico.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/encerrado',
    recommendedProductSlug: 'magias-de-prosperidade-com-exu',
    orderBumpProductSlug: 'magias-de-prosperidade-com-exu',
  },
  {
    id: 'ritual-passado-jupiter-08-08',
    slug: 'operacao-teurgica-coroa-de-jupiter-08-08',
    name: 'PORTAL 08/08 — OPERAÇÃO TEÚRGICA DA COROA DE JÚPITER',
    subtitle:
      'Magia Planetária Clássica na Hora de Júpiter para Expansão, Prosperidade e Boas Alianças',
    category: 'PROSPERIDADE',
    traditionContext:
      'Hermetismo Clássico & Magia Planetária Renascentista (Picatrix / Kamea de Júpiter)',
    symbolicObjective:
      'Sintonização com a esfera jupiteriana de expansão, justiça, abundância e liderança benevolente.',
    dateDisplay: '08/08/2026',
    timeDisplay: '08:08 da manhã (Cerimônia Concluída)',
    isoDate: '2026-08-08T08:08:00-03:00',
    price: 97,
    isPast: true,
    registrationsNote: 'Cerimônia realizada com sucesso · Ata Litúrgica enviada aos inscritos',
    image: jupiterImg,
    imageAlt: 'Altar hermético de Júpiter com pantáculo em estanho, velas azuis e douradas e incenso de cedro',
    shortDescription:
      'Operação teúrgica planetária já realizada no Portal 08/08 sob a regência de Júpiter (Sachiel), voltada à expansão patrimonial, acordos favoráveis e estabilidade.',
    fullExplanation: [
      'Cerimônia fundamentada na magia planetária clássica do Renascimento (Marsilio Ficino e Heinrich Cornelius Agrippa), utilizando o quadrado mágico (Kamea) de Júpiter, incenso de cedro e noz-moscada.',
      'As inscrições para esta edição foram encerradas em 08/08/2026 e a consagração foi concluída no templo central.',
    ],
    historicalAndSymbolicContext: [
      'A magia planetária de Júpiter trabalha a harmonia das esferas celestes e a virtude da abundância estruturada.',
    ],
    whoIsItFor: ['Participantes inscritos no ciclo de agosto de 2026.'],
    experienceObjectives: ['Sintonização com os arquétipos de expansão e prosperidade de Júpiter.'],
    howParticipationWorks: [
      {
        step: '01. Inscrição Encerrada',
        title: 'Caderno de Altar Fechado',
        description: 'Cerimônia concluída em 08/08/2026.',
      },
    ],
    whatParticipantNeedsToDo: ['Cerimônia já concluída.'],
    whatHappensAfterRegistration: ['Inscrições encerradas para esta data.'],
    importantNotices: [
      'Esta cerimônia já foi realizada. Confira o próximo ritual aberto no topo do calendário.',
    ],
    faq: [
      {
        question: 'Posso me inscrever nesta operação?',
        answer: 'As inscrições para o Portal 08/08 já foram encerradas.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/encerrado',
    recommendedProductSlug: 'grimorio-da-prosperidade',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
  {
    id: 'ritual-passado-equinocio-protecao',
    slug: 'consagracao-equinocio-escudo-protecao',
    name: 'CONSAGRAÇÃO DE EQUINÓCIO — ESCUDO DE PROTEÇÃO E PURIFICAÇÃO',
    subtitle:
      'Rito Botânico e Cerimonial de Limpeza de Ciclo, Defumação Sagrada e Blindagem Espiritual',
    category: 'PROTEÇÃO',
    traditionContext: 'Sabedoria Botânica Ritual & Hermetismo Tradicional',
    symbolicObjective:
      'Purificação de miasmas, fechamento de corpo contra desgastes energéticos e renovação para o novo ciclo sazonal.',
    dateDisplay: '22/09/2026',
    timeDisplay: '20:00 (Cerimônia Concluída)',
    isoDate: '2026-09-22T20:00:00-03:00',
    price: 87,
    isPast: true,
    registrationsNote: 'Cerimônia realizada com sucesso · Ata Litúrgica enviada aos inscritos',
    image: ervasProtecaoImg,
    imageAlt: 'Turíbulo de bronze com resinas de mirra, olíbano e ervas secas de proteção em altar iluminado',
    shortDescription:
      'Cerimônia coletiva realizada na passagem do Equinócio para limpeza profunda de ambientes, corte de estagnações e fortalecimento espiritual.',
    fullExplanation: [
      'Realizada no Equinócio de Setembro, esta operação combinou resinas solares e marciais (olíbano, mirra, arruda e guiné) para purificação das tensões acumuladas no semestre.',
    ],
    historicalAndSymbolicContext: [
      'Os equinócios marcam momentos tradicionais de balanço, purificação e equilíbrio entre luz e sombra.',
    ],
    whoIsItFor: ['Participantes inscritos na consagração de Equinócio.'],
    experienceObjectives: ['Purificação simbólica e fortalecimento da guarda pessoal.'],
    howParticipationWorks: [
      {
        step: '01. Inscrição Encerrada',
        title: 'Cerimônia Concluída',
        description: 'Rito realizado em 22/09/2026.',
      },
    ],
    whatParticipantNeedsToDo: ['Cerimônia já concluída.'],
    whatHappensAfterRegistration: ['Inscrições encerradas para esta data.'],
    importantNotices: ['Esta cerimônia já foi realizada.'],
    faq: [
      {
        question: 'As inscrições estão abertas?',
        answer: 'Não, este rito de Equinócio já foi concluído.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/encerrado',
    recommendedProductSlug: 'grimorio-da-prosperidade',
    orderBumpProductSlug: 'grimorio-da-prosperidade',
  },
];

export function getFeaturedRitual(): RitualItem {
  return RITUALS_DATA[0];
}

export function getRitualBySlug(slug: string): RitualItem | undefined {
  return RITUALS_DATA.find((r) => r.slug === slug) || RITUALS_DATA[0];
}

export function isRitualExpired(isoDate: string): boolean {
  return new Date(isoDate).getTime() <= Date.now();
}
