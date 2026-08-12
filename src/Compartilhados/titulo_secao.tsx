import { EyebrowDourado } from "./eyebrow_dourado";

type PropsTituloSecao = {
  eyebrow?: string;
  titulo: string;
  subtitulo?: string;
  centralizado?: boolean;
};

export function TituloSecao({ eyebrow, titulo, subtitulo, centralizado }: PropsTituloSecao) {
  return (
    <div className={`space-y-5 ${centralizado ? "flex flex-col items-center text-center" : ""}`}>
      {eyebrow ? <EyebrowDourado texto={eyebrow} /> : null}
      <h2 className="fonte-display font-semibold text-[1.75rem] leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
        {titulo}
      </h2>
      {subtitulo ? (
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{subtitulo}</p>
      ) : null}
    </div>
  );
}