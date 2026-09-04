import { createFileRoute } from "@tanstack/react-router";

import { SimuladorTransacaoIndividual } from "@/components/SimuladorTransacaoIndividual";

const TITLE = "Simulador de Transação Individual — Douglas Couto";
const DESCRIPTION =
  "Simule capacidade de pagamento, redução pela Capag e abatimento com prejuízo fiscal em transação individual.";
const OG_IMAGE = "/og-douglas-couto.png";

export const Route = createFileRoute("/simulador-transacao-individual")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: SimuladorTransacaoIndividualPage,
});

function SimuladorTransacaoIndividualPage() {
  return (
    <main>
      <SimuladorTransacaoIndividual />
    </main>
  );
}
