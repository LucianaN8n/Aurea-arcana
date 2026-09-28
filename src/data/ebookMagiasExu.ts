export interface EbookPageContent {
  pageNumber: number;
  title: string;
  subtitle?: string;
  isCover?: boolean;
  paragraphs?: string[];
  bullets?: string[];
  afterBulletsParagraphs?: string[];
  italicStanzas?: string[][];
  afterStanzasParagraphs?: string[];
  sigilBox?: {
    type: 'solar' | 'porta' | 'circulacao';
    funcao: string;
    uso: string;
    instrucao: string;
  };
  hasJournalSpace?: boolean;
  worksheetTable?: string[];
  sections?: {
    heading: string;
    body?: string[];
    bullets?: string[];
  }[];
  afterSectionsParagraphs?: string[];
  numberedSteps?: string[];
  summaryTargetPages?: number[];
  highlightQuote?: string;
  footerNote?: string;
}

export const EBOOK_MAGIAS_EXU_PAGES: EbookPageContent[] = [
  {
    pageNumber: 1,
    isCover: true,
    title: 'MAGIAS COM EXU',
    subtitle: 'Fundamentos, proteção, prosperidade e abertura de caminhos',
    paragraphs: [
      'AUREA ARCANA',
      'Guia de estudo e práticas simbólicas',
    ],
  },
  {
    pageNumber: 2,
    title: 'Antes de começar',
    paragraphs: [
      '© 2026 Aurea Arcana. Todos os direitos desta edição são reservados. É proibida a reprodução, distribuição ou comercialização integral ou parcial deste material sem autorização.',
      'Este guia apresenta práticas espirituais e simbólicas em linguagem educativa. Tradições afro-brasileiras não são homogêneas: fundamentos, nomes, saudações e modos de culto podem variar entre casas e linhagens. Este material não substitui orientação religiosa ou sacerdotal.',
      'Segurança: nunca deixe velas, carvão ou fogo sem supervisão. Evite fumaça em ambientes fechados ou próximos a crianças, animais e pessoas com sensibilidade respiratória. Não abandone vidro, metal, plástico, alimentos ou objetos cortantes em vias públicas, matas, cemitérios ou encruzilhadas. Respeite as regras do local e faça descarte responsável.',
    ],
    footerNote:
      'As práticas descritas não garantem resultados financeiros, amorosos, profissionais ou espirituais específicos. Prosperidade também exige decisões e ações concretas.',
  },
  {
    pageNumber: 3,
    title: 'Sumário',
    numberedSteps: [
      '1. Exu sem medo: movimento, comunicação e encruzilhada',
      '2. Exu Orixá e entidades chamadas Exu: por que não são a mesma coisa',
      '3. Ética, respeito e segurança',
      '4. Preparação: banho e defumação',
      '5. Elementos simbólicos: velas, pemba, pontos, ervas e oferendas',
      '6. Firmeza simbólica para proteção do lar',
      '7. Padê simbólico para movimento e abertura de caminhos',
      '8. Prática para trabalho e oportunidades',
      '9. Prática para prosperidade e harmonia',
      '10. Ritual simbólico das Sete Estradas',
      '11. Prática de proteção e encerramento de ciclos',
      '12. Integração: o caminho continua fora do ritual',
    ],
  },
  {
    pageNumber: 4,
    title: '1. Exu sem medo',
    paragraphs: [
      'Exu ocupa um lugar central em diferentes tradições afro-brasileiras e africanas, mas seu significado muda conforme a tradição. Por isso, este guia começa por uma regra simples: não reduzir Exu à figura cristã do Diabo. Essa associação nasceu de processos históricos de demonização de religiões africanas e afro-brasileiras.',
      'Neste material, trabalharemos sobretudo com três ideias simbólicas recorrentes: movimento, comunicação e encruzilhada. A encruzilhada representa escolha e possibilidade. Movimento lembra que intenção sem ação permanece intenção. Comunicação recorda que pedidos também exigem clareza.',
      'Aurea Arcana propõe que cada prática seja acompanhada de uma ação concreta. Se o pedido é trabalho, envie currículos. Se é prosperidade, organize finanças e crie oportunidades. Se é abertura de caminhos, escolha uma porta e caminhe até ela.',
    ],
    highlightQuote:
      'O ritual pode marcar uma decisão. Quem transforma a decisão em trajetória é você.',
  },
  {
    pageNumber: 5,
    title: '2. Exu Orixá e entidades chamadas Exu',
    paragraphs: [
      'É importante não apresentar conceitos diferentes como se fossem idênticos. Em tradições de matriz iorubá, Èṣù/Exu é uma divindade (Orixá). Em vertentes brasileiras, especialmente em diferentes formas de Umbanda e Quimbanda, também encontramos entidades espirituais chamadas Exus, organizadas segundo concepções próprias de cada casa.',
      'Não existe uma única explicação universal que sirva para todas as tradições. Por isso, este guia evita afirmar que todo Exu é ancestral humano, que todas as casas trabalham da mesma maneira ou que um símbolo possui necessariamente o mesmo significado em qualquer linhagem.',
      'Quando uma prática depender de fundamento iniciático ou de uma entidade específica, procure orientação da tradição à qual você pertence.',
    ],
  },
  {
    pageNumber: 6,
    title: '3. Ética, respeito e segurança',
    paragraphs: [
      'Antes de qualquer prática, defina sua intenção em uma frase. Prefira objetivos relacionados à sua própria vida: proteção, clareza, coragem, trabalho, prosperidade, encerramento de ciclos e abertura de possibilidades.',
    ],
    bullets: [
      'Não utilize práticas para ameaçar, perseguir ou controlar outra pessoa.',
      'Não atribua automaticamente dificuldades comuns a feitiços, obsessores ou ataques espirituais.',
      'Não faça oferendas em propriedade privada sem autorização.',
      'Evite poluir espaços públicos. O respeito ao lugar também faz parte do respeito ao rito.',
      'Nunca deixe fogo sem supervisão e mantenha materiais inflamáveis afastados.',
    ],
    highlightQuote:
      'Uma prática espiritual responsável não precisa criar medo para parecer poderosa.',
  },
  {
    pageNumber: 7,
    title: '4. Preparação',
    sections: [
      {
        heading: 'Banho aromático de preparação',
        body: [
          'Uma preparação simples pode ser feita com alecrim. Ferva aproximadamente 1 litro de água, desligue o fogo, acrescente um pequeno punhado da erva e deixe em infusão por alguns minutos. Depois do banho habitual, use a infusão já morna do pescoço para baixo, se não houver alergia ou sensibilidade.',
          'Enquanto realiza o banho, formule uma intenção curta: “Que eu entre nesta prática com clareza, presença e respeito.”',
        ],
      },
      {
        heading: 'Defumação do ambiente',
        body: [
          'Se desejar trabalhar com aroma, prefira incenso ou ervas apropriadas em recipiente resistente ao calor e ambiente ventilado. A fumaça não precisa ser intensa. Pessoas com asma, alergias ou sensibilidade respiratória podem simplesmente abrir as janelas e realizar uma limpeza física do espaço.',
        ],
      },
    ],
  },
  {
    pageNumber: 8,
    title: '5. Elementos simbólicos',
    sections: [
      {
        heading: 'Velas',
        body: [
          'Vermelho e preto aparecem com frequência em representações de Exu em diversas tradições brasileiras. Neste guia, a vela funciona como foco visual de intenção. Se não houver segurança para acendê-la, utilize uma vela elétrica ou simplesmente dispense o elemento.',
        ],
      },
      {
        heading: 'Pemba e pontos',
        body: [
          'A pemba é utilizada em diferentes contextos religiosos para traçar símbolos e pontos. Pontos riscados específicos podem pertencer a fundamentos de casas e entidades; por isso, não reproduza um ponto específico sem conhecer sua origem e orientação. Para exercícios pessoais deste guia, use apenas formas geométricas não atribuídas a uma entidade: círculo, cruzamento de linhas ou caminhos.',
        ],
      },
      {
        heading: 'Alimentos e bebidas',
        body: [
          'Oferendas variam muito conforme tradição e casa. Se utilizar alimentos, escolha quantidades pequenas e faça descarte ambientalmente responsável. Bebidas alcoólicas são opcionais; água pode ser usada como elemento simbólico neste guia.',
        ],
      },
      {
        heading: 'Chaves, moedas e caminhos',
        body: [
          'Uma chave pode representar acesso; moedas, recursos e circulação; linhas divergentes, possibilidades. Aqui esses objetos são usados como símbolos contemplativos, não como garantia de acontecimentos.',
        ],
      },
    ],
  },
  {
    pageNumber: 9,
    title: '6. Firmeza simbólica para proteção do lar',
    paragraphs: [
      'Finalidade: estabelecer um momento de intenção, organização e proteção simbólica do espaço.',
    ],
    bullets: [
      'Materiais: 1 vela vermelha ou branca em suporte seguro (opcional)',
      '1 copo com água',
      '1 chave',
      'Papel e caneta',
    ],
    numberedSteps: [
      '1. Organize e limpe a entrada da casa. Coloque o copo com água e a chave sobre uma superfície segura.',
      '2. No papel, escreva três palavras que definem o ambiente que deseja cultivar, como segurança, respeito e prosperidade.',
      '3. Se usar vela, acenda-a em local protegido e permaneça presente durante todo o tempo.',
      '4. Faça sua saudação conforme sua tradição. Depois diga com suas próprias palavras que aquele lar seja espaço de paz, proteção, trabalho digno e bons encontros.',
      '5. Finalize agradecendo. Guarde a chave como símbolo. Descarte a água normalmente.',
    ],
  },
  {
    pageNumber: 10,
    title: '7. Padê simbólico para movimento e abertura',
    paragraphs: [
      'Finalidade: marcar a decisão de movimentar uma área da vida que esteja estagnada.',
    ],
    bullets: [
      'Farinha de mandioca',
      'Pequena quantidade de azeite de dendê',
      '1 alguidar ou recipiente',
      '1 folha de papel',
      '1 vela opcional',
    ],
    sections: [
      {
        heading: 'Prática',
        body: [
          'Misture uma pequena quantidade de farinha e dendê até obter uma farofa úmida. Enquanto mistura, identifique aquilo que depende de você para começar a se mover.',
          'No papel, escreva: CAMINHO QUE QUERO ABRIR. Abaixo, descreva o objetivo. Depois escreva três ações concretas que realizará nas próximas 72 horas.',
          'Faça a saudação compatível com sua prática religiosa, se houver, e formule seu pedido sem exigir resultado específico. Ao terminar, agradeça.',
          'O passo essencial: nas próximas 72 horas execute pelo menos uma das três ações escritas. O exercício perde seu sentido se toda responsabilidade for transferida ao ritual.',
        ],
      },
    ],
  },
  {
    pageNumber: 11,
    title: '8. Trabalho e oportunidades',
    paragraphs: [
      'Separe sete moedas e uma folha de louro. Disponha as moedas em uma linha crescente diante de você. Cada moeda representará uma etapa: conhecimento, preparação, contato, oportunidade, negociação, trabalho e crescimento.',
      'Escreva uma oportunidade profissional que deseja buscar e três movimentos objetivos: por exemplo, atualizar currículo, falar com três contatos e enviar cinco propostas.',
      'Passe alguns minutos visualizando não apenas o resultado, mas você realizando essas ações. Guarde uma moeda na carteira como lembrete durante sete dias. Depois, coloque todas novamente em circulação.',
    ],
  },
  {
    pageNumber: 12,
    title: '9. Prosperidade e harmonia',
    paragraphs: [
      'Esta prática usa mel e louro apenas como símbolos de doçura, vitória e abundância. Em um pequeno recipiente, coloque farinha e uma quantidade moderada de mel. Disponha três folhas de louro ao redor.',
      'Escreva uma frase de prosperidade que não dependa de garantia sobrenatural, como: “Que eu reconheça oportunidades, administre melhor meus recursos e tenha coragem para expandir meu trabalho.”',
      'Em seguida, escolha uma ação financeira concreta para as próximas 24 horas: cobrar um cliente, divulgar um produto, rever despesas, fazer uma proposta ou iniciar uma negociação.',
    ],
  },
  {
    pageNumber: 13,
    title: '10. Ritual simbólico das Sete Estradas',
    paragraphs: [
      'Finalidade: refletir sobre sete áreas da vida e escolher quais precisam de movimento.',
    ],
    bullets: [
      '7 tiras de papel',
      'Caneta',
      '1 chave',
      '1 vela opcional em suporte seguro',
    ],
    sections: [
      {
        heading: 'Prática',
        body: [
          'Escreva em cada tira uma área: trabalho, dinheiro, relacionamentos, saúde e autocuidado, estudos, espiritualidade e projetos. Em cada uma, anote um obstáculo e uma ação possível.',
          'Disponha as sete tiras partindo de um ponto central, como sete estradas. Coloque a chave no centro. Observe cada caminho e pergunte: qual destes depende de uma decisão que venho adiando?',
          'Escolha uma única estrada para começar. Faça sua oração ou saudação pessoal e encerre recolhendo os papéis. Durante os sete dias seguintes, acompanhe a ação escolhida.',
        ],
      },
    ],
  },
  {
    pageNumber: 14,
    title: '11. Proteção e encerramento de ciclos',
    paragraphs: [
      'Em vez de direcionar uma prática contra uma pessoa específica, esta proposta trabalha limites e encerramento.',
      'Escreva em um papel aquilo que deseja deixar de alimentar: um hábito, conflito, padrão ou situação. Em outro papel escreva o limite que deseja estabelecer.',
      'Dobre o primeiro papel e coloque-o dentro de um envelope. Feche-o e diga: “O que termina aqui não governa meu próximo caminho.” Guarde o segundo papel durante sete dias e transforme o limite escrito em uma atitude concreta.',
      'Depois, descarte o envelope no lixo comum. Não é necessário abandonar objetos em cemitérios ou encruzilhadas.',
    ],
  },
  {
    pageNumber: 15,
    title: '12. O caminho continua fora do ritual',
    paragraphs: [
      'Você chegou ao final deste guia com uma ideia central: movimento. O símbolo pode organizar intenção, marcar uma passagem e criar um momento de presença. Mas nenhum objeto substitui escolhas, trabalho e responsabilidade.',
      'Se o tema é prosperidade, movimente recursos. Se é trabalho, movimente contatos. Se é proteção, estabeleça limites. Se é abertura de caminhos, caminhe.',
    ],
    highlightQuote:
      'A encruzilhada não é apenas o lugar onde estradas se encontram. É também a imagem de uma decisão.',
    footerNote: 'AUREA ARCANA · Conhecimento • Simbolismo • Caminhos',
  },
];

const OLD_UNLOCKED_STORAGE_KEY = 'aurea_arcana_unlocked_ebooks';
const VERIFIED_PAYMENT_STORAGE_KEY = 'aurea_arcana_mp_verified_payments_v5';

export interface VerifiedPaymentRecord {
  slug: string;
  mpPaymentId: string;
  mpStatus: 'approved';
  paidAmount: number;
  buyerEmail: string;
  verifiedAt: string;
}

// Clean up any legacy unverified unlocks immediately
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem(OLD_UNLOCKED_STORAGE_KEY);
    localStorage.removeItem('aurea_arcana_verified_payments_v3');
    localStorage.removeItem('aurea_arcana_verified_payments_v4');
  } catch {
    // ignore storage errors
  }
}

export function isEbookUnlocked(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.removeItem(OLD_UNLOCKED_STORAGE_KEY);
    const records: VerifiedPaymentRecord[] = JSON.parse(
      localStorage.getItem(VERIFIED_PAYMENT_STORAGE_KEY) || '[]'
    );
    return records.some(
      (r) =>
        (r.slug === slug || r.slug === 'biblioteca-secreta-da-prosperidade') &&
        r.mpStatus === 'approved' &&
        Boolean(r.mpPaymentId && r.mpPaymentId.trim().length > 0) &&
        Boolean(r.buyerEmail)
    );
  } catch {
    return false;
  }
}

export function unlockEbookWithVerifiedPayment(record: VerifiedPaymentRecord): void {
  if (typeof window === 'undefined') return;
  try {
    const records: VerifiedPaymentRecord[] = JSON.parse(
      localStorage.getItem(VERIFIED_PAYMENT_STORAGE_KEY) || '[]'
    );
    records.push(record);
    localStorage.setItem(VERIFIED_PAYMENT_STORAGE_KEY, JSON.stringify(records));
    window.dispatchEvent(new Event('ebook-unlocked'));
  } catch {
    // ignore storage errors
  }
}

export function lockEbook(slug?: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(OLD_UNLOCKED_STORAGE_KEY);
    if (!slug) {
      localStorage.removeItem(VERIFIED_PAYMENT_STORAGE_KEY);
    } else {
      const records: VerifiedPaymentRecord[] = JSON.parse(
        localStorage.getItem(VERIFIED_PAYMENT_STORAGE_KEY) || '[]'
      );
      const filtered = records.filter((r) => r.slug !== slug);
      localStorage.setItem(VERIFIED_PAYMENT_STORAGE_KEY, JSON.stringify(filtered));
    }
    window.dispatchEvent(new Event('ebook-unlocked'));
  } catch {
    // ignore storage errors
  }
}
