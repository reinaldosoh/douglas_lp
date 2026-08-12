import { CartaoPasso } from "../Compartilhados/cartao_passo";
import { FaixaTributos } from "../Compartilhados/faixa_tributos";
import { SecaoPagina } from "../Compartilhados/secao_pagina";
import { TituloSecao } from "../Compartilhados/titulo_secao";
import { conteudoInteligencia, tributosFederais } from "./conteudo_landing";

export function SecaoInteligenciaTributaria() {
  return (
    <SecaoPagina id="inteligencia">
      <div className="space-y-12">
        <TituloSecao
          eyebrow={conteudoInteligencia.eyebrow}
          titulo={conteudoInteligencia.titulo}
          subtitulo={conteudoInteligencia.destaque}
        />
        <div className="grid gap-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-10">
          {conteudoInteligencia.paragrafos.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
        <FaixaTributos tributos={tributosFederais} />
        <div className="grid gap-4 md:grid-cols-3">
          {conteudoInteligencia.passos.map((passo) => (
            <CartaoPasso key={passo.numero} {...passo} />
          ))}
        </div>
      </div>
    </SecaoPagina>
  );
}