export const site = {
  name: "MS Catalani",
  legalName: "MS Catalani Contabilidade",
  url: "https://ms-catalani.onrender.com",
  tagline: "Excelência que organiza. Confiança que transforma.",
  slogan: ["Excelência que organiza", "Confiança que transforma"],
  description:
    "MS Catalani Contabilidade — excelência que organiza, confiança que transforma. Contadora há 19 anos: abertura de empresa, MEI, IR, rotina fiscal, folha e consultoria tributária.",
  ownerName: "Michelle Catalani",
  instagramUrl: "https://www.instagram.com/ms_catalani/",
  instagramHandle: "@ms_catalani",
  ownerInstagramUrl: "https://www.instagram.com/michellecatalani/",
  ownerInstagramHandle: "@michellecatalani",
  email: "mscatalani@gmail.com",
  documentsEmail: "mscatalanicontabilidade@gmail.com",
  hours: "Horário comercial, de segunda a sexta",
  phoneDisplay: "(21) 98466-8722",
  /** DDI + DDD + número, só dígitos. Ex.: 5521999999999 */
  whatsappNumber: "5521984668722",
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
    title: "Imposto de Renda",
    body: "Declaração de IRPF, conferência de rendimentos e orientação para o empresário e a pessoa física — sem deixar documento ou prazo para trás.",
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
] as const;

export const trustItems = [
  {
    label: "Trajetória",
    title: "19 anos de contabilidade",
    body: "Experiência de quem acompanha empresa, regime e obrigação no dia a dia.",
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
    label: "Resultado",
    title: "Números que decidem",
    body: "Clareza fiscal para o negócio crescer com segurança.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Documentação",
    body: "Você encaminha a documentação necessária — identificação, CPF, comprovante de residência e cartão CNPJ, se houver.",
  },
  {
    n: "02",
    title: "Análise",
    body: "Fazemos a análise completa das informações para garantir segurança antes de qualquer procedimento.",
  },
  {
    n: "03",
    title: "Procedimentos",
    body: "Iniciamos os procedimentos conforme a sua necessidade: abertura, regularização, troca de contador ou rotina.",
  },
  {
    n: "04",
    title: "Orientações",
    body: "Ao concluir, você recebe todas as orientações e confirmações — e segue com um canal direto para dúvidas.",
  },
] as const;

export const clientRoutine = [
  {
    day: "02",
    title: "Departamento pessoal",
    body: "Atestados, faltas, horas extras, comissões e férias do mês.",
  },
  {
    day: "05",
    title: "Documentos contábeis",
    body: "XML das notas, serviços tomados, extratos e relatório de despesas, em PDF.",
  },
  {
    day: "20",
    title: "Impostos",
    body: "DAS, INSS, FGTS e ICMS — prazo em dia evita multa.",
  },
] as const;

export const instagramPosts = [
  {
    kicker: "MEI",
    title: "Desenquadramento do MEI",
    body: "Faturamento, nota e contratação mudam o regime. O momento certo evita multa e imposto no escuro.",
  },
  {
    kicker: "IR",
    title: "Imposto de Renda sem susto",
    body: "Declaração, despesas médicas e o que realmente entra na apuração — com prazo e documento em ordem.",
  },
  {
    kicker: "GOV",
    title: "Senha GOV e dois fatores",
    body: "Acesso da empresa não se compartilha no escuro. Verificação em duas etapas é o mínimo de segurança.",
  },
  {
    kicker: "Reforma",
    title: "Regras novas, rotina em dia",
    body: "O que muda no MEI e no IR precisa virar calendário — não um post que você vê e esquece.",
  },
] as const;

export const faqs = [
  {
    q: "Vocês atendem MEI?",
    a: "Sim. Acompanhamos o MEI e, principalmente, o ponto em que ele deixa de ser o melhor enquadramento — para a migração acontecer no tempo certo, não na fiscalização.",
  },
  {
    q: "Vocês fazem Imposto de Renda?",
    a: "Sim. IRPF entra no atendimento: declaração, conferência de rendimentos e o que precisa estar documentado. No Instagram o destaque IR reúne o que mais gera dúvida na época da entrega.",
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
] as const;
