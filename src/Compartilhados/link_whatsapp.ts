const NUMERO_WHATSAPP = "5521998529949";

const MENSAGEM_PADRAO =
  "Olá, Douglas! Vim pelo site e gostaria de falar sobre um diagnóstico tributário para a minha empresa.";

export const LINK_WHATSAPP = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
  MENSAGEM_PADRAO,
)}`;
