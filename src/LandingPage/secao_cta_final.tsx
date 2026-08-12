import { BotaoCta } from "../Compartilhados/botao_cta";
import { conteudoCtaFinal, linkContato } from "./conteudo_landing";

export function SecaoCtaFinal() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
        <span className="fonte-display font-black text-4xl tracking-[0.2em] text-dourado">
          {conteudoCtaFinal.marca}
        </span>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {conteudoCtaFinal.assinatura}
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
          {conteudoCtaFinal.escopo}
        </p>
        <h2 className="fonte-display font-semibold max-w-2xl text-3xl leading-tight text-foreground md:text-5xl">
          {conteudoCtaFinal.titulo}
        </h2>
        <p className="max-w-xl text-base text-muted-foreground">{conteudoCtaFinal.descricao}</p>
        <BotaoCta texto={conteudoCtaFinal.cta} href={linkContato} />
      </div>
    </footer>
  );
}