import { FaixaEsteirasMarcas } from "../Compartilhados/faixa_esteiras_marcas";
import { SecaoPagina } from "../Compartilhados/secao_pagina";
import { TituloSecao } from "../Compartilhados/titulo_secao";
import { conteudoExperiencia } from "./conteudo_landing";

export function SecaoExperiencia() {
  return (
    <SecaoPagina id="experiencia">
      <div className="space-y-12">
        <TituloSecao
          eyebrow={conteudoExperiencia.eyebrow}
          titulo={conteudoExperiencia.titulo}
          subtitulo={conteudoExperiencia.introducao}
        />
        <FaixaEsteirasMarcas marcas={conteudoExperiencia.organizacoes} />

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {conteudoExperiencia.setores}
        </p>
      </div>
    </SecaoPagina>
  );
}