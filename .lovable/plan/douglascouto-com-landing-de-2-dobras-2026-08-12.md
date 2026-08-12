# douglascouto.com — landing de 2 dobras

Site curto, direto e sofisticado: uma dobra de posicionamento e uma dobra de prova social.

## Dobra 1 — Autoridade

- Fundo azul-noite profundo com textura sutil, header minimalista: "DOUGLAS COUTO" à esquerda, botão "Falar no WhatsApp" à direita.
- Eyebrow em dourado: TRIBUTÁRIO • GOVERNO FEDERAL
- Título serifado grande: **Conhecimento federal que vira caixa.**
- Subtítulo curto (2 linhas): experiência construída no Governo Federal, aplicada hoje para identificar oportunidades tributárias e gerar resultado dentro das empresas.
- Linha de especialidades em letra pequena espaçada: Lei do Bem • PIS • COFINS • CSLL • IRPJ • IPI
- CTA único: botão dourado "Falar com Douglas" → WhatsApp.
- À direita, o retrato do Douglas (foto `douglas.jpg` enviada) tratado com moldura fina dourada e degradê que funde o fundo escuro na imagem.

## Dobra 2 — Clientes

- Título curto: **Quem já esteve do outro lado da mesa.**
- Grade de nomes/marcas em tipografia clara sobre cartões escuros com borda sutil: Petrobras, Shell, BP, Chevron, Repsol, Raízen, Naturgy, White Martins, Globo, Uber, Unitel, Marisa, Leite de Rosas, Prefeitura de Guarulhos.
- Rodapé enxuto: nome, e-mail/WhatsApp e um último CTA em texto.

Sem menu de navegação longo, sem seções extras, sem "saiba mais" genérico. Só duas dobras.

## Direção visual

- Paleta: azul-noite (#0b1526 / #101d33), dourado champanhe (#c9a44c), texto off-white.
- Tipografia: serifada de display para títulos (ar editorial, como nas referências) + sans neutra para textos.
- Cantos retos, molduras finas, animações discretas de fade/subida ao entrar.

## Detalhes técnicos

- Reescrever `src/routes/index.tsx` como a landing (a rota `/` hoje é placeholder), quebrando em componentes `Hero` e `Clients` em `src/components/`.
- Tokens de cor/fonte definidos em `src/styles.css` (`@theme inline` + `:root`), sem cores hardcoded nos componentes.
- Fontes carregadas via `<link>` no `src/routes/__root.tsx`.
- Foto do Douglas publicada via `lovable-assets` a partir do upload, importada como asset.
- `head()` da rota com title/description/og próprios.
- Link do WhatsApp: preciso do número. Enquanto não vier, uso `https://wa.me/55` como placeholder e troco depois.
