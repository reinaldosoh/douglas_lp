export function LogoTextoEmpresa({ nome }: { nome: string }) {
  return (
    <div className="flex min-h-16 items-center justify-center rounded-xl border border-border/70 bg-superficie/40 px-4 py-4 text-center transition-colors duration-300 hover:border-dourado/40">
      <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {nome}
      </span>
    </div>
  );
}