const NUMERO_WHATSAPP = "5511991465251";

const MENSAGEM_PADRAO =
  "Olá, Douglas! Vim pelo site e gostaria de falar sobre estratégia tributária.";

export function criarLinkWhatsapp(mensagem: string) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

export const LINK_WHATSAPP = criarLinkWhatsapp(MENSAGEM_PADRAO);

export const LINK_WHATSAPP_SIMULAR = criarLinkWhatsapp(
  "Olá, Douglas! Vim pelo site e gostaria de simular uma transação tributária.",
);

export const LINK_WHATSAPP_LEI_DO_BEM = criarLinkWhatsapp(
  "Olá, Douglas! Quero saber como zerar CSLL e IRPJ com a Lei do Bem.",
);

export const LINK_WHATSAPP_MANUAL = criarLinkWhatsapp(
  "Olá, Douglas! Quero receber o manual do Método ARCO.",
);

export const LINK_WHATSAPP_DIAGNOSTICO = criarLinkWhatsapp(
  "Olá, Douglas! Gostaria de solicitar um diagnóstico para pagar menos impostos.",
);
