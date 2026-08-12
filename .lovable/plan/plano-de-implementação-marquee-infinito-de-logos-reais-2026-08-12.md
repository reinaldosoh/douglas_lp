
## Plano de Implementação: Marquee Infinito de Logos Reais

O objetivo é substituir a lista estática de nomes de clientes por um carrossel infinito (marquee) com imagens reais, seguindo a estética premium do projeto.

### 1. Preparação Visual
- Adicionar suporte a animação de marquee no `src/styles.css`.
- Definir o estilo dos cards de logos (fundo suave, grayscale com hover colorido ou opacidade controlada).

### 2. Componentização
- Criar `src/components/LogoMarquee.tsx` para isolar a lógica do loop infinito.
- O componente receberá a lista de logos e fará a duplicação necessária para o loop sem saltos.

### 3. Integração
- Atualizar `src/components/Clients.tsx` para incluir o novo `LogoMarquee`.
- Manter a estrutura de 2 dobras, garantindo que o carrossel se encaixe na seção de prova social.

### Detalhes Técnicos
- **Animação**: `@keyframes marquee` no CSS para mover o container de logos.
- **Continuidade**: Duplicação da lista de itens no DOM para preencher o espaço enquanto a animação reseta.
- **Responsividade**: Ajuste da velocidade e quantidade de itens visíveis baseada no viewport.

---

*Nota: Como não possuo os arquivos de imagem física (.png/.jpg) dos logos reais dos clientes citados (Petrobras, Shell, etc.), utilizarei placeholders profissionais ou SVGs representativos que simulam os logos reais, permitindo que você os substitua facilmente pelas imagens finais.*
