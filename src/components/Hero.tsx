import { EspecialidadesMarquee } from "@/components/EspecialidadesMarquee";
import { HeroVideoPlayer } from "@/components/HeroVideoPlayer";
import { OfertasTributarias } from "@/components/OfertasTributarias";
import { LINK_WHATSAPP, LINK_WHATSAPP_SIMULAR } from "@/Compartilhados/link_whatsapp";

const estiloContornoDourado =
  "inline-flex items-center border border-primary/60 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-primary sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]";

const estiloBotaoPrimario =
  "inline-flex w-full items-center justify-center bg-primary px-6 py-3.5 text-center text-[10px] font-semibold leading-snug tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:px-9 sm:py-4 sm:text-[11px] sm:tracking-[0.24em]";

export function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-background lg:min-h-screen">
      {/* Gradiente leve no mobile — blur-[180px] derruba o Safari iOS por estouro de memória GPU */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-primary/10 sm:bg-primary/[0.07] sm:blur-3xl lg:blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl min-w-0 flex-col px-5 sm:px-6 lg:min-h-screen">
        <header className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-6 sm:py-8">
          <span className="font-display truncate text-base tracking-[0.24em] text-foreground sm:text-lg sm:tracking-[0.28em]">
            DOUGLAS COUTO
          </span>
          <a
            href={LINK_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 transition-colors hover:bg-primary hover:text-primary-foreground ${estiloContornoDourado}`}
          >
            WHATSAPP
          </a>
        </header>

        <div className="grid min-w-0 flex-1 items-center gap-8 pb-12 pt-4 sm:gap-14 sm:pb-24 sm:pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="fade-up order-2 min-w-0 lg:order-1">
            <p className="mb-5 text-[10px] tracking-[0.28em] text-primary sm:mb-8 sm:text-[11px] sm:tracking-[0.32em]">
              ESTRATÉGIA TRIBUTÁRIA FEDERAL
            </p>

            <h1 className="font-display text-[2.6rem] leading-[1.04] text-foreground sm:text-6xl lg:text-[4.6rem]">
              Conhecimento
              <br />
              federal que vira caixa<span className="text-primary">.</span>
            </h1>

            <div className="mt-6 max-w-lg space-y-3 text-[15px] leading-relaxed text-muted-foreground sm:mt-8">
              <p>Conhecimento federal que vira caixa.</p>
              <p>
                Décadas de experiência no ambiente institucional federal transformadas em
                inteligência para empresas: identificar oportunidades previstas na legislação,
                reduzir ineficiências tributárias e preservar capital.
              </p>
            </div>

            <EspecialidadesMarquee />

            <a
              href={LINK_WHATSAPP_SIMULAR}
              target="_blank"
              rel="noreferrer"
              className={`mt-9 sm:mt-12 ${estiloBotaoPrimario}`}
            >
              SIMULAR TRANSAÇÃO
            </a>

            <OfertasTributarias />
          </div>

          <HeroVideoPlayer className="fade-up order-1 mx-auto w-full min-w-0 max-w-xs sm:max-w-sm lg:order-2 lg:max-w-md" />
        </div>
      </div>
    </section>
  );
}
