import { SecaoPagina } from "../Compartilhados/secao_pagina";
import { TituloSecao } from "../Compartilhados/titulo_secao";
import { conteudoGoverno } from "./conteudo_landing";

export function SecaoGovernoEmpresa() {
  return (
    <SecaoPagina alternada>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <TituloSecao eyebrow={conteudoGoverno.eyebrow} titulo={conteudoGoverno.titulo} />
        <div className="space-y-6">
          {conteudoGoverno.paragrafos.map((paragrafo) => (
            <p key={paragrafo} className="text-base leading-relaxed text-muted-foreground">
              {paragrafo}
            </p>
          ))}
          <blockquote className="border-l-2 border-dourado pl-5 fonte-display font-light text-2xl leading-snug text-foreground">
            {conteudoGoverno.frase}
          </blockquote>
        </div>
      </div>
    </SecaoPagina>
  );
}