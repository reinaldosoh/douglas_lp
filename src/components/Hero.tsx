import { EspecialidadesMarquee } from "@/components/EspecialidadesMarquee";
import { IMAGEM_DOUGLAS } from "@/lib/imagens";
import { LINK_WHATSAPP } from "@/Compartilhados/link_whatsapp";

const estiloContornoDourado =
  "inline-flex items-center border border-primary/60 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-primary sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]";

function BotoesHero({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 ${className}`}
    >
      <a
        href={LINK_WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center bg-primary px-6 py-3.5 text-center text-[10px] font-semibold leading-snug tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:px-9 sm:py-4 sm:text-[11px] sm:tracking-[0.24em]"
      >
        SOLICITAR DIAGNÓSTICO
      </a>
      <a
        href="#atuacao"
        className="inline-flex w-full items-center justify-center gap-3 text-[10px] tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary sm:w-auto sm:justify-start sm:text-[11px] sm:tracking-[0.24em]"
      >
        VER ÁREAS DE ATUAÇÃO
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-background lg:min-h-screen">
      <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-primary/10 blur-[180px]" />

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
          <div className="fade-up min-w-0">
            <p className="mb-5 text-[10px] tracking-[0.28em] text-primary sm:mb-8 sm:text-[11px] sm:tracking-[0.32em]">
              ESTRATÉGIA TRIBUTÁRIA FEDERAL
            </p>

            <h1 className="font-display text-[2.6rem] leading-[1.04] text-foreground sm:text-6xl lg:text-[4.6rem]">
              Conhecimento
              <br />
              federal que
              <br />
              vira caixa<span className="text-primary">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:mt-8">
              Experiência construída no ambiente institucional federal, aplicada para identificar
              oportunidades tributárias, reduzir ineficiências e gerar resultado financeiro para
              empresas.
            </p>

            <EspecialidadesMarquee />

            <BotoesHero className="mt-9 sm:mt-12" />
          </div>

          <div className="fade-up relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md">
            <div className="absolute -inset-2 border border-primary/25 sm:-inset-3" />
            <div className="relative overflow-hidden">
              <img
                src={IMAGEM_DOUGLAS}
                alt="Douglas Couto, especialista em incentivos fiscais"
                className="aspect-[4/5] w-full object-cover object-[50%_18%]"
                width={1020}
                height={1024}
                fetchPriority="high"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
