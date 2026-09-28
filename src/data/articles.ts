import heroPortalImg from '../assets/images/hero_ritual_portal_1010_1790550914915.jpg';
import ritualExuImg from '../assets/images/ritual_exu_caminhos_1790550925693.jpg';
import grimorioImg from '../assets/images/grimorio_prosperidade_cover_1790550937370.jpg';
import ervasImg from '../assets/images/ervas_banhos_defumacao_1790550945705.jpg';
import planetariaImg from '../assets/images/magia_planetaria_jupiter_1790550955010.jpg';

export type ArticleCategory =
  | 'Prosperidade'
  | 'Exu'
  | 'Pemba'
  | 'Ocultismo'
  | 'Daemons'
  | 'Magia'
  | 'Ervas'
  | 'Proteção'
  | 'Grimórios';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Prosperidade',
  'Exu',
  'Pemba',
  'Ocultismo',
  'Daemons',
  'Magia',
  'Ervas',
  'Proteção',
  'Grimórios',
];

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  subheadings?: {
    title: string;
    text: string;
  }[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  dateDisplay: string;
  isoDate: string;
  readTime: string;
  category: ArticleCategory;
  traditionBadge: string;
  sections: ArticleSection[];
  relatedProductSlugs: string[];
  relatedRitualSlugs: string[];
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-exu-prosperidade-movimento',
    slug: 'exu-e-prosperidade-senhor-do-movimento-e-do-mercado',
    title: 'Exu e Prosperidade: Por Que o Senhor do Movimento Rege a Abertura de Caminhos',
    excerpt:
      'Compreenda a cosmovisão tradicional afro-brasileira sobre Exu enquanto princípio dinâmico da comunicação, da reciprocidade e do comércio — e por que é um erro histórico confundi-lo com a demonologia europeia.',
    metaDescription:
      'Estudo aprofundado sobre Exu e prosperidade, abertura de caminhos e a distinção histórica entre as tradições afro-brasileiras e os grimórios europeus.',
    image: ritualExuImg,
    imageAlt: 'Sete chaves antigas de bronze e moedas douradas sobre pedra escura representando abertura de caminhos',
    author: 'Conselho Editorial Aurea Arcana',
    authorRole: 'Núcleo de Estudos Tradicionais Afro-Brasileiros',
    dateDisplay: '18 de Setembro de 2026',
    isoDate: '2026-09-18',
    readTime: '8 min de leitura',
    category: 'Exu',
    traditionBadge: 'Tradição Afro-Brasileira (Sem Sincretismo Europeu)',
    sections: [
      {
        heading: 'O Princípio Dinâmico da Existência e o Espaço do Mercado (Ojà)',
        paragraphs: [
          'Nas tradições de matriz iorubá e afro-brasileira, a estagnação é o oposto da vida. Tudo o que cresce, germina, negocia e se transforma depende de um princípio vital de movimento e comunicação. Esse princípio é Exu.',
          'Tradicionalmente, o mercado (Ojà) — o lugar onde as pessoas se encontram para trocar bens, palavras, valores e sustento — é o domínio por excelência de Exu. Por isso, a relação entre Exu e a prosperidade não nasce de uma visão supersticiosa de enriquecimento milagroso, mas da compreensão de que a riqueza humana exige circulação, estratégia, oportunidade e proteção nas estradas.',
        ],
      },
      {
        heading: 'A Distinção Obrigatória: Exu Não É Daemon Salomônico',
        paragraphs: [
          'Um dos compromissos inegociáveis da Aurea Arcana é a clareza histórica. Durante o período colonial e, mais recentemente, em certos ambientes esotéricos sincréticos da internet, tentou-se associar Exu aos espíritos catalogados em grimórios europeus renascentistas (como a Ars Goetia).',
          'Do ponto de vista histórico, antropológico e espiritual, trata-se de duas tradições completamente distintas:',
        ],
        subheadings: [
          {
            title: '1. Raiz Afro-Brasileira e Africana',
            text: 'Exu pertence à cosmovisão africana e às religiões afro-brasileiras (Candomblé, Umbanda e Quimbanda, cada qual com sua liturgia própria). Ele atua mediante reciprocidade, vitalidade (Axé), pontos riscados em pemba, ervas e firmezas.',
          },
          {
            title: '2. Raiz Europeia e Salomônica',
            text: 'Os Daemons pertencem à tradição helenística grega (daimon enquanto gênio ou inteligência intermediária) e aos manuscritos cerimonialistas europeus dos séculos XVI e XVII, que operam com latim, hebraico, círculos salomônicos e horas planetárias.',
          },
        ],
      },
      {
        heading: 'Como Honrar a Abertura de Caminhos no Cotidiano',
        paragraphs: [
          'Respeitar o fundamento de abertura de caminhos começa pela palavra honrada, pela limpeza do ambiente de trabalho e pelo uso consciente de banhos de movimento (como folhas de pitanga, manjericão roxo, alecrim e louro) aliados a uma postura ativa diante das encruzilhadas profissionais.',
        ],
      },
    ],
    relatedProductSlugs: ['magias-de-prosperidade-com-exu', 'grimorio-da-prosperidade'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
  {
    id: 'art-significado-da-pemba',
    slug: 'significado-da-pemba-geometria-sagrada-e-cores',
    title: 'O Significado da Pemba: Geometria Sagrada, Origem Ancestral e o Uso das Cores',
    excerpt:
      'Da argila branca sagrada (Mpemba) das tradições bantu à escrita gráfica dos pontos riscados no Brasil: conheça o simbolismo desse instrumento fundamental.',
    metaDescription:
      'Descubra o significado da pemba, sua origem ancestral bantu, o simbolismo das cores e a geometria sagrada dos pontos riscados nas tradições afro-brasileiras.',
    image: ervasImg,
    imageAlt: 'Elementos tradicionais de altar com ervas e minerais sagrados',
    author: 'Conselho Editorial Aurea Arcana',
    authorRole: 'Pesquisa em Simbologia e Liturgia',
    dateDisplay: '14 de Setembro de 2026',
    isoDate: '2026-09-14',
    readTime: '7 min de leitura',
    category: 'Pemba',
    traditionBadge: 'Matrizes Bantu / Kongo e Umbanda',
    sections: [
      {
        heading: 'O Que É a Pemba em Sua Raiz Tradicional?',
        paragraphs: [
          'A palavra "pemba" deriva do quicongo "mpemba", que designa o caulim ou argila branca sagrada extraída dos leitos fluviais na África Central. Na cosmologia Kongo, o mundo espiritual dos ancestrais é chamado de Mpemba — o lugar da pureza, da sabedoria antiga e da claridade.',
          'Ao traçar um sinal com a pemba no solo ou sobre uma tábua consagrada, o praticante não está fazendo um mero desenho decorativo: está inscrevendo uma grafia ritualística que condensa intenção, linhagem e direção espiritual.',
        ],
      },
      {
        heading: 'As Cores da Pemba e Suas Correspondências Simbólicas',
        paragraphs: [
          'Embora a pemba branca seja a matriz universal de todas as operações de luz, limpeza e firmeza, o desenvolvimento litúrgico brasileiro consagrou também o uso de pembas pigmentadas para finalidades específicas:',
        ],
        subheadings: [
          {
            title: 'Pemba Branca',
            text: 'Paz, equilíbrio, purificação universal, conexão com a coroa espiritual e fechamento de proteção.',
          },
          {
            title: 'Pemba Amarela / Dourada',
            text: 'Associada à prosperidade, clareza intelectual, fluxo material e vitalidade solar.',
          },
          {
            title: 'Pemba Vermelha e Preta',
            text: 'Tradicionalmente vinculadas ao dinamismo, guarda de portais, corte de demandas e movimentação de caminhos.',
          },
        ],
      },
    ],
    relatedProductSlugs: ['magias-de-prosperidade-com-exu', 'grimorio-da-prosperidade'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
  {
    id: 'art-ervas-para-prosperidade',
    slug: 'ervas-para-prosperidade-banhos-e-defumacoes-tradicionais',
    title: 'Ervas para Prosperidade e Abertura de Caminhos: A Ciência dos Banhos e Defumações',
    excerpt:
      'Louro, alecrim, canela, manjericão, mirra e olíbano: aprenda a diferença entre ervas de limpeza (quentes) e ervas de atração (mornas) e como preparar seus banhos sem erros.',
    metaDescription:
      'Guia completo de ervas para prosperidade, banhos de abertura de caminhos e defumações tradicionais com louro, canela, alecrim e resinas sagradas.',
    image: ervasImg,
    imageAlt: 'Ramos de alecrim, folhas de louro, canela em pau e incensário de latão com fumaça aromática',
    author: 'Helena Vasconcelos',
    authorRole: 'Herbalista Esotérica & Pesquisadora',
    dateDisplay: '10 de Setembro de 2026',
    isoDate: '2026-09-10',
    readTime: '9 min de leitura',
    category: 'Ervas',
    traditionBadge: 'Fitoterapia Esotérica & Sabedoria Botânica',
    sections: [
      {
        heading: 'Por Que Limpar Antes de Imantar?',
        paragraphs: [
          'Um erro recorrente entre iniciantes é preparar banhos doces ou atrativos (com canela, cravo, anis-estrelado e pétalas amarelas) quando o campo pessoal ainda se encontra sobrecarregado de fadiga mental, irritação e estresse acumulado.',
          'Na sabedoria tradicional das ervas, todo trabalho de prosperidade divide-se em dois movimentos complementares: primeiro o descarrego ou purificação (que remove o peso), e em seguida a imantação ou abertura (que nutre e expande).',
        ],
      },
      {
        heading: 'As 5 Plantas Clássicas da Prosperidade e Seu Preparo Correto',
        paragraphs: [
          'Cada parte da planta exige um método térmico específico para liberar seus óleos essenciais e seu princípio simbólico:',
        ],
        subheadings: [
          {
            title: '1. Louro (Laurus nobilis)',
            text: 'Símbolo greco-romano de vitória solar e triunfo. Suas folhas secas podem ser infundidas em água quente (sem ferver as folhas diretamente) ou queimadas na brasa do turíbulo.',
          },
          {
            title: '2. Alecrim (Rosmarinus officinalis)',
            text: 'Erva morna de clareza mental, alegria e foco. Excelente para estudantes e empreendedores antes de reuniões importantes.',
          },
          {
            title: '3. Canela em Casca (Cinnamomum verum)',
            text: 'Por ser uma casca rígida, pode ser fervida por 3 a 5 minutos (decocção). Deve ser usada com moderação para evitar irritação em peles sensíveis.',
          },
        ],
      },
    ],
    relatedProductSlugs: ['grimorio-da-prosperidade', 'magias-de-prosperidade-com-exu'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
  {
    id: 'art-magia-planetaria-jupiter',
    slug: 'magia-planetaria-de-jupiter-e-o-portal-da-prosperidade',
    title: 'Magia Planetária e a Esfera de Júpiter: Horas Celestes, Kamea e Simbologia da Riqueza',
    excerpt:
      'Como os filósofos renascentistas e hermetistas utilizavam o dia e a hora de Júpiter, o quadrado mágico de soma 136 e o simbolismo do número 10 para consagrar realizações.',
    metaDescription:
      'Aprenda como funciona a magia planetária de Júpiter para prosperidade, o cálculo das horas planetárias e o significado hermético do Portal 10/10.',
    image: planetariaImg,
    imageAlt: 'Esfera armilar e mapa celeste com símbolos de Júpiter e do Sol em folha de ouro',
    author: 'Dr. Marcos Aurelius Viana',
    authorRole: 'Historiador do Hermetismo Ocidental',
    dateDisplay: '24 de Setembro de 2026',
    isoDate: '2026-09-24',
    readTime: '10 min de leitura',
    category: 'Magia',
    traditionBadge: 'Hermetismo Clássico & Magia Planetária',
    sections: [
      {
        heading: 'Júpiter: O Grande Benéfico da Tradição Clássica',
        paragraphs: [
          'Na astrologia helenística, árabe e renascentista, Júpiter (chamado de Tzedek na tradição cabalística e Fortuna Maior pelos latinos) é o regente da expansão ordenada, da justiça, da magnanimidade, dos grandes empreendimentos e da abundância estável.',
          'Diferentemente da sorte errática, a prosperidade jupteriana está ligada à visão de longo prazo, à ética nos acordos e à capacidade de governar recursos com sabedoria.',
        ],
      },
      {
        heading: 'O Simbolismo do Número 10 e a Roda da Fortuna',
        paragraphs: [
          'Para os pitagóricos, o número 10 (a Tetraktys: 1 + 2 + 3 + 4 = 10) encerra toda a harmonia do cosmos. No Tarot histórico e na Árvore da Vida hermética, o número 10 corresponde à concretização final no plano terreno.',
          'É por essa razão que datas como o dia 10 do mês 10 (10/10) são escolhidas dentro da teurgia simbólica contemporânea como marcos focais para consagrar planos materiais e renovar votos de disciplina e realização.',
        ],
      },
    ],
    relatedProductSlugs: ['grimorio-da-prosperidade', 'magias-de-prosperidade-com-exu'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
  {
    id: 'art-daemons-historia-e-filosofia',
    slug: 'o-que-sao-daemons-historia-filosofia-grega-e-grimorios',
    title: 'O Que São Daemons? Da Filosofia Grega aos Grimórios Salomônicos Europeus',
    excerpt:
      'Uma análise histórica rigorosa sobre o conceito de Daimon em Sócrates e Platão, sua transição nos grimórios medievais e a diferença absoluta em relação às entidades afro-brasileiras.',
    metaDescription:
      'Entenda o que são daemons na história da filosofia grega e nos grimórios salomônicos, sem superstição e sem misturar tradições.',
    image: grimorioImg,
    imageAlt: 'Grimório antigo encadernado em couro preto com selos geométricos dourados',
    author: 'Dr. Marcos Aurelius Viana',
    authorRole: 'Historiador do Hermetismo Ocidental',
    dateDisplay: '05 de Setembro de 2026',
    isoDate: '2026-09-05',
    readTime: '11 min de leitura',
    category: 'Daemons',
    traditionBadge: 'Filosofia Helenística & Grimórios Europeus',
    sections: [
      {
        heading: 'A Etimologia Grega: Daimon Como Inteligência Intermediária',
        paragraphs: [
          'Antes de adquirir qualquer conotação negativa na Idade Média, a palavra grega "daimon" (δαίμων) significava literalmente "aquele que distribui" ou "inteligência divina/intermediária". No Banquete de Platão, Diotima explica que o daimon é o elo que comunica os deuses aos homens e os homens aos deuses.',
          'Daí nasce também o termo grego para a verdadeira realização e plenitude humana: Eudaimonia (literalmente, estar em harmonia com o seu bom daimon).',
        ],
      },
      {
        heading: 'Os Grimórios Salomônicos dos Séculos XVI e XVII',
        paragraphs: [
          'Durante o Renascimento europeu, manuscritos conhecidos como grimórios salomônicos (como o Lemegeton / Ars Goetia e o Grimorium Verum) compilaram catálogos de espíritos associados aos pontos cardeais, aos sete planetas clássicos e a ofícios específicos como retórica, filosofia natural, visibilidade social e descoberta de tesouros.',
          'Estudar esses textos hoje exige maturidade intelectual: seja como documentos históricos da mentalidade europeia, seja como mapas simbólicos das potências e sombras da psique humana.',
        ],
      },
    ],
    relatedProductSlugs: ['grimorio-da-prosperidade', 'magias-de-prosperidade-com-exu'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
  {
    id: 'art-grimorios-historia-e-pratica',
    slug: 'o-que-e-um-grimorio-como-criar-seu-caderno-de-praticas',
    title: 'O Que É um Grimório e Como Estruturar Seu Próprio Caderno de Operações Simbólicas',
    excerpt:
      'Da "gramática" secreta dos sábios antigos ao diário mágico moderno: veja como registrar ciclos lunares, banhos, sonhos e metas de prosperidade com método.',
    metaDescription:
      'Saiba o que é um grimório, sua história no ocultismo ocidental e como organizar seu caderno de práticas espirituais e prosperidade.',
    image: heroPortalImg,
    imageAlt: 'Mesa de estudos com grimório aberto, pena e instrumentos de medição astronômica',
    author: 'Conselho Editorial Aurea Arcana',
    authorRole: 'Estudos de Tradição Escrita',
    dateDisplay: '01 de Setembro de 2026',
    isoDate: '2026-09-01',
    readTime: '6 min de leitura',
    category: 'Grimórios',
    traditionBadge: 'Ocultismo & Tradição Escrita',
    sections: [
      {
        heading: 'A Palavra "Grimório" e a Arte da Gramática Oculta',
        paragraphs: [
          'Etimologicamente, a palavra "grimório" (do francês antigo grimoire) possui a mesma raiz de "gramática" (grammaire). Para o homem medieval e renascentista, saber ler e escrever fórmulas em latim, grego ou alfabetos cifrados era dominar a gramática secreta da natureza.',
          'Manter um grimório pessoal é o antídoto contra a dispersão espiritual: nele o praticante anota a data, a fase da Lua, os ingredientes utilizados em um banho ou defumação e as percepções colhidas nas semanas seguintes.',
        ],
      },
    ],
    relatedProductSlugs: ['grimorio-da-prosperidade', 'magias-de-prosperidade-com-exu'],
    relatedRitualSlugs: ['portal-da-prosperidade-10-10'],
  },
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return ARTICLES_DATA.find((a) => a.slug === slug);
}
