# Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework Preset: **Other** (o `vercel.json` já define tudo).
3. Build Command: `npm run build` — Output: gerado pelo Nitro em `.vercel/output` (Build Output API).
4. Variável de build já definida no `vercel.json`: `NITRO_PRESET=vercel`.
5. Domínio: adicione `www.douglascouto.com` em Settings > Domains.

A imagem de compartilhamento (OG) está em `public/og-douglas-couto.png` e é referenciada por URL absoluta em `src/routes/index.tsx`.
