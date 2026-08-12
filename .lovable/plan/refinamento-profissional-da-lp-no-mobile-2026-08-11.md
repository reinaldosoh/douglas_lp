# Refinamento profissional da LP no mobile

## Objetivo
Eliminar os traços decorativos antes dos títulos e reconstruir a parte inferior do hero mobile para que CTA e tributos tenham hierarquia, respiro e acabamento profissional.

## Alterações
1. **Remover traços antes dos títulos**
   - Retirar o fio horizontal do componente de eyebrow usado nas seções.
   - Retirar também os fios decorativos do hero, incluindo o traço entre identificação e headline e o traço ao lado dos tributos.
   - Preservar apenas tipografia, espaçamento e cor para criar hierarquia.

2. **Rediagramar CTA no mobile**
   - Substituir o botão pesado de largura total por um CTA mais refinado, com altura, padding, tipografia e cantos proporcionais à tela.
   - Garantir que o texto permaneça legível e equilibrado sem parecer uma barra maciça.

3. **Dar destaque aos tributos no mobile**
   - Aumentar `PIS • COFINS • CSLL • IRPJ • IPI`.
   - Posicionar a lista imediatamente associada ao CTA, com quebra controlada e distribuição visual consistente em telas estreitas.
   - Manter desktop sem perda da composição atual.

4. **Validar a primeira dobra**
   - Conferir em 393×852 e em largura de tablet se nome, especialidade, headline, apoio, botão e tributos aparecem sem colisões, cortes ou aparência improvisada.

## Detalhes técnicos
- Ajustes concentrados nos componentes compartilhados de eyebrow/CTA e no bloco de texto do hero.
- Uso dos tokens visuais existentes e comportamento responsivo por breakpoint.
