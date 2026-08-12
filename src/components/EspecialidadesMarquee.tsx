import { cn } from "@/lib/utils";

const ESPECIALIDADES = ["LEI DO BEM", "PIS", "COFINS", "CSLL", "IRPJ", "IPI"];

const estiloContornoDourado =
  "inline-flex shrink-0 items-center border border-primary/60 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-primary sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]";

type Props = {
  className?: string;
};

export function EspecialidadesMarquee({ className }: Props) {
  const itensLoop = [...ESPECIALIDADES, ...ESPECIALIDADES];

  return (
    <>
      <div className={cn("relative mt-8 w-full max-w-full overflow-hidden sm:hidden", className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-lento flex w-max gap-2 py-0.5">
          {itensLoop.map((item, index) => (
            <span key={`${item}-${index}`} className={estiloContornoDourado}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 hidden flex-wrap gap-2 sm:mt-10 sm:flex sm:gap-2.5">
        {ESPECIALIDADES.map((item) => (
          <span key={item} className={estiloContornoDourado}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
