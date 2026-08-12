import { BotaoCta } from "../Compartilhados/botao_cta";
import { conteudoHero, linkContato, tributosFederais } from "./conteudo_landing";

export function TextoHero() {
  return (
    <div className="-mt-[32px] mx-auto max-w-[36rem] text-center lg:mx-0 lg:max-w-[34rem] lg:text-left">
      {/* Identificação */}
      <p className="-mt-[19px] fonte-display text-base font-semibold leading-none tracking-[0.12em] text-foreground/90 sm:text-xl lg:text-[1.65rem]">
        {conteudoHero.nome.toUpperCase()}
      </p>
      <p className="mx-auto mt-2 max-w-[21rem] text-[0.65rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-dourado sm:max-w-none sm:text-[0.72rem] lg:mx-0 lg:text-sm">
        {conteudoHero.especialidade}
      </p>

      {/* Headline — elemento dominante */}
      <h1 className="mt-6 fonte-display text-[2.35rem] font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:mt-7 sm:text-[2.75rem] lg:mt-8 lg:text-[3.1rem]">
        <span className="block">{conteudoHero.headline[0]}</span>
        <span className="block font-semibold text-dourado lg:inline">
          {conteudoHero.headline[1]}
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-[26rem] text-[0.95rem] font-normal leading-[1.55] text-foreground/75 sm:mt-5 sm:text-lg lg:mx-0">
        {conteudoHero.apoio}
      </p>

      <div className="mt-7 flex flex-col items-center gap-4 sm:mt-9 sm:gap-5 lg:items-start">
        <BotaoCta texto={conteudoHero.cta} href={linkContato} />
        <p className="flex max-w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[0.72rem] font-semibold uppercase leading-relaxed tracking-[0.1em] text-foreground/80 sm:text-sm sm:tracking-[0.12em] lg:justify-start">
          {tributosFederais.map((tributo, indice) => (
            <span key={tributo} className="inline-flex items-center gap-x-2.5 whitespace-nowrap">
              {indice > 0 ? <span className="text-dourado/70">•</span> : null}
              <span>{tributo}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}