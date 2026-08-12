import type { ReactNode } from "react";

type PropsSecaoPagina = {
  children: ReactNode;
  alternada?: boolean;
  id?: string;
};

export function SecaoPagina({ children, alternada, id }: PropsSecaoPagina) {
  return (
    <section id={id} className={alternada ? "bg-superficie/40" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 md:py-28">{children}</div>
    </section>
  );
}