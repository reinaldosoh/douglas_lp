import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";

const TITLE = "Douglas Couto — Conhecimento federal que vira caixa";
const DESCRIPTION =
  "Especialista tributário com experiência no Governo Federal. Lei do Bem, PIS, COFINS, CSLL, IRPJ e IPI aplicados para gerar resultado nas empresas.";
const OG_IMAGE = "/og-douglas-couto.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.douglascouto.com/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Clients />
    </main>
  );
}
