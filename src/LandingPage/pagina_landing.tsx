import { SecaoAutoridade } from "./secao_autoridade";
import { SecaoCtaFinal } from "./secao_cta_final";
import { SecaoExperiencia } from "./secao_experiencia";
import { SecaoGovernoEmpresa } from "./secao_governo_empresa";
import { SecaoHero } from "./secao_hero";
import { SecaoInteligenciaTributaria } from "./secao_inteligencia_tributaria";
import { SecaoLeiDoBem } from "./secao_lei_do_bem";

export function PaginaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SecaoHero />
      <main>
        <SecaoAutoridade />
        <SecaoInteligenciaTributaria />
        <SecaoLeiDoBem />
        <SecaoExperiencia />
        <SecaoGovernoEmpresa />
      </main>
      <SecaoCtaFinal />
    </div>
  );
}