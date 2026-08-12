import { Crosshair, FileCheck2, BarChart3 } from "lucide-react";
import { LogoMarquee } from "./LogoMarquee";
import { LINK_WHATSAPP } from "@/Compartilhados/link_whatsapp";


const CLIENTS = [
  "PETROBRAS",
  "SHELL",
  "BP",
  "CHEVRON",
  "REPSOL",
  "RAÍZEN",
  "NATURGY",
  "WHITE MARTINS",
  "GLOBO",
  "UBER",
  "UNITEL",
  "MARISA",
  "LEITE DE ROSAS",
  "PREFEITURA DE GUARULHOS",
];

const PILLARS = [
  {
    icon: Crosshair,
    title: "DIAGNÓSTICO 360°",
    subtitle: "O GPS financeiro e tributário da sua empresa.",
    body:
      "Um dossiê estratégico padrão Big Four analisa os últimos 5 anos e projeta os próximos 10, transformando números, riscos e oportunidades em um mapa claro para orientar as decisões do empresário.",
    closing: "Conheça onde sua empresa está, onde pode chegar e o caminho para chegar lá.",
  },
  {
    icon: FileCheck2,
    title: "MENOS IMPOSTOS. MAIS CAIXA.",
    subtitle: "Descubra benefícios que sua empresa pode estar deixando de aproveitar.",
    body:
      "Mapeamos incentivos, convênios federais, benefícios e imunidades tributárias aplicáveis ao negócio para identificar oportunidades legais de redução da carga tributária e preservação de caixa.",
    closing:
      "Antes de buscar dinheiro fora, descubra quanto pode estar deixando dentro da empresa.",
  },
  {
    icon: BarChart3,
    title: "PLANEJAMENTO COM GARANTIA",
    subtitle: "Estratégia tributária acompanhada de proteção patrimonial.",
    body:
      "Nas operações estruturadas de compensação, o planejamento poderá contar com cessão nominal de direitos creditórios ao cliente, por meio de estrutura de FIDC, em valor equivalente à operação, conforme os instrumentos e condições aplicáveis.",
  },
];

export function Clients() {
  return (
    <section id="atuacao" className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:py-32">
        <h2 className="font-display max-w-2xl text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
          Estratégia, segurança
          <br />e resultado<span className="text-primary">.</span>
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6">
          Atuação técnica e institucional para transformar complexidade tributária em eficiência
          financeira.
        </p>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, subtitle, body, closing }) => (
            <article key={title} className="border border-border p-6 sm:p-8">
              <Icon className="h-8 w-8 stroke-[1] text-primary sm:h-9 sm:w-9" />
              <h3 className="font-display mt-5 text-lg leading-snug text-foreground sm:mt-6 sm:text-xl">
                {title}
              </h3>
              <div className="mt-4 h-px w-10 bg-primary/40" />
              <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">{subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {closing ? (
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-foreground/90">
                  {closing}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14 border-y border-border py-10 sm:mt-20 sm:py-14">
          <p className="font-display text-[2rem] leading-none text-foreground sm:text-4xl lg:text-5xl">
            R$ 8,2 BILHÕES<span className="text-primary">+</span>
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5">
            em operações tributárias, financeiras e públicas estruturadas ao longo da trajetória.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/90 sm:mt-6">
            Experiência que conecta conhecimento institucional, estratégia tributária e resultado
            econômico.
          </p>
        </div>

        <div className="mt-14 sm:mt-20">
          <p className="mb-8 text-center text-[10px] tracking-[0.24em] text-primary sm:mb-10 sm:text-[11px] sm:tracking-[0.3em]">
            EXPERIÊNCIA APLICADA A GRANDES ORGANIZAÇÕES
          </p>

          <LogoMarquee />
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <span className="block h-3 w-3 rotate-45 border border-primary/40" />
        </div>

        <footer className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display tracking-[0.24em] text-foreground">DOUGLAS COUTO</span>
          <a
            href={LINK_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.22em] text-primary hover:underline"
          >
            FALAR NO WHATSAPP →
          </a>
        </footer>

      </div>
    </section>
  );
}
