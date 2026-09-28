import grimorioCoverImg from '../assets/images/grimorio_prosperidade_cover_1790550937370.jpg';
import ritualExuImg from '../assets/images/ritual_exu_caminhos_1790550925693.jpg';
import ervasImg from '../assets/images/ervas_banhos_defumacao_1790550945705.jpg';
import planetariaImg from '../assets/images/magia_planetaria_jupiter_1790550955010.jpg';
import heroPortalImg from '../assets/images/hero_ritual_portal_1010_1790550914915.jpg';

export type ProductCategory =
  | 'GRIMÓRIOS'
  | 'PROSPERIDADE'
  | 'EXU'
  | 'PEMBA'
  | 'ERVAS E BANHOS'
  | 'MAGIA'
  | 'DAEMONS'
  | 'PROTEÇÃO'
  | 'ABERTURA DE CAMINHOS';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'GRIMÓRIOS',
  'PROSPERIDADE',
  'EXU',
  'ERVAS E BANHOS',
  'MAGIA',
  'DAEMONS',
  'PROTEÇÃO',
  'ABERTURA DE CAMINHOS',
];

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  headline: string;
  shortDescription: string;
  fullDescription: string[];
  originalPrice?: number;
  price: number;
  hasEmbeddedEbook?: boolean;
  category: ProductCategory;
  secondaryCategories: ProductCategory[];
  traditionLineage: string;
  pagesCount: number;
  formatLabel: string;
  coverImage: string;
  coverAccentColor: 'gold' | 'crimson' | 'emerald' | 'midnight';
  coverSymbol: 'sigil' | 'key' | 'pemba' | 'botanical' | 'jupiter' | 'grimoire' | 'daemon' | 'archive';
  benefits: string[];
  tableOfContents: {
    chapter: string;
    title: string;
    summary: string;
  }[];
  whoIsItFor: string[];
  whatYouReceive: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  checkoutUrl: string;
  funnelStage: 'PRODUTO DE ENTRADA' | 'BIBLIOTECA / COMBO' | 'ESTUDO AVANÇADO';
  nextRecommendedRitualSlug: string;
  upsellProductSlug: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-exu-prosperidade',
    slug: 'magias-de-prosperidade-com-exu',
    name: 'MAGIAS DE PROSPERIDADE COM EXU',
    headline: 'Fundamentos, Proteção, Prosperidade e Abertura de Caminhos — Guia de Estudo e Práticas Simbólicas',
    shortDescription:
      'Guia prático e educativo de 15 páginas sobre Exu sem medo (movimento, comunicação e encruzilhada), distinção entre Exu Orixá e entidades chamadas Exu, preparação e práticas simbólicas responsáveis.',
    fullDescription: [
      'Exu ocupa um lugar central em diferentes tradições afro-brasileiras e africanas, mas seu significado muda conforme a tradição. Este guia começa por uma regra simples: não reduzir Exu à figura cristã do Diabo e não apresentar conceitos diferentes (como Exu Orixá iorubá e entidades espirituais chamadas Exus na Umbanda e Quimbanda) como se fossem idênticos.',
      'Estruturado em 15 páginas diretas e educativas, o e-book trabalha três ideias simbólicas centrais: movimento, comunicação e encruzilhada — aliando cada prática simbólica (proteção do lar, padê simbólico de abertura, trabalho e oportunidades, prosperidade com mel e louro, Ritual das Sete Estradas e encerramento de ciclos) a ações concretas na vida real.',
    ],
    originalPrice: 67,
    price: 49.9,
    hasEmbeddedEbook: true,
    category: 'EXU',
    secondaryCategories: ['PROSPERIDADE', 'ABERTURA DE CAMINHOS', 'PROTEÇÃO'],
    traditionLineage: 'Tradições Afro-Brasileiras — Guia de Estudo e Práticas Simbólicas',
    pagesCount: 15,
    formatLabel: 'E-book Digital Completo (15 páginas) — Liberado imediatamente após o pagamento',
    coverImage: ritualExuImg,
    coverAccentColor: 'crimson',
    coverSymbol: 'key',
    benefits: [
      'Exu sem medo: compreenda a tríade Movimento, Comunicação e Encruzilhada sem estigmas coloniais.',
      'Distinção clara entre Èṣù/Exu Orixá (matriz iorubá) e as entidades chamadas Exu em diferentes vertentes de Umbanda e Quimbanda.',
      'Protocolos de ética, respeito ambiental, segurança com velas e preparação com banho de alecrim e defumação.',
      '6 práticas simbólicas completas passo a passo aliadas a ações concretas para as próximas 24 a 72 horas.',
    ],
    tableOfContents: [
      {
        chapter: 'Capítulos 1 a 3 (Págs. 4 a 6)',
        title: '1. Exu sem medo · 2. Exu Orixá e entidades chamadas Exu · 3. Ética, respeito e segurança',
        summary: 'Movimento, comunicação e encruzilhada; distinções entre matrizes; regras de ética e descarte responsável.',
      },
      {
        chapter: 'Capítulos 4 e 5 (Págs. 7 e 8)',
        title: '4. Preparação: banho e defumação · 5. Elementos simbólicos: velas, pemba, pontos, ervas e oferendas',
        summary: 'Banho aromático de alecrim, limpeza do espaço e uso consciente de velas, formas geométricas, chaves e moedas.',
      },
      {
        chapter: 'Capítulos 6 a 9 (Págs. 9 a 12)',
        title: '6. Firmeza para proteção do lar · 7. Padê simbólico para movimento · 8. Trabalho e oportunidades · 9. Prosperidade e harmonia',
        summary: 'Práticas detalhadas com copo d’água e chave, farofa simbólica com 3 ações em 72h, 7 moedas com louro e prática com mel e louro.',
      },
      {
        chapter: 'Capítulos 10 a 12 (Págs. 13 a 15)',
        title: '10. Ritual simbólico das Sete Estradas · 11. Proteção e encerramento de ciclos · 12. Integração: o caminho continua fora do ritual',
        summary: 'Mapeamento das 7 áreas da vida, envelope de encerramento de padrões e integração prática no cotidiano.',
      },
    ],
    whoIsItFor: [
      'Estudantes e praticantes que buscam compreender Exu sem medo, sem preconceitos e com responsabilidade ética.',
      'Pessoas que desejam práticas simbólicas seguras para trabalho, oportunidades, proteção do lar e abertura de caminhos.',
    ],
    whatYouReceive: [
      'E-book "Magias com Exu — Fundamentos, proteção, prosperidade e abertura de caminhos" (15 páginas completas liberadas na tela e para impressão/PDF logo após o pagamento).',
      '12 capítulos práticos e educativos com orientações de segurança e descarte responsável.',
      'Acesso imediato após confirmação do pagamento de R$ 67,00 por R$ 49,90.',
    ],
    faq: [
      {
        question: 'Como recebo o e-book de 15 páginas após o pagamento?',
        answer: 'Imediatamente após confirmar o pagamento no checkout do portal, o e-book completo de 15 páginas é liberado na sua tela para leitura imediata, navegação por capítulos e impressão/salvamento em PDF.',
      },
      {
        question: 'Este guia ensina práticas para prejudicar ou controlar outras pessoas?',
        answer: 'Jamais. O capítulo 3 estabelece expressamente: não utilize práticas para ameaçar, perseguir ou controlar outra pessoa. Uma prática espiritual responsável não precisa criar medo para parecer poderosa.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/magias-de-prosperidade-com-exu',
    funnelStage: 'PRODUTO DE ENTRADA',
    nextRecommendedRitualSlug: 'abertura-de-caminhos-tradicao-exu',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-grimorio-prosperidade',
    slug: 'grimorio-da-prosperidade',
    name: 'GRIMÓRIO DA PROSPERIDADE',
    headline: 'Orações Herméticas, Sigilos de Realização, Consagrações, Ciclos Lunares e Alquimia Simbólica',
    shortDescription:
      'Nosso grimório autoral de 30 páginas: reúne orações herméticas, os 3 Sigilos da Realização, Porta Próspera e Circulação, consagração da carteira e instrumentos, ciclo lunar e o Ritual dos 7 Dias de Realização.',
    fullDescription: [
      'Neste grimório de 30 páginas da Aurea Arcana, a prosperidade não é tratada apenas como acumulação, mas como circulação organizada de recursos: dinheiro, conhecimento, relações, tempo, criatividade e capacidade de realizar. O símbolo organiza a intenção; a disciplina constrói o resultado.',
      'Inspirado no Hermetismo Ocidental, na magia cerimonial e na simbologia alquímica (Separar, Purificar, Combinar e Fixar), o material traz orações autorais, 3 sigilos práticos, consagrações de objetos de trabalho, calendário das 4 fases lunares, o Ritual completo dos 7 Dias de Realização e a Página de Intenção e Registro.',
    ],
    originalPrice: 97,
    price: 49.9,
    hasEmbeddedEbook: true,
    category: 'GRIMÓRIOS',
    secondaryCategories: ['PROSPERIDADE', 'MAGIA'],
    traditionLineage: 'Hermetismo Ocidental, Magia Cerimonial & Simbologia Alquímica',
    pagesCount: 30,
    formatLabel: 'Grimório Digital Completo em PDF (30 páginas) — Liberado após o pagamento',
    coverImage: grimorioCoverImg,
    coverAccentColor: 'gold',
    coverSymbol: 'grimoire',
    benefits: [
      'Domine a ideia hermética de prosperidade e o preparo do Altar da Obra e da Colheita.',
      'Pratique as 3 Orações Herméticas (Inteligência e Matéria, Abrir o Trabalho e Encerramento e Gratidão).',
      'Ative os 3 Sigilos Autorais: Sigilo Solar da Realização, Sigilo da Porta Próspera e Sigilo da Circulação.',
      'Realize a Consagração da Carteira, dos Instrumentos de Trabalho, o Ciclo Lunar e o Ritual dos 7 Dias de Realização.',
    ],
    tableOfContents: [
      {
        chapter: 'Capítulos 1 a 5 (Págs. 4 a 8)',
        title: 'Ideia Hermética de Prosperidade, Altar da Obra e as 3 Orações Herméticas',
        summary: 'Fundamentos da circulação organizada, espaço ritual de trabalho e orações para abrir e encerrar ciclos.',
      },
      {
        chapter: 'Capítulos 6 a 10 (Págs. 9 a 13)',
        title: 'Os 3 Sigilos (Solar, Porta Próspera e Circulação) e Consagrações Práticas',
        summary: 'Traçado e ativação dos sigilos autorais, consagração da carteira e dos instrumentos de trabalho.',
      },
      {
        chapter: 'Capítulos 11 a 17 (Págs. 14 a 20)',
        title: 'O Ciclo Lunar da Colheita, as 4 Operações Alquímicas e Mentalidade Ritualística',
        summary: 'Práticas e páginas de registro para Lua Nova, Crescente, Cheia e Minguante + Separar, Purificar, Combinar e Fixar.',
      },
      {
        chapter: 'Capítulos 18 e 19 (Págs. 21 a 30)',
        title: 'Ritual dos 7 Dias de Realização (Dias 1 a 7) e Página de Intenção e Registro',
        summary: 'Roteiro diário completo (Nomear, Preparar, Comunicar, Circular, Negociar, Consolidar e Colher) + Ficha final.',
      },
    ],
    whoIsItFor: [
      'Estudiosos e praticantes que buscam transformar intenção em rito e rito em ação concreta e estruturada.',
      'Participantes do Portal 10/10 que desejam um manual prático de 30 páginas para aplicar em seus ciclos profissionais e financeiros.',
    ],
    whatYouReceive: [
      'E-book "Grimório da Prosperidade" (30 páginas completas liberadas na tela e para impressão/PDF logo após o pagamento).',
      'Pranchas com os 3 Sigilos Autorais (Solar da Realização, Porta Próspera e Circulação) e páginas de registro lunar.',
      'O protocolo completo do Ritual dos 7 Dias de Realização + Página de Intenção e Registro.',
    ],
    faq: [
      {
        question: 'Como recebo o Grimório da Prosperidade de 30 páginas?',
        answer: 'Assim que você realiza o pagamento via PIX no checkout do portal, o Grimório da Prosperidade completo (30 páginas) é liberado imediatamente na tela para leitura, navegação por capítulos e salvamento/impressão em PDF.',
      },
      {
        question: 'Preciso de ingredientes caros ou difíceis para praticar?',
        answer: 'Não. O altar da obra utiliza elementos simples e acessíveis: um tecido limpo, vela branca ou dourada (opcional), um copo com água, uma moeda corrente e um instrumento ligado ao seu trabalho.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/grimorio-da-prosperidade',
    funnelStage: 'ESTUDO AVANÇADO',
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-ervas-banhos',
    slug: 'guia-de-banhos-ervas-e-defumacoes',
    name: 'GUIA DE BANHOS, ERVAS E DEFUMAÇÕES',
    headline: 'Alquimia Vegetal Sagrada: A Ciência Tradicional dos Banhos de Descarrego, Atração e Defumações Litúrgicas',
    shortDescription:
      'Catálogo prático com mais de 60 ervas, raízes, cascas e resinas classificadas por temperatura energética, regência tradicional e finalidade simbólica.',
    fullDescription: [
      'Das antigas fumigaciones greco-egípcias ao saber ancestral das benzedeiras e raizeiros brasileiros, o reino vegetal sempre foi a ponte mais direta para purificar o corpo, acalmar o espírito e preparar o ambiente para grandes realizações.',
      'Este guia ensina a classificação precisa entre ervas quentes (agressivas/limpeza profunda), mornas (equilibradoras/abertura) e frias (específicas), além da arte correta de macerar folhas frescas ou infundir ervas secas sem destruir seus princípios aromáticos e sutis.',
    ],
    price: 47,
    category: 'ERVAS E BANHOS',
    secondaryCategories: ['PROTEÇÃO', 'PROSPERIDADE'],
    traditionLineage: 'Sabedoria Botânica Tradicional Brasileira & Fitoterapia Esotérica Clássica',
    pagesCount: 132,
    formatLabel: 'Manual Digital Ilustrado em PDF (132 páginas)',
    coverImage: ervasImg,
    coverAccentColor: 'emerald',
    coverSymbol: 'botanical',
    benefits: [
      'Saiba exatamente quais ervas nunca devem ser fervidas e quais exigem decocção (cascas, sementes e raízes).',
      'Aprenda a diferença entre banhos de descarrego (com sal grosso ou ervas quentes) e banhos de imantação dourada.',
      'Domine a arte da defumação em brasa com resinas puras (mirra, olíbano, benjoim, breu-branco e estoraque).',
      'Consulte 35 receitas prontas para proteção, prosperidade, clareza mental, sono restaurador e abertura de caminhos.',
    ],
    tableOfContents: [
      {
        chapter: 'Parte I',
        title: 'Classificação Energética das Plantas: Ervas Quentes, Mornas e Frias',
        summary: 'Como combinar folhas, flores, cascas e resinas com segurança e harmonia.',
      },
      {
        chapter: 'Parte II',
        title: 'Protocolo de Preparo: Maceração a Frio, Infusão e Decocção',
        summary: 'O passo a passo técnico do preparo ao descarte respeitoso das ervas na natureza.',
      },
      {
        chapter: 'Parte III',
        title: 'Formulário de 21 Banhos de Prosperidade, Abertura e Vitalidade',
        summary: 'Combinações tradicionais com louro, manjericão, alecrim, canela, anis-estrelado, folha de pitanga e colônia.',
      },
      {
        chapter: 'Parte IV',
        title: 'A Arte do Turíbulo: Defumações de Limpeza e Consagração de Ambientes',
        summary: 'Como defumar residências e escritórios da porta aos fundos ou dos fundos à porta conforme o objetivo.',
      },
    ],
    whoIsItFor: [
      'Qualquer pessoa que deseje incorporar banhos de ervas e defumações autênticas em sua rotina semanal de cuidado energético.',
    ],
    whatYouReceive: [
      'Guia de Banhos, Ervas e Defumações (132 páginas em PDF).',
      'Tabela rápida de consulta de 60 plantas e suas contraindicações físicas (alergias/gestantes).',
    ],
    faq: [
      {
        question: 'O guia informa cuidados sobre alergias e sensibilidade da pele?',
        answer: 'Sim! Todas as receitas trazem avisos claros sobre plantas fotossensibilizantes ou irritantes (como arruda ou canela em excesso na pele) para uso totalmente seguro.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/guia-de-banhos-ervas-e-defumacoes',
    funnelStage: 'PRODUTO DE ENTRADA',
    nextRecommendedRitualSlug: 'escudo-hermetico-de-protecao-e-corte',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-abertura-caminhos',
    slug: 'magias-para-abertura-de-caminhos',
    name: 'MAGIAS PARA ABERTURA DE CAMINHOS',
    headline: 'Ritos de Passagem, Corte de Estagnação e Destravamento de Ciclos Pessoais e Profissionais',
    shortDescription:
      'Manual estratégico de operações simbólicas para momentos de transição de carreira, superação de bloqueios repetitivos e inauguração de novos projetos.',
    fullDescription: [
      'Existem momentos na biografia de todo indivíduo em que a sensação predominante é a de caminhar contra uma parede invisível: portas que se fecham no último instante, cansaço sem causa aparente e repetição de padrões.',
      'Magias para Abertura de Caminhos reúne ritos de corte simbólico, firmezas de chave e operações de movimento para auxiliar você a encerrar ciclos vencidos e inaugurar novas etapas com clareza e determinação.',
    ],
    price: 57,
    category: 'ABERTURA DE CAMINHOS',
    secondaryCategories: ['MAGIA', 'PROSPERIDADE'],
    traditionLineage: 'Magia Simbólica Prática & Tradições de Chave e Encruzilhada',
    pagesCount: 126,
    formatLabel: 'Edição Digital em PDF (126 páginas)',
    coverImage: heroPortalImg,
    coverAccentColor: 'gold',
    coverSymbol: 'key',
    benefits: [
      'Identifique os 4 tipos clássicos de bloqueio simbólico e saiba qual operação aplicar em cada caso.',
      'Aprenda o Rito Tradicional da Chave de Bronze para destravamento de projetos e transições de carreira.',
      'Combine práticas de limpeza de Lua Minguante com aberturas de Lua Nova.',
    ],
    tableOfContents: [
      {
        chapter: 'Capítulo I',
        title: 'Anatomia da Estagnação: Quando Limpar e Quando Abrir',
        summary: 'Por que tentar atrair prosperidade sem antes desobstruir o caminho gera frustração.',
      },
      {
        chapter: 'Capítulo II',
        title: 'O Simbolismo Universal das Chaves, Portas e Pontes',
        summary: 'Uso ritualístico de chaves metálicas como âncoras de decisão e passagem.',
      },
      {
        chapter: 'Capítulo III',
        title: '9 Operações Práticas de Abertura de Caminhos',
        summary: 'Roteiros detalhados com velas, ervas, salmos e firmezas.',
      },
    ],
    whoIsItFor: [
      'Pessoas em transição profissional, busca de novos clientes ou início de um novo ciclo de vida.',
    ],
    whatYouReceive: [
      'Livro Digital "Magias para Abertura de Caminhos" (126 páginas em PDF).',
      'Checklist de preparação do espaço ritualístico.',
    ],
    faq: [
      {
        question: 'Posso realizar essas práticas morando em apartamento?',
        answer: 'Sim. Todas as práticas foram adaptadas e explicadas para realização segura e discreta em apartamentos ou residências urbanas.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/magias-para-abertura-de-caminhos',
    funnelStage: 'PRODUTO DE ENTRADA',
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-daemons-prosperidade',
    slug: 'guia-dos-daemons-associados-a-prosperidade',
    name: 'GUIA DOS DAEMONS ASSOCIADOS À PROSPERIDADE',
    headline: 'Demonologia Histórica, Filosofia Helenística e Grimórios Salomônicos: Estudo Crítico e Simbólico',
    shortDescription:
      'Estudo histórico, filológico e ocultista sobre o conceito de Daemon (da antiguidade grega à Ars Goetia e ao Lemegeton), analisando os espíritos tradicionalmente associados a tesouros, dignidades, ciências e governança.',
    fullDescription: [
      'Poucos temas no ocultismo ocidental sofrem tanta distorção quanto o estudo dos Daemons. Na Grécia Antiga (de Hesíodo a Platão e aos neoplatônicos como Jâmblico), o Daimon (δαίμων) era o gênio tutelar, a inteligência intermediária e a centelha de destino e vocação (como o daimon de Sócrates). Já nos grimórios renascentistas e salomônicos dos séculos XVI e XVII (como a Clavícula de Salomão e o Lemegeton), essas inteligências foram catalogadas com selos, hierarquias planetárias e atribuições ligadas ao conhecimento, à retórica, às dignidades e às riquezas da terra.',
      'Neste guia rigoroso e inédito, estudamos a história real dos grimórios europeus — sem sensacionalismo, sem medo supersticioso e JAMAIS misturando daemons salomônicos com entidades de religiões afro-brasileiras (como Exu), preservando a verdade histórica de cada tradição.',
    ],
    price: 87,
    category: 'DAEMONS',
    secondaryCategories: ['GRIMÓRIOS', 'PROSPERIDADE'],
    traditionLineage: 'Demonologia Histórica Europeia, Tradição Salomônica & Filosofia Neoplatônica',
    pagesCount: 176,
    formatLabel: 'Tratado Histórico e Simbólico em PDF (176 páginas)',
    coverImage: grimorioCoverImg,
    coverAccentColor: 'crimson',
    coverSymbol: 'daemon',
    benefits: [
      'Compreenda a evolução histórica do termo Daimon/Daemon: da filosofia grega aos grimórios salomônicos europeus.',
      'Estude a iconografia, os selos, os metais e as regências planetárias dos espíritos associados nos textos clássicos à eloquência, dignidades, tesouros e estratégia (como Bune, Clauneck, Bael, Paimon e Belial, sob ótica histórica e simbólica).',
      'Aprenda a leitura psicológica, arquetípica e cerimonial dos grimórios sem cair em imprudências ou misturas religiosas indevidas.',
    ],
    tableOfContents: [
      {
        chapter: 'Capítulo I',
        title: 'Do Daimon Socrático aos Grimórios Renascentistas: Uma História Crítica',
        summary: 'A transformação do gênio tutelar helenístico nos catálogos da Europa moderna.',
      },
      {
        chapter: 'Capítulo II',
        title: 'Por Que Daemons Salomônicos NÃO São Exus: O Fim de um Erro Histórico',
        summary: 'Análise comparada definitiva entre os manuscritos europeus e a diáspora africana.',
      },
      {
        chapter: 'Capítulo III',
        title: 'Os Espíritos da Riqueza nos Manuscritos Clássicos (Lemegeton, Grimorium Verum e Livre des Esperitz)',
        summary: 'Estudo detalhado de Clauneck, Bune, Mammon (enquanto personificação histórica) e os Reis Cardeais.',
      },
      {
        chapter: 'Capítulo IV',
        title: 'Simbologia dos Metais, Horas Planetárias e Ética do Ocultista Contemporâneo',
        summary: 'Prudência, equilíbrio psíquico e abordagem de estudo seguro.',
      },
    ],
    whoIsItFor: [
      'Pesquisadores de ocultismo, historiadores das religiões, estudantes de grimórios clássicos e praticantes maduros que buscam conhecimento de fonte primária.',
    ],
    whatYouReceive: [
      'Guia dos Daemons Associados à Prosperidade (176 páginas em PDF).',
      'Apêndice com reprodução comentada dos selos históricos e suas correspondências planetárias.',
    ],
    faq: [
      {
        question: 'Este guia mistura daemons com Umbanda ou Quimbanda?',
        answer: 'Não. Pelo contrário: dedicamos um capítulo inteiro a demonstrar historicamente por que daemons europeus e Exus afro-brasileiros pertencem a universos culturais, linguísticos e teológicos completamente distintos.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/guia-dos-daemons-prosperidade',
    funnelStage: 'ESTUDO AVANÇADO',
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-magia-planetaria',
    slug: 'magia-planetaria-e-prosperidade',
    name: 'MAGIA PLANETÁRIA E PROSPERIDADE',
    headline: 'A Ciência das Horas Celestes: As Esferas de Júpiter, Sol, Mercúrio e Vênus Aplicadas à Realização',
    shortDescription:
      'Aprenda a calcular e utilizar os dias e horas planetárias, os Hinos Órficos, os Kameas (quadrados mágicos) e as correspondências de Júpiter e do Sol para consagrar projetos e talismãs.',
    fullDescription: [
      'Na tradição hermética e astrológica clássica, o tempo não é uniforme: cada dia da semana e cada hora do dia é regida por uma inteligência planetária específica. Conhecer a qualidade do tempo (Kairós) é o segredo das grandes consagrações renascentistas.',
      'Em Magia Planetária e Prosperidade, você aprenderá de forma prática como operar com as quatro esferas diretamente ligadas ao sucesso humano: Júpiter (expansão, abundância, patronato), Sol (autoridade, ouro, brilho), Mercúrio (comércio, intelecto, contratos) e Vênus (magnetismo, diplomacia, valor).',
    ],
    price: 77,
    category: 'MAGIA',
    secondaryCategories: ['PROSPERIDADE', 'GRIMÓRIOS'],
    traditionLineage: 'Astrologia Tradicional, Teurgia Neoplatônica & Magia Renascentista (Picatrix / Ficino)',
    pagesCount: 164,
    formatLabel: 'Tratado Prático em PDF (164 páginas) + Calculadora de Horas Planetárias',
    coverImage: planetariaImg,
    coverAccentColor: 'midnight',
    coverSymbol: 'jupiter',
    benefits: [
      'Domine o cálculo exato das Horas Planetárias diurnas e noturnas em qualquer cidade do Brasil.',
      'Saiba quando agir sob Júpiter (crescimento e finanças), Mercúrio (vendas e escrita) ou Sol (liderança e reconhecimento).',
      'Construa sigilos tradicionais sobre os Quadrados Mágicos (Kamea de Júpiter 4x4 e Kamea do Sol 6x6).',
      'Utilize os Hinos Órficos históricos e suffumigações clássicas para cada planeta.',
    ],
    tableOfContents: [
      {
        chapter: 'Capítulo I',
        title: 'A Escada Celeste: Os Sete Planetas Clássicos e Suas Regências Materiais',
        summary: 'Por que a tradição trabalha com os sete luminares visíveis e suas dignidades.',
      },
      {
        chapter: 'Capítulo II',
        title: 'Júpiter (Tzedek / Sachiel): O Grande Benéfico e a Arte da Expansão',
        summary: 'Estanho, safira, açafrão, cedro, quintas-feiras e o Quadrado Mágico de soma 136.',
      },
      {
        chapter: 'Capítulo III',
        title: 'Sol e Mercúrio: Ouro Soberano e Engenhosidade Comercial',
        summary: 'Como equilibrar a visão estratégica solar com a agilidade mercadológica de Mercúrio.',
      },
      {
        chapter: 'Capítulo IV',
        title: 'Roteiro Prático de Consagração de Pantáculos em Hora Eleita',
        summary: 'Como escolher o melhor momento do mês para lançar um projeto ou consagrar um talismã.',
      },
    ],
    whoIsItFor: [
      'Estudantes de astrologia, tarot, hermetismo e magia cerimonial que buscam precisão técnica e elegância prática.',
    ],
    whatYouReceive: [
      'Livro Digital "Magia Planetária e Prosperidade" (164 páginas em PDF).',
      'Guia rápido dos 7 Quadrados Mágicos de Agrippa e Paracelso.',
    ],
    faq: [
      {
        question: 'Preciso saber fazer mapa astral avançado para aplicar o livro?',
        answer: 'Não. Ensinamos desde o básico das horas planetárias e fases da Lua até as aplicações mais refinadas de forma totalmente didática.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/magia-planetaria-e-prosperidade',
    funnelStage: 'ESTUDO AVANÇADO',
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'biblioteca-secreta-da-prosperidade',
  },
  {
    id: 'prod-biblioteca-secreta',
    slug: 'biblioteca-secreta-da-prosperidade',
    name: 'BIBLIOTECA SECRETA DA PROSPERIDADE',
    headline: 'O Acervo Completo Aurea Arcana: Os 6 Tratados Fundamentais Reunidos em Edição de Colecionador Digital',
    shortDescription:
      'Acesso imediato e vitalício a todos os 6 livros digitais do nosso catálogo (mais de 950 páginas de conteúdo original), além de bônus exclusivos de cartografia simbólica e prioridade nos rituais.',
    fullDescription: [
      'Para o estudioso dedicado que não deseja adquirir cada tratado separadamente, reunimos toda a produção editorial da Aurea Arcana na Biblioteca Secreta da Prosperidade.',
      'Você recebe instantaneamente os 6 volumes completos: Magias de Prosperidade com Exu, Grimório da Prosperidade, Guia de Banhos, Ervas e Defumações, Magias para Abertura de Caminhos, Guia dos Daemons Associados à Prosperidade e Magia Planetária e Prosperidade.',
      'Ao adquirir o acervo completo, você economiza em relação ao valor avulso dos volumes e recebe ainda o Calendário Anual de Portais e Horas Planetárias.',
    ],
    price: 297,
    category: 'PROSPERIDADE',
    secondaryCategories: ['GRIMÓRIOS', 'MAGIA', 'EXU', 'ERVAS E BANHOS', 'DAEMONS', 'ABERTURA DE CAMINHOS'],
    traditionLineage: 'Acervo Multitradicional Completo (Com Separação Rigorosa de Cada Vertente)',
    pagesCount: 952,
    formatLabel: 'Coleção Completa com 6 Livros Digitais em PDF + 3 Encartes de Alta Resolução',
    coverImage: grimorioCoverImg,
    coverAccentColor: 'gold',
    coverSymbol: 'archive',
    benefits: [
      'Receba os 6 livros completos da Aurea Arcana de uma só vez com desconto especial.',
      'Mais de 950 páginas de estudos sérios, sem preenchimento superficial e com rigor histórico.',
      'Inclui tanto os volumes de tradição afro-brasileira (Exu, Ervas) quanto os tratados de ocultismo ocidental (Grimório, Magia Planetária e Demonologia Histórica), organizados em módulos independentes.',
      'Bônus exclusivo: Pranchas de Altar e Calendário Esotérico 2026/2027 em alta resolução.',
    ],
    tableOfContents: [
      {
        chapter: 'Volume I',
        title: 'Magias de Prosperidade com Exu (15 págs.)',
        summary: 'E-book completo: Exu sem medo, movimento, comunicação, encruzilhada e 6 práticas simbólicas.',
      },
      {
        chapter: 'Volume II',
        title: 'Grimório da Prosperidade (30 págs.)',
        summary: 'Orações herméticas, 3 sigilos de realização, consagrações, ciclos lunares e Ritual dos 7 Dias.',
      },
      {
        chapter: 'Volume III',
        title: 'Guia de Banhos, Ervas e Defumações (132 págs.)',
        summary: 'Alquimia botânica de limpeza, proteção e imantação.',
      },
      {
        chapter: 'Volume IV',
        title: 'Magias para Abertura de Caminhos (126 págs.)',
        summary: 'Ritos de passagem, chaves e destravamento de ciclos.',
      },
      {
        chapter: 'Volume V',
        title: 'Guia dos Daemons Associados à Prosperidade (176 págs.)',
        summary: 'Estudo histórico-crítico dos grimórios salomônicos e da filosofia helenística.',
      },
      {
        chapter: 'Volume VI',
        title: 'Magia Planetária e Prosperidade (164 págs.)',
        summary: 'As esferas de Júpiter, Sol, Mercúrio e Vênus aplicadas à realização.',
      },
    ],
    whoIsItFor: [
      'Estudiosos, sacerdotes, terapeutas holísticos e buscadores que desejam ter a biblioteca de referência completa em seu computador, tablet ou celular.',
    ],
    whatYouReceive: [
      'Os 6 Livros Digitais completos em PDF de alta definição.',
      'Encarte Bônus: Pranchas de Quadrados Mágicos e Sigilos Planetários.',
      'Cupom de desconto especial para inscrição no Portal 10/10.',
    ],
    faq: [
      {
        question: 'Posso baixar todos os 6 livros para ler offline ou imprimir?',
        answer: 'Sim. Todos os arquivos são liberados em PDF desbloqueado para leitura em qualquer dispositivo (celular, Kindle, tablet, computador) ou impressão pessoal.',
      },
    ],
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/biblioteca-secreta-completa',
    funnelStage: 'BIBLIOTECA / COMBO',
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'grimorio-da-prosperidade',
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}
