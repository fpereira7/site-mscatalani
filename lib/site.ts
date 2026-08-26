export const site = {
  name: "MS Catalani",
  legalName: "MS Catalani Contabilidade",
  tagline: "Contabilidade",
  description:
    "Escritório de contabilidade com atendimento próximo e linguagem clara. Abertura de empresa, MEI, rotina fiscal, folha e consultoria tributária.",
  instagramUrl: "https://www.instagram.com/ms_catalani/",
  instagramHandle: "@ms_catalani",
  /** DDI + DDD + número, só dígitos. Ex.: 5521999999999 */
  whatsappNumber: "5521987611124",
  whatsappPrefill:
    "Olá! Vim pelo site da MS Catalani e gostaria de conversar sobre contabilidade.",
} as const;

export type PrimaryCta = {
  href: string;
  label: string;
  shortLabel: string;
  kind: "whatsapp" | "instagram";
};

export function primaryCta(): PrimaryCta {
  if (site.whatsappNumber) {
    const text = encodeURIComponent(site.whatsappPrefill);
    return {
      href: `https://wa.me/${site.whatsappNumber}?text=${text}`,
      label: "Falar no WhatsApp",
      shortLabel: "WhatsApp",
      kind: "whatsapp",
    };
  }

  return {
    href: site.instagramUrl,
    label: "Falar no Instagram",
    shortLabel: "Instagram",
    kind: "instagram",
  };
}

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#instagram", label: "Instagram" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export const services = [
  {
    title: "Abertura e regularização",
    body: "Constituição de empresa, enquadramento e regularização cadastral com orientação sobre o caminho mais adequado ao seu negócio.",
  },
  {
    title: "MEI e mudança de regime",
    body: "Acompanhamento do MEI e o momento certo de migrar — para não crescer no regime errado nem pagar imposto a mais.",
  },
  {
    title: "Rotina fiscal",
    body: "Apuração, obrigações acessórias e prazos em dia. Você recebe o que precisa decidir, sem surpresa na fiscalização.",
  },
  {
    title: "Folha e departamento pessoal",
    body: "Admissões, folhas, encargos e rotinas trabalhistas com organização, para a operação não parar no meio do mês.",
  },
  {
    title: "Consultoria tributária",
    body: "Simples Nacional, Lucro Presumido ou Lucro Real: análise do regime, da carga e das obrigações que realmente cabem à empresa.",
  },
  {
    title: "Organização financeira",
    body: "Apoio para o empresário enxergar o caixa, as contas e a rotina — a ponta que liga a contabilidade à decisão do dia a dia.",
  },
] as const;

export const trustItems = [
  {
    label: "Rotina",
    title: "Fiscal em dia",
    body: "Obrigações, prazos e entregas acompanhados com método.",
  },
  {
    label: "Regimes",
    title: "Do MEI ao Lucro Real",
    body: "Orientação conforme o porte e a atividade da empresa.",
  },
  {
    label: "Atendimento",
    title: "Próximo e humano",
    body: "Um interlocutor que explica, em vez de só enviar guia.",
  },
  {
    label: "Linguagem",
    title: "Clareza primeiro",
    body: "Decisões tributárias traduzidas sem jargão desnecessário.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Conversa inicial",
    body: "Você conta o momento da empresa: abertura, troca de contador, MEI ou rotina que precisa de ordem.",
  },
  {
    n: "02",
    title: "Diagnóstico",
    body: "Olhamos documentos, regime e obrigações. O que está em dia, o que precisa regularizar, o que pode ser mais simples.",
  },
  {
    n: "03",
    title: "Enquadramento",
    body: "Definimos o caminho — constituição, migração ou ajuste da rotina — com prazos e responsabilidades claros.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    body: "A contabilidade entra no ritmo do negócio: fiscal, folha e um canal direto para tirar dúvida quando ela aparece.",
  },
] as const;

export const instagramPosts = [
  {
    kicker: "MEI",
    title: "Quando é hora de deixar o MEI?",
    body: "Faturamento, nota fiscal e contratação mudam o jogo. O regime certo evita multa e imposto no escuro.",
  },
  {
    kicker: "Abertura",
    title: "Abrir empresa sem surpresa",
    body: "CNAE, contrato e enquadramento tributário definidos antes do CNPJ — não depois da primeira guia.",
  },
  {
    kicker: "Fiscal",
    title: "Obrigação acessória em dia",
    body: "DCTF, EFD, DEFIS e as entregas do seu regime. Quem atrasa, paga duas vezes: multa e tempo.",
  },
  {
    kicker: "Tributos",
    title: "Simples, Presumido ou Real?",
    body: "Não existe regime “melhor”. Existe o que cabe à margem, à atividade e ao momento da empresa.",
  },
] as const;

export const faqs = [
  {
    q: "Vocês atendem MEI?",
    a: "Sim. Acompanhamos o MEI e, principalmente, o ponto em que ele deixa de ser o melhor enquadramento — para a migração acontecer no tempo certo, não na fiscalização.",
  },
  {
    q: "Como funciona a troca de contador?",
    a: "Você pede a transferência da responsabilidade técnica e a pasta digital (ou física) da empresa. Organizamos a transição para a rotina não ficar sem entregas no meio do caminho.",
  },
  {
    q: "Quais documentos preciso para abrir uma empresa?",
    a: "Em geral: documentos dos sócios, comprovante de endereço, atividade pretendida e definição do tipo societário. Na conversa inicial alinhamos a lista completa para o seu caso — inclusive CNAE e regime.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "O canal principal é o WhatsApp, com conversa direta. Também estamos no Instagram @ms_catalani. Combinamos o formato de trabalho — digital e, quando fizer sentido, presencial — conforme a necessidade da empresa.",
  },
  {
    q: "Em quanto tempo a rotina começa?",
    a: "Depende da documentação e de haver ou não pendências anteriores. Depois do diagnóstico, alinhamos um calendário objetivo: o que entra na primeira quinzena e o que fica para o ciclo seguinte.",
  },
  {
    q: "Vocês ajudam com emissão de nota fiscal?",
    a: "Orientamos o enquadramento, a inscrição e o fluxo para a empresa emitir corretamente. A emissão do dia a dia continua com você; a contabilidade garante que o que foi emitido feche com a apuração.",
  },
] as const;
