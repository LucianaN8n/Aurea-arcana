import grimorioCoverImg from '../assets/images/grimorio_prosperidade_cover_1790550937370.jpg';
import ritualExuImg from '../assets/images/ritual_exu_caminhos_1790550925693.jpg';

export type ProductCategory = 'GRIMÓRIOS' | 'PROSPERIDADE' | 'EXU';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'EXU',
  'GRIMÓRIOS',
  'PROSPERIDADE',
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
    secondaryCategories: ['PROSPERIDADE'],
    traditionLineage: 'Tradições Afro-Brasileiras — Guia de Estudo e Práticas Simbólicas',
    pagesCount: 15,
    formatLabel: 'E-book Digital Completo em PDF (15 páginas) — Liberado após o pagamento',
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
    nextRecommendedRitualSlug: 'portal-da-prosperidade-10-10',
    upsellProductSlug: 'grimorio-da-prosperidade',
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
    secondaryCategories: ['PROSPERIDADE'],
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
    upsellProductSlug: 'magias-de-prosperidade-com-exu',
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}
