import {
  LINK_WHATSAPP_LEI_DO_BEM,
  LINK_WHATSAPP_MANUAL,
} from "@/Compartilhados/link_whatsapp";
import { DisplayText } from "@/lib/display-text";

const estiloBotaoPrimario =
  "inline-flex w-full items-center justify-center bg-primary px-6 py-3.5 text-center text-[10px] font-semibold leading-snug tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:px-9 sm:py-4 sm:text-[11px] sm:tracking-[0.24em]";

const PASSOS_ARCO = [
  { letra: "A", texto: "Análise dos últimos cinco anos" },
  { letra: "R", texto: "Recuperação de créditos e oportunidades" },
  { letra: "C", texto: "Correção da estrutura tributária" },
  { letra: "O", texto: "Otimização fiscal para os próximos dez anos" },
] as const;

export function OfertasTributarias() {
  return (
    <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
      <article className="border border-border p-6 sm:p-8">
        <h2 className="font-display text-lg leading-snug text-foreground sm:text-xl">
          <DisplayText>LEI DO BEM</DisplayText>
        </h2>
        <div className="mt-4 h-px w-10 bg-primary/40" />
        <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
          Implemente a Lei do Bem e reduza o IRPJ e a CSLL — podendo chegar a zero.
        </p>
        <a
          href={LINK_WHATSAPP_LEI_DO_BEM}
          target="_blank"
          rel="noreferrer"
          className={`mt-6 ${estiloBotaoPrimario}`}
        >
          QUERO ZERAR CSLL E IRPJ
        </a>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Empresas que investem em inovação, desenvolvimento de produtos, processos, tecnologia,
          automação ou melhoria operacional podem transformar esses investimentos em benefícios
          fiscais.
        </p>
      </article>

      <article className="border border-border p-6 sm:p-8">
        <h2 className="font-display text-lg leading-snug text-foreground sm:text-xl">
          <DisplayText>MÉTODO ARCO</DisplayText>
        </h2>
        <div className="mt-4 h-px w-10 bg-primary/40" />
        <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
          Ganhe 15 anos de menos tributos.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          O Método ARCO é o Sistema Tributário que o governo oferece para pagar menos tributos.
        </p>
        <ul className="mt-4 space-y-2">
          {PASSOS_ARCO.map(({ letra, texto }) => (
            <li key={letra} className="text-sm leading-relaxed text-foreground/90">
              <span className="font-display text-primary">{letra}</span>
              <span className="text-muted-foreground"> — </span>
              {texto}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-foreground/90">
          O manual legal do sistema tributário para pagar menos impostos.
        </p>
        <a
          href={LINK_WHATSAPP_MANUAL}
          target="_blank"
          rel="noreferrer"
          className={`mt-6 ${estiloBotaoPrimario}`}
        >
          QUERO MANUAL
        </a>
      </article>
    </div>
  );
}
