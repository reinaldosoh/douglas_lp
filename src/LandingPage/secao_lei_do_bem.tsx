import { SecaoPagina } from "../Compartilhados/secao_pagina";
import { TituloSecao } from "../Compartilhados/titulo_secao";
import { conteudoLeiDoBem } from "./conteudo_landing";

export function SecaoLeiDoBem() {
  return (
    <SecaoPagina alternada id="lei-do-bem">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <TituloSecao eyebrow={conteudoLeiDoBem.eyebrow} titulo={conteudoLeiDoBem.titulo} />
        <div className="space-y-6">
          {conteudoLeiDoBem.paragrafos.map((paragrafo) => (
            <p key={paragrafo} className="text-base leading-relaxed text-muted-foreground">
              {paragrafo}
            </p>
          ))}
          <div className="rounded-2xl border border-dourado/30 bg-superficie/70 p-6">
            {conteudoLeiDoBem.fechamento.map((linha) => (
              <p key={linha} className="fonte-display font-medium text-xl leading-snug text-foreground">
                {linha}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SecaoPagina>
  );
}