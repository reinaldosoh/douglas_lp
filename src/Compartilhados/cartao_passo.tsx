type PropsCartaoPasso = {
  numero: string;
  titulo: string;
  descricao: string;
};

export function CartaoPasso({ numero, titulo, descricao }: PropsCartaoPasso) {
  return (
    <article className="rounded-2xl border border-border bg-superficie/70 p-6 transition-colors duration-300 hover:border-dourado/40">
      <span className="fonte-display font-light text-2xl text-dourado tabular-nums">{numero}</span>
      <h3 className="mt-4 text-base font-semibold text-foreground">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{descricao}</p>
    </article>
  );
}