# Ajustes do hero mobile

## O que muda

1. **Rosto sem escurecimento** — hoje um degradê cobre toda a foto, inclusive o rosto. O véu passa a começar somente abaixo do rosto (a partir de ~48% da altura), deixando o topo da imagem totalmente limpo. O texto continua legível porque a área onde ele fica passa a ser sólida.
2. **Foto centralizada** — o enquadramento no mobile passa a centralizar o rosto horizontalmente (em vez de deslocado), com o corte vertical mirando na cabeça/tronco.
3. **Botão mais refinado no mobile** — CTA em largura total no celular, altura consistente, cantos e tipografia mais suaves (texto menor, menos espaçamento entre letras, quebra em duas linhas evitada), voltando ao tamanho automático a partir do tablet.

## Detalhes técnicos

- `src/LandingPage/foto_hero_mobile.tsx`: `object-position` centralizada; degradê vertical redefinido (transparente até ~48%, transição para `--background` até ~72%, sólido depois); remoção do degradê lateral que escurecia o rosto.
- `src/LandingPage/secao_hero.tsx`: ajuste do `padding-top` para casar o início do texto com o novo ponto do degradê.
- `src/Compartilhados/botao_cta.tsx`: variação responsiva — `w-full sm:w-auto`, altura fixa, `text-[11px] sm:text-[13px]`, tracking reduzido no mobile, sombra mais discreta.
