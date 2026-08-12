export const linkContato = "https://wa.me/5511999999999";

export const imagemDouglas = "/images/douglas-couto.jpg";
export const imagemOgLargura = 1672;
export const imagemOgAltura = 941;
export const imagemOgAlt =
  "Douglas Couto, especialista em estratégias tributárias federais — RX3 Soluções Tributárias e Governança";

function origemSite(): string {
  const configurada = import.meta.env.VITE_SITE_URL;
  if (typeof configurada === "string" && configurada.length > 0) {
    return configurada.replace(/\/$/, "");
  }

  const vercel = typeof process !== "undefined" ? process.env.VERCEL_URL : undefined;
  if (vercel) return `https://${vercel}`;

  return "";
}

export function urlAbsoluta(caminho: string): string {
  const origem = origemSite();
  return origem ? `${origem}${caminho}` : caminho;
}

export const tributosFederais = ["PIS", "COFINS", "CSLL", "IRPJ", "IPI"];

export const conteudoHero = {
  nome: "Douglas Couto",
  especialidade: "Especialista em Estratégias Tributárias Federais",
  headline: ["Menos impostos.", "Mais caixa."],
  apoio: "Inteligência tributária federal aplicada ao caixa das empresas.",
  cta: "Solicite um diagnóstico tributário",
};

export const conteudoAutoridade = {
  eyebrow: "Autoridade",
  titulo: "Conhecimento construído no Governo Federal.",
  subtitulo: "Aplicado hoje para gerar eficiência dentro das empresas.",
  paragrafos: [
    "Com décadas de experiência no ambiente do Governo Federal e formação jurídica voltada à área tributária, Douglas Couto transformou conhecimento institucional em estratégia empresarial.",
    "À frente da RX3 Soluções Tributárias e Governança, atua na identificação de benefícios, incentivos e oportunidades previstos na legislação para reduzir legalmente a carga tributária e preservar caixa nas empresas.",
  ],
};

export const conteudoInteligencia = {
  eyebrow: "Diagnóstico",
  titulo: "Inteligência Tributária Federal",
  destaque: "Sua empresa pode estar pagando mais impostos do que precisa.",
  paragrafos: [
    "A RX3 realiza um diagnóstico completo da operação para identificar oportunidades relacionadas aos cinco principais tributos federais.",
    "Analisamos CNPJ, CNAEs, recolhimentos, investimentos e incentivos fiscais para descobrir benefícios que podem não estar sendo integralmente aproveitados.",
  ],
  passos: [
    { numero: "01", titulo: "Identificamos a oportunidade.", descricao: "Leitura técnica da operação, do enquadramento e dos recolhimentos." },
    { numero: "02", titulo: "Calculamos o impacto financeiro.", descricao: "Mensuração objetiva do efeito no caixa da empresa." },
    { numero: "03", titulo: "Estruturamos o aproveitamento.", descricao: "Documentação, fundamentação legal e governança do benefício." },
  ],
};

export const conteudoLeiDoBem = {
  eyebrow: "Lei do Bem",
  titulo: "Transforme investimento em tecnologia e inovação em benefício fiscal.",
  paragrafos: [
    "Empresas que investem em tecnologia, inovação, desenvolvimento de produtos, processos, sistemas e pesquisa & desenvolvimento podem ter acesso a importantes incentivos fiscais.",
    "A RX3 identifica os investimentos elegíveis, estrutura tecnicamente os projetos e busca o máximo aproveitamento permitido pela legislação, com documentação, fundamentação e governança.",
  ],
  fechamento: [
    "Sua empresa já investiu em tecnologia.",
    "Agora descubra quanto desse investimento pode retornar em eficiência tributária.",
  ],
};

export const conteudoExperiencia = {
  eyebrow: "Trajetória",
  titulo: "Experiência que atravessa grandes organizações",
  introducao:
    "Ao longo de sua trajetória profissional, Douglas Couto acumulou experiência em trabalhos envolvendo grandes empresas e instituições nacionais e internacionais.",
  organizacoes: [
    "Petrobras",
    "Shell",
    "BP",
    "Chevron",
    "Repsol",
    "Raízen",
    "Naturgy",
    "White Martins",
    "Globo",
    "Uber",
    "Unitel",
    "Marisa",
    "Leite de Rosas",
    "Prefeitura de Guarulhos",
  ],
  setores:
    "Experiência nos setores de energia, petróleo & gás, tecnologia, telecomunicações, indústria, varejo, mídia e Administração Pública.",
};

export const conteudoGoverno = {
  eyebrow: "Posicionamento",
  titulo: "Do Governo para a sua empresa.",
  paragrafos: [
    "Douglas Couto conhece a legislação federal não apenas sob a perspectiva jurídica, mas pela experiência acumulada durante sua trajetória no ambiente institucional federal.",
    "A RX3 nasceu para transformar esse conhecimento em resultado econômico para empresas.",
  ],
  frase: "Antes de buscar dinheiro fora da empresa, descubra quanto pode estar deixando dentro dela.",
};

export const conteudoCtaFinal = {
  marca: "RX3",
  assinatura: "Inteligência tributária aplicada ao caixa.",
  escopo: "Lei do Bem • PIS • COFINS • CSLL • IRPJ • IPI",
  titulo: "Solicite um diagnóstico tributário",
  descricao: "Descubra as oportunidades existentes dentro da sua empresa.",
  cta: "Solicitar diagnóstico",
};