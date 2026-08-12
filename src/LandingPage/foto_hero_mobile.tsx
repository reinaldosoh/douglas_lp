import { imagemDouglas } from "./conteudo_landing";

/** Foto de fundo full-bleed do hero — mobile e tablet. */
export function FotoHeroMobile() {
  return (
    <div className="pointer-events-none absolute inset-0 lg:hidden">
      <img
        src={imagemDouglas}
        alt="Retrato de Douglas Couto, especialista em estrategias tributarias federais"
        className="absolute inset-x-0 top-0 h-[70%] w-full object-cover object-[center_14%]"
        width={1672}
        height={941}
        fetchPriority="high"
        decoding="async"
        style={{
          maskImage:
            "linear-gradient(180deg,#000 0%,#000 62%,rgba(0,0,0,0.55) 82%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg,#000 0%,#000 62%,rgba(0,0,0,0.55) 82%,transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, transparent 34%, color-mix(in oklab, var(--background) 65%, transparent) 46%, var(--background) 58%)",
        }}
      />
      {/* leve vinheta lateral para integrar as bordas da foto ao fundo */}
      <div className="absolute inset-x-0 top-0 h-[70%] bg-[linear-gradient(90deg,var(--background),transparent_18%,transparent_82%,var(--background))] opacity-70" />
    </div>
  );
}