# Landing Page RX3 — Douglas Couto

Landing page institucional de página única, dark, com estética de autoridade técnica (governo/finanças), inspirada na sobriedade do Businity e no posicionamento pessoal da referência do cliente.

## Identidade visual

- Fundo dominante azul-marinho profundo `#071525`
- Superfícies/seções secundárias `#0D2238`
- Texto branco gelo `#F4F6F8`, secundário em cinza-azulado
- Dourado sóbrio `#B89A5A` só em detalhes: linhas finas, eyebrow de seção, borda de CTA, separadores dos tributos
- Tipografia: display serif institucional nos títulos + sans limpa no corpo
- Cantos arredondados suaves, sombras discretas, transições sutis, sem gradientes coloridos

## Estrutura da página

1. **Hero** — foto do Douglas em destaque, "DOUGLAS COUTO", "Especialista em Estratégias Tributárias Federais" e o headline gigante **MENOS IMPOSTOS. MAIS CAIXA.** com CTA principal
2. **Autoridade** — "Conhecimento construído no Governo Federal" + os parágrafos sobre trajetória e RX3
3. **Inteligência Tributária Federal** — texto do diagnóstico, faixa PIS • COFINS • CSLL • IRPJ • IPI e três passos (Identificamos / Calculamos / Estruturamos)
4. **Lei do Bem** — bloco dedicado ao incentivo de inovação, com fechamento em destaque
5. **Experiência** — grade tipográfica com Petrobras, Shell, BP, Chevron, Repsol, Raízen, Naturgy, White Martins, Globo, Uber, Unitel, Marisa, Leite de Rosas, Prefeitura de Guarulhos + linha de setores
6. **Do Governo para a sua Empresa** — bloco narrativo com a frase de impacto "Antes de buscar dinheiro fora da empresa..."
7. **CTA final / Rodapé** — assinatura RX3, "Inteligência tributária aplicada ao caixa", lista de tributos e botão "Solicite um diagnóstico tributário"

Nesta versão o CTA aponta para WhatsApp/e-mail (link simples). Captura de leads em banco de dados fica para uma etapa seguinte, se você quiser.

## Detalhes técnicos

- Página na rota inicial `/` (`src/routes/index.tsx`), substituindo o placeholder
- Componentização extrema em `src/LandingPage/` com snake_case pt-BR: `secao_hero.tsx`, `secao_autoridade.tsx`, `secao_inteligencia_tributaria.tsx`, `secao_lei_do_bem.tsx`, `secao_experiencia.tsx`, `secao_governo_empresa.tsx`, `secao_cta_final.tsx`, `conteudo_landing.ts`
- Peças reutilizáveis em `src/Compartilhados/`: `titulo_secao.tsx`, `eyebrow_dourado.tsx`, `botao_cta.tsx`, `faixa_tributos.tsx`, `cartao_passo.tsx`, `logo_texto_empresa.tsx`
- Tokens de cor definidos em `src/styles.css` (dark como padrão), sem cores literais nos componentes
- Fontes carregadas via `<link>` no `__root.tsx`
- Foto do Douglas publicada como asset de CDN (pointer `.asset.json`), sem binário no repositório
- SEO: `head()` próprio na rota com título, descrição, og/twitter e og:image com a foto