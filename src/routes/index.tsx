import { createFileRoute } from "@tanstack/react-router";
import {
  imagemDouglas,
  imagemOgAlt,
  imagemOgAltura,
  imagemOgLargura,
  urlAbsoluta,
} from "../LandingPage/conteudo_landing";
import { PaginaLanding } from "../LandingPage/pagina_landing";

const titulo = "Douglas Couto | RX3 — Menos impostos. Mais caixa.";
const descricao =
  "Especialista em estratégias tributárias federais. Diagnóstico de PIS, COFINS, CSLL, IRPJ, IPI e Lei do Bem para reduzir legalmente a carga tributária e preservar caixa.";

export const Route = createFileRoute("/")({
  head: () => {
    const imagemCompartilhamento = urlAbsoluta(imagemDouglas);
    const urlPagina = urlAbsoluta("/");

    return {
      meta: [
        { title: titulo },
        { name: "description", content: descricao },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao },
        { property: "og:type", content: "website" },
        { property: "og:url", content: urlPagina },
        { property: "og:image", content: imagemCompartilhamento },
        { property: "og:image:width", content: String(imagemOgLargura) },
        { property: "og:image:height", content: String(imagemOgAltura) },
        { property: "og:image:alt", content: imagemOgAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: titulo },
        { name: "twitter:description", content: descricao },
        { name: "twitter:image", content: imagemCompartilhamento },
        { name: "twitter:image:alt", content: imagemOgAlt },
      ],
    };
  },
  component: PaginaLanding,
});
