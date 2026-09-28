export interface FunnelStepConfig {
  stage: 'CONTEÚDO GRATUITO' | 'PRODUTO DE ENTRADA' | 'BIBLIOTECA / COMBO' | 'RITUAL COLETIVO' | 'ASSINATURA' | 'FORMAÇÕES PREMIUM';
  title: string;
  description: string;
  ctaLabel: string;
  targetUrl: string;
  priceLabel: string;
}

export const SITE_CONFIG = {
  brandName: 'AUREA ARCANA',
  brandTagline: 'Portal de Estudos Simbólicos, Ocultismo & Prosperidade',
  domain: 'https://aureaarcana.com.br',
  contactEmail: 'atendimento.sanbaoh@gmail.com',
  pixKey: '229d5a5f-8d4c-410e-a785-c924064ae30c',
  supportHours: 'Segunda a Sexta, das 10h às 19h (Horário de Brasília)',
  whatsapp: {
    phone: '5511999999999',
    defaultMessage: 'Olá! Vim pelo portal e gostaria de saber mais sobre os próximos rituais.',
  },
  analytics: {
    ga4MeasurementId: 'G-AUREA1010BR',
    gtmContainerId: 'GTM-ARCANA10',
    metaPixelId: '101020269999999',
    googleAdsId: 'AW-1010202699',
  },
  legalDisclaimer:
    'Aviso Legal e Ético: Todas as práticas espirituais, simbólicas e ritualísticas apresentadas neste portal pertencem exclusivamente ao campo da experiência pessoal, filosófica, cultural e religiosa/espiritual. O estudo de tradições esotéricas e a participação em rituais simbólicos não substituem orientação médica, psicológica, jurídica ou financeira profissional, tampouco constituem promessa ou garantia de resultados materiais, enriquecimento ou retorno financeiro específico.',
  traditionSeparationNotice:
    'Rigor Histórico e Tradicional: A Aurea Arcana preserva a integridade de cada vertente estudada. Conhecimentos de matriz afro-brasileira (como o estudo sobre Exu, pemba e banhos rituais em suas respectivas tradições de Umbanda ou Quimbanda) jamais são confundidos ou sincretizados indevidamente com a demonologia histórica europeia, grimórios salomônicos ou estudos helenísticos sobre daemons.',
  subscription: {
    name: 'Círculo da Prosperidade',
    slug: 'circulo-da-prosperidade',
    headline: 'UM NOVO CICLO. UMA NOVA PRÁTICA. TODOS OS MESES.',
    subheadline:
      'Uma confraria digital de estudos contínuos, práticas sazonais e alinhamento simbólico para quem compreende que a prosperidade e o poder pessoal são construídos com constância, método e repertório.',
    monthlyPrice: 39.9,
    annualPricePerMonth: 33.25,
    checkoutUrl: 'https://pay.aureaarcana.com.br/checkout/circulo-da-prosperidade',
    benefits: [
      {
        title: '1 Ritual Coletivo Mensal de Lua Nova',
        description:
          'Participação inclusa na consagração coletiva mensal de abertura de ciclo, com orientações prévias e registro em ata litúrgica.',
      },
      {
        title: 'Novo Conteúdo Digital Inédito Todos os Meses',
        description:
          'Todo dia 1º um novo fascículo em alta definição (grimório temático, tratado de ervas ou estudo histórico) é adicionado ao seu acervo.',
      },
      {
        title: 'Biblioteca Exclusiva de Membros',
        description:
          'Acesso imediato ao acervo de fascículos anteriores, tabelas de correspondências planetárias, cânticos e diagramas simbólicos.',
      },
      {
        title: 'Prática Mensal Guiada',
        description:
          'Roteiro prático passo a passo com materiais simples e acessíveis para você realizar em seu próprio espaço com autonomia e segurança.',
      },
      {
        title: 'Calendário Esotérico Mensal Comentado',
        description:
          'Mapa completo das fases lunares, horas planetárias de Júpiter e do Sol, e dias propícios para movimentação, corte ou recolhimento.',
      },
      {
        title: 'Estudos Exclusivos com Distinção de Tradições',
        description:
          'Aulas e dossiês escritos que aprofundam tanto nas raízes afro-brasileiras quanto no hermetismo ocidental, mantendo cada tradição em seu devido contexto.',
      },
    ],
  },
  funnelSteps: [
    {
      stage: 'CONTEÚDO GRATUITO',
      title: 'Portal de Conhecimento & Artigos',
      description: 'Fundamentos históricos, simbologia da pemba, ervas, magia planetária e estudos abertos.',
      ctaLabel: 'Ler Artigos Gratuitos',
      targetUrl: '/conhecimento',
      priceLabel: 'Gratuito',
    },
    {
      stage: 'PRODUTO DE ENTRADA',
      title: 'Magias de Prosperidade com Exu',
      description: 'Guia prático de 15 páginas sobre movimento, comunicação, encruzilhada e 6 práticas simbólicas.',
      ctaLabel: 'Ver Magias com Exu',
      targetUrl: '/biblioteca/magias-de-prosperidade-com-exu',
      priceLabel: 'R$ 49,90',
    },
    {
      stage: 'BIBLIOTECA / COMBO',
      title: 'Grimório da Prosperidade',
      description: 'Compêndio de 30 páginas com orações herméticas, 3 sigilos autorais, ciclos lunares e Ritual dos 7 Dias.',
      ctaLabel: 'Conhecer o Grimório',
      targetUrl: '/biblioteca/grimorio-da-prosperidade',
      priceLabel: 'R$ 49,90',
    },
    {
      stage: 'RITUAL COLETIVO',
      title: 'Portal 10/10 — Prosperidade com Bune',
      description: 'Operação cerimonial coletiva com o Duque Bune no Portal 10/10 para abertura de caminhos e prosperidade.',
      ctaLabel: 'Conhecer o Portal 10/10',
      targetUrl: '/rituais/portal-da-prosperidade-10-10',
      priceLabel: 'R$ 97,00',
    },
  ] as FunnelStepConfig[],
};

export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsapp.phone}?text=${message}`;
}
