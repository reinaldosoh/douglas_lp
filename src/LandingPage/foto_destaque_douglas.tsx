import { imagemDouglas } from "./conteudo_landing";

/** Foto em tela cheia — apenas desktop (lg+). */
export function FotoDestaqueDouglas() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {/* A própria imagem dissolve nas bordas via mask — evita linha de divisão */}
      <img
        src={imagemDouglas}
        alt="Retrato de Douglas Couto, especialista em estratégias tributárias federais"
        className="absolute right-0 top-0 h-full w-[64%] object-cover object-[center_22%] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_22%,rgba(0,0,0,0.85)_46%,#000_62%),linear-gradient(0deg,transparent_0%,#000_22%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
        width={1672}
        height={941}
        fetchPriority="high"
        decoding="async"
      />
      {/* Brilho suave atrás do retrato, sem bordas duras */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_38%,color-mix(in_oklab,var(--dourado)_10%,transparent),transparent_60%)]" />
    </div>
  );
}
