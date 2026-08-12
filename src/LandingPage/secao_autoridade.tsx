import { SecaoPagina } from "../Compartilhados/secao_pagina";
import { TituloSecao } from "../Compartilhados/titulo_secao";
import { conteudoAutoridade } from "./conteudo_landing";

export function SecaoAutoridade() {
  return (
    <SecaoPagina alternada>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <TituloSecao
          eyebrow={conteudoAutoridade.eyebrow}
          titulo={conteudoAutoridade.titulo}
          subtitulo={conteudoAutoridade.subtitulo}
        />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:pt-6">
          {conteudoAutoridade.paragrafos.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </SecaoPagina>
  );
}