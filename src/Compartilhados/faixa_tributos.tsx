export function FaixaTributos({ tributos }: { tributos: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-border bg-superficie/60 px-6 py-5">
      {tributos.map((tributo, indice) => (
        <span key={tributo} className="flex items-center gap-5">
          <span className="fonte-display font-medium text-xl tracking-wide text-foreground md:text-2xl">
            {tributo}
          </span>
          {indice < tributos.length - 1 ? <span className="text-dourado">•</span> : null}
        </span>
      ))}
    </div>
  );
}