type PropsBotaoCta = {
  texto: string;
  href: string;
  variante?: "solido" | "contorno";
};

export function BotaoCta({ texto, href, variante = "solido" }: PropsBotaoCta) {
  const base =
    "inline-flex min-h-11 max-w-full items-center justify-center rounded-md px-5 py-3 text-center text-[0.7rem] font-semibold uppercase leading-[1.35] tracking-[0.08em] transition-all duration-300 sm:min-h-14 sm:px-7 sm:text-[13px] sm:tracking-[0.14em]";
  const estilo =
    variante === "solido"
      ? "bg-dourado text-primary-foreground shadow-[0_10px_24px_-18px_var(--dourado)] hover:brightness-110"
      : "border border-dourado/50 text-dourado hover:bg-dourado/10";

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${estilo}`}>
      {texto}
    </a>
  );
}