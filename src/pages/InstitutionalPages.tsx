import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Mail, Clock, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { trackEvent } from '../utils/analytics';

interface PageNavProps {
  onNavigate: (path: string) => void;
}

export const SobrePage: React.FC<PageNavProps> = ({ onNavigate }) => {
  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Sobre a Aurea Arcana — Tradição, Simbologia e Rigor Histórico"
        description="Conheça os princípios filosóficos, históricos e éticos da Aurea Arcana: respeito à autonomia das tradições afro-brasileiras e do ocultismo ocidental."
        canonicalPath="/sobre"
      />

      <div className="mx-auto max-w-4xl space-y-12">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Manifesto Institucional & Curadoria
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
            SOBRE A AUREA ARCANA
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#C8C2B8]">
            A Aurea Arcana nasceu para preencher uma lacuna histórica no cenário esotérico brasileiro: oferecer um portal de alta excelência editorial e ritualística que una profundidade acadêmica, estética de grimório clássico e respeito inegociável à identidade de cada tradição espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
              1. Distinção Rigorosa de Tradições
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A6A29A]">
              Não misturamos Exu, Umbanda, Quimbanda e daemons salomônicos como se fossem a mesma matriz. Quando estudamos a pemba, os banhos e a força dinâmica de Exu, honramos suas raízes afro-brasileiras e africanas. Quando estudamos magia planetária, quadrados mágicos e demonologia histórica, situamos o leitor nos manuscritos helenísticos e renascentistas europeus.
            </p>
          </div>

          <div className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
              2. Ética e Responsabilidade Simbólica
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A6A29A]">
              Rejeitamos promessas enganosas de enriquecimento milagroso, curas sobrenaturais ou amarrações coercitivas. Entendemos o rito, o símbolo e o estudo esotérico como ferramentas de organização da vontade, fortalecimento do poder pessoal, abertura de horizontes e conexão espiritual madura.
            </p>
          </div>
        </div>

        <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              Explore Nosso Acervo e Agenda Ritualística
            </h3>
            <p className="mt-1 text-xs text-[#A6A29A]">
              Conheça as próximas cerimônias coletivas ou inicie seus estudos pela Biblioteca Digital.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/rituais')}
              className="bg-[#D4AF37] px-5 py-3 text-xs font-semibold tracking-wider text-[#07080C]"
            >
              VER RITUAIS
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/biblioteca')}
              className="border border-[#D4AF37]/50 px-5 py-3 text-xs font-semibold tracking-wider text-[#F4EFE6]"
            >
              VER BIBLIOTECA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContatoPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre o Portal 10/10');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    trackEvent('generate_lead', {
      item_name: `Contato Chancelaria: ${subject}`,
      source: 'contact_page',
    });
    setSent(true);
  };

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Contato & Chancelaria — Atendimento Aurea Arcana"
        description="Entre em contato com a Chancelaria da Aurea Arcana por e-mail (atendimento.sanbaoh@gmail.com) para esclarecer dúvidas sobre rituais coletivos e biblioteca digital."
        canonicalPath="/contato"
      />

      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Canais Oficiais de Atendimento
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
          CONTATO & CHANCELARIA
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Mail className="h-5 w-5" />
                <h2 className="font-display text-xl font-semibold text-[#F4EFE6]">
                  E-mail Oficial da Chancelaria
                </h2>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#A6A29A]">
                Atendimento direto por e-mail para dúvidas sobre inscrições em rituais, envio de nomes para o altar e acesso aos PDFs da Biblioteca Digital.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="mt-4 inline-flex items-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
              >
                ENVIAR E-MAIL PARA A CHANCELARIA
              </a>
            </div>

            <div className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6 space-y-3 text-xs text-[#A6A29A]">
              <div className="flex items-center gap-2 text-[#F4EFE6]">
                <Mail className="h-4 w-4 text-[#D4AF37]" />
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#F4EFE6]">
                <Clock className="h-4 w-4 text-[#D4AF37]" />
                <span>{SITE_CONFIG.supportHours}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border border-[#D4AF37]/25 bg-[#0B0F19] p-6 sm:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#D4AF37]" />
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#F4EFE6]">
                  Mensagem Recebida pela Chancelaria
                </h3>
                <p className="mt-2 text-xs text-[#A6A29A]">
                  Responderemos para {email} em até 1 dia útil.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setMessage('');
                  }}
                  className="mt-5 text-xs underline text-[#D4AF37]"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-4 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-4 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    Assunto
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-4 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option>Dúvida sobre o Portal 10/10</option>
                    <option>Dúvida sobre a Biblioteca Digital (PDFs)</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-4 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#D4AF37] px-8 py-3.5 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const generalFaqs = [
    {
      question: 'Como funcionam os Rituais Coletivos da Aurea Arcana?',
      answer:
        'Nossos rituais coletivos são cerimônias reais realizadas em datas astrológicas ou simbólicas específicas (como o Portal 10/10). Ao se inscrever, seu nome completo, data de nascimento e intenções simbólicas são incluídos no Livro de Consagração no altar central, e você recebe um guia em PDF com banho de ervas e prática opcional de sintonização para realizar em casa.',
    },
    {
      question: 'Vocês misturam Umbanda, Quimbanda, Exu e Daemons salomônicos?',
      answer:
        'Jamais. Este é um princípio central da Aurea Arcana. Cada conteúdo e cada ritual explicita claramente sua tradição de origem. Estudos afro-brasileiros sobre Exu e pemba são tratados dentro de sua própria cosmovisão histórica, enquanto estudos sobre magia planetária e daemons seguem a tradição helenística e os grimórios europeus.',
    },
    {
      question: 'Como recebo os livros e grimórios da Biblioteca Digital?',
      answer:
        'Todos os produtos da Biblioteca Digital são entregues em formato PDF de alta resolução imediatamente após a confirmação do pagamento, podendo ser lidos no celular, tablet, computador ou impressos.',
    },
    {
      question: 'Os rituais garantem enriquecimento financeiro ou resultados sobrenaturais certos?',
      answer:
        'Não. Práticas espirituais, simbólicas e ritualísticas pertencem ao campo da fé, da cultura, do autoconhecimento e da experiência pessoal. Nenhuma tradição espiritual séria promete ganhos financeiros garantidos ou substitui o trabalho, o planejamento e a orientação profissional.',
    },
    {
      question: 'Como entro em contato com o suporte ou atendimento?',
      answer: `Você pode entrar em contato diretamente com nossa equipe pelo e-mail oficial ${SITE_CONFIG.contactEmail} ou através do formulário na página Contato & Chancelaria.`,
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Perguntas Frequentes (FAQ) — Rituais, Biblioteca Digital e Círculo"
        description="Tire todas as suas dúvidas sobre os rituais coletivos, produtos digitais em PDF, ética espiritual e funcionamento do Círculo da Prosperidade."
        canonicalPath="/faq"
        jsonLd={faqJsonLd}
      />

      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Central de Esclarecimentos
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
          PERGUNTAS FREQUENTES (FAQ)
        </h1>

        <div className="mt-10 space-y-4">
          {generalFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border border-[#D4AF37]/25 bg-[#0B0F19]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-medium text-[#F4EFE6]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#D4AF37] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#D4AF37]/15 px-5 py-4 text-xs sm:text-sm leading-relaxed text-[#A6A29A]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const PoliticaPrivacidadePage: React.FC = () => (
  <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
    <SeoHead
      title="Política de Privacidade e Proteção de Dados (LGPD)"
      description="Política de Privacidade da Aurea Arcana em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      canonicalPath="/politica-de-privacidade"
    />
    <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[#C8C2B8]">
      <h1 className="font-display text-4xl font-semibold text-[#F4EFE6]">
        POLÍTICA DE PRIVACIDADE
      </h1>
      <p>
        A <strong>{SITE_CONFIG.brandName}</strong> compromete-se com a privacidade, o sigilo litúrgico e a proteção integral dos dados pessoais de seus leitores, alunos e participantes, em estrita observância à Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        1. Coleta de Dados e Finalidade
      </h2>
      <p>
        Coletamos apenas os dados estritamente necessários para: (a) entrega dos produtos digitais adquiridos na Biblioteca; e (b) inscrição nominal nos rituais coletivos (nome de batismo e data de nascimento, mantidos sob absoluto sigilo sacerdotal).
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        2. Sigilo dos Nomes Inscritos em Rituais
      </h2>
      <p>
        Os nomes e intenções confiados para os nossos Livros de Altar jamais são expostos publicamente. Nos relatórios fotográficos enviados após cada cerimônia, os nomes individuais de terceiros são preservados para garantir total discrição.
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        3. Direitos do Titular e Exclusão
      </h2>
      <p>
        A qualquer momento, você pode solicitar a atualização ou exclusão definitiva de seus dados através do e-mail{' '}
        <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#D4AF37] hover:underline">
          {SITE_CONFIG.contactEmail}
        </a>
        .
      </p>
    </div>
  </div>
);

export const TermosUsoPage: React.FC = () => (
  <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
    <SeoHead
      title="Termos de Uso — Aurea Arcana"
      description="Termos e condições de uso dos produtos digitais, conteúdos educacionais e inscrições em rituais da Aurea Arcana."
      canonicalPath="/termos-de-uso"
    />
    <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[#C8C2B8]">
      <h1 className="font-display text-4xl font-semibold text-[#F4EFE6]">TERMOS DE USO</h1>
      <p>
        Ao acessar o portal <strong>{SITE_CONFIG.brandName}</strong>, adquirir nossas publicações digitais ou inscrever-se em nossas cerimônias coletivas, o usuário declara ter lido, compreendido e concordado com os presentes Termos de Uso.
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        1. Propriedade Intelectual dos Grimórios e Artigos
      </h2>
      <p>
        Todos os textos, diagramas simbólicos, tabelas e PDFs disponibilizados na Biblioteca Digital e no Círculo da Prosperidade são de uso estritamente pessoal e intransferível, sendo vedada a comercialização, pirataria ou distribuição pública sem autorização expressa.
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        2. Participação em Rituais Coletivos
      </h2>
      <p>
        A inscrição em rituais coletivos garante a inclusão nominal do participante na operação realizada na data agendada e o acesso ao guia preparatório digital. Por envolver preparação prévia de elementos físicos personalizados para a data do evento, aplica-se o direito de arrependimento legal até o momento anterior à realização da cerimônia.
      </p>
    </div>
  </div>
);

export const AvisoLegalPage: React.FC = () => (
  <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
    <SeoHead
      title="Aviso Legal e Ético — Natureza Simbólica e Espiritual"
      description="Esclarecimento legal e ético sobre a natureza cultural, filosófica e espiritual dos estudos e rituais da Aurea Arcana."
      canonicalPath="/aviso-legal"
    />
    <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[#C8C2B8]">
      <div className="flex items-center gap-3 text-[#D4AF37]">
        <Shield className="h-6 w-6" />
        <span className="text-xs uppercase tracking-widest">Transparência & Responsabilidade</span>
      </div>
      <h1 className="font-display text-4xl font-semibold text-[#F4EFE6]">
        AVISO LEGAL E ÉTICO
      </h1>
      <div className="border border-[#D4AF37]/30 bg-[#0B0F19] p-6 text-[#F4EFE6]">
        {SITE_CONFIG.legalDisclaimer}
      </div>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        Ausência de Promessa de Retorno Financeiro ou Cura Médica
      </h2>
      <p>
        Nenhum artigo, livro digital ou ritual coletivo comercializado neste portal deve ser interpretado como consultoria de investimentos, promessa de lucro garantido, quitação mágica de dívidas ou tratamento médico/psiquiátrico. A prosperidade abordada em nossas obras refere-se ao alinhamento simbólico, ao estudo histórico das tradições e ao desenvolvimento da postura pessoal diante da vida.
      </p>
      <h2 className="font-display text-2xl font-semibold text-[#D4AF37]">
        Respeito às Tradições Religiosas e Históricas
      </h2>
      <p>{SITE_CONFIG.traditionSeparationNotice}</p>
    </div>
  </div>
);
