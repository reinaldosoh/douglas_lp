import { createFileRoute } from "@tanstack/react-router";
import { PaginaLanding } from "../LandingPage/pagina_landing";

const titulo = "Douglas Couto | RX3 — Menos impostos. Mais caixa.";
const descricao =
  "Especialista em estratégias tributárias federais. Diagnóstico de PIS, COFINS, CSLL, IRPJ, IPI e Lei do Bem para reduzir legalmente a carga tributária e preservar caixa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaginaLanding,
});
