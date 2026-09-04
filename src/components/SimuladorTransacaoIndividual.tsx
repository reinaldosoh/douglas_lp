import { Link } from "@tanstack/react-router";
import { Download, Minus } from "lucide-react";
import { useMemo, useState } from "react";

import { DisplayText } from "@/lib/display-text";
import {
  formatBRL,
  formatCurrencyInput,
  parseCurrencyInput,
} from "@/lib/currency";
import { exportarSimulacao } from "@/lib/export-simulacao";
import {
  CAPACIDADE_REDUCAO,
  calcularSimulacao,
  type CapacidadePagamento,
} from "@/lib/simulador-transacao-individual";
import { LINK_WHATSAPP } from "@/Compartilhados/link_whatsapp";
import { cn } from "@/lib/utils";

const CAPACIDADES: CapacidadePagamento[] = ["A", "B", "C", "D"];

const estiloContornoDourado =
  "inline-flex items-center border border-primary/60 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-primary sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]";

function CampoMoeda({
  id,
  label,
  value,
  onChange,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[10px] tracking-[0.22em] text-primary sm:text-[11px]">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display-nums text-sm text-muted-foreground">
          R$
        </span>
        <input
          id={id}
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="0,00"
          className="w-full border border-border bg-background/60 py-3.5 pl-12 pr-4 font-display-nums text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50"
        />
      </div>
      {hint ? <p className="text-xs leading-relaxed text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function LinhaResultado({
  passo,
  titulo,
  descricao,
  valor,
  destaque = false,
  negativo = false,
}: {
  passo: number;
  titulo: string;
  descricao: string;
  valor: string;
  destaque?: boolean;
  negativo?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 border border-border p-4 sm:p-5",
        destaque && "border-primary/40 bg-primary/5",
      )}
    >
      <div className="flex min-w-0 gap-3 sm:gap-4">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-primary/40 text-[11px] font-medium text-primary">
          {passo}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">{titulo}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{descricao}</p>
        </div>
      </div>
      <p
        className={cn(
          "shrink-0 text-right font-display-nums text-sm sm:text-base",
          negativo ? "text-primary" : "text-foreground",
        )}
      >
        {negativo ? (
          <span className="inline-flex items-center gap-1">
            <Minus className="h-3.5 w-3.5" aria-hidden />
            {valor.replace(/^−\s*/, "")}
          </span>
        ) : (
          valor
        )}
      </p>
    </div>
  );
}

export function SimuladorTransacaoIndividual() {
  const [valorDividaInput, setValorDividaInput] = useState("100000000");
  const [capacidade, setCapacidade] = useState<CapacidadePagamento>("D");
  const [possuiPrejuizoFiscal, setPossuiPrejuizoFiscal] = useState(true);
  const [saldoPrejuizoInput, setSaldoPrejuizoInput] = useState("73500000");

  const valorDivida = parseCurrencyInput(valorDividaInput);
  const saldoPrejuizoFiscal = parseCurrencyInput(saldoPrejuizoInput);

  const resultado = useMemo(
    () =>
      calcularSimulacao({
        valorDivida,
        capacidade,
        possuiPrejuizoFiscal,
        saldoPrejuizoFiscal,
      }),
    [valorDivida, capacidade, possuiPrejuizoFiscal, saldoPrejuizoFiscal],
  );

  const percentualCapacidade = Math.round(CAPACIDADE_REDUCAO[capacidade] * 100);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-primary/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-24">
        <header className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-6 sm:py-8">
          <Link
            to="/"
            className="font-display truncate text-base tracking-[0.24em] text-foreground transition-colors hover:text-primary sm:text-lg sm:tracking-[0.28em]"
          >
            DOUGLAS COUTO
          </Link>
          <a
            href={LINK_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 transition-colors hover:bg-primary hover:text-primary-foreground ${estiloContornoDourado}`}
          >
            WHATSAPP
          </a>
        </header>

        <div className="fade-up mt-10 sm:mt-14">
          <p className="text-[10px] tracking-[0.28em] text-primary sm:text-[11px] sm:tracking-[0.32em]">
            SIMULAÇÃO ESTIMATIVA
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-[2.2rem] leading-[1.06] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Simulador de Transação Individual
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-[15px]">
            Capacidade de pagamento e prejuízo fiscal. Estime reduções pela Capag, abatimento com
            prejuízo fiscal e parcelamento residual em 120 vezes.
          </p>
        </div>

        <div className="fade-up mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div className="space-y-8 border border-border bg-card p-6 sm:p-8">
            <div>
              <h2 className="font-display text-2xl text-foreground">Dados da simulação</h2>
              <div className="mt-3 h-px w-10 bg-primary/40" />
            </div>

            <CampoMoeda
              id="valor-divida"
              label="VALOR DA DÍVIDA EM TRANSAÇÃO"
              value={formatCurrencyInput(valorDivida)}
              onChange={(value) => setValorDividaInput(value.replace(/\D/g, ""))}
            />

            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.22em] text-primary sm:text-[11px]">
                CAPACIDADE DE PAGAMENTO
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CAPACIDADES.map((item) => {
                  const ativo = capacidade === item;
                  const reducao = Math.round(CAPACIDADE_REDUCAO[item] * 100);

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCapacidade(item)}
                      className={cn(
                        "border px-3 py-4 text-left transition-colors sm:px-4",
                        ativo
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                      )}
                    >
                      <span className="font-display text-xl text-primary">{item}</span>
                      <span className="mt-2 block text-[11px] leading-snug tracking-[0.08em]">
                        {reducao}% redução
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Possui prejuízo fiscal?</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Use o saldo disponível para reduzir o residual.
                  </p>
                </div>
                <div className="inline-flex border border-border">
                  <button
                    type="button"
                    onClick={() => setPossuiPrejuizoFiscal(true)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] tracking-[0.16em] transition-colors",
                      possuiPrejuizoFiscal
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    SIM
                  </button>
                  <button
                    type="button"
                    onClick={() => setPossuiPrejuizoFiscal(false)}
                    className={cn(
                      "border-l border-border px-5 py-2.5 text-[11px] tracking-[0.16em] transition-colors",
                      !possuiPrejuizoFiscal
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    NÃO
                  </button>
                </div>
              </div>

              {possuiPrejuizoFiscal ? (
                <CampoMoeda
                  id="saldo-prejuizo"
                  label="SALDO DE PREJUÍZO FISCAL DISPONÍVEL"
                  value={formatCurrencyInput(saldoPrejuizoFiscal)}
                  onChange={(value) => setSaldoPrejuizoInput(value.replace(/\D/g, ""))}
                  hint="Cada R$ 3,00 de prejuízo fiscal permite abater R$ 1,00 do saldo, limitado a 70% do residual."
                />
              ) : null}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl text-foreground">Resultado estimado</h2>
                  <div className="mt-3 h-px w-10 bg-primary/40" />
                </div>
                {resultado ? (
                  <button
                    type="button"
                    onClick={() => exportarSimulacao(resultado)}
                    className="inline-flex items-center justify-center gap-2 border border-primary/60 px-4 py-2.5 text-[10px] tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-[11px]"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    EXPORTAR SIMULAÇÃO
                  </button>
                ) : null}
              </div>

              {resultado ? (
                <>
                  <div className="mt-8 border border-primary/30 bg-primary/5 p-5 sm:p-6">
                    <p className="text-[10px] tracking-[0.22em] text-primary sm:text-[11px]">
                      SALDO FINAL APÓS REDUÇÕES
                    </p>
                    <p className="font-display mt-3 text-3xl text-foreground sm:text-4xl">
                      <DisplayText>{formatBRL(resultado.saldoFinal)}</DisplayText>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Economia total estimada de{" "}
                      <span className="font-display-nums text-foreground">
                        {formatBRL(resultado.economiaTotal)}
                      </span>
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <LinhaResultado
                      passo={1}
                      titulo="Dívida consolidada"
                      descricao="Valor inicial informado"
                      valor={formatBRL(resultado.valorDivida)}
                    />
                    <LinhaResultado
                      passo={2}
                      titulo={`Redução Capag ${resultado.capacidade} · ${percentualCapacidade}%`}
                      descricao="Desconto sobre a dívida"
                      valor={formatBRL(resultado.valorReducao)}
                      negativo
                    />
                    <LinhaResultado
                      passo={3}
                      titulo="Saldo residual"
                      descricao="Após redução pela Capag"
                      valor={formatBRL(resultado.saldoResidual)}
                    />
                    {resultado.possuiPrejuizoFiscal ? (
                      <LinhaResultado
                        passo={4}
                        titulo="Abatimento com prejuízo fiscal"
                        descricao={`70% do residual · exige ${formatBRL(resultado.prejuizoFiscalNecessario)} de PF`}
                        valor={formatBRL(resultado.abatimentoPrejuizoAplicado)}
                        negativo
                      />
                    ) : null}
                  </div>

                  <div className="mt-6 grid gap-4 border border-border p-5 sm:grid-cols-2 sm:p-6">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                        PARCELA MENSAL ESTIMADA
                      </p>
                      <p className="font-display mt-2 text-xl text-foreground sm:text-2xl">
                        <DisplayText>
                          {`${resultado.parcelas} × ${formatBRL(resultado.valorParcela)}`}
                        </DisplayText>
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-muted-foreground">
                        SALDO PARCELADO
                      </p>
                      <p className="font-display mt-2 text-xl text-foreground sm:text-2xl">
                        <DisplayText>{formatBRL(resultado.saldoFinal)}</DisplayText>
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                    {resultado.possuiPrejuizoFiscal ? (
                      <>
                        Com prejuízo fiscal suficiente, abate-se 70% do saldo residual. Os 30%
                        restantes são parcelados em {resultado.parcelas} vezes.
                        {!resultado.prejuizoFiscalSuficiente ? (
                          <>
                            {" "}
                            O saldo informado de prejuízo fiscal permite abater apenas{" "}
                            <span className="font-display-nums text-foreground">
                              {formatBRL(resultado.abatimentoPrejuizoAplicado)}
                            </span>
                            .
                          </>
                        ) : null}
                      </>
                    ) : (
                      <>
                        Sem utilização de prejuízo fiscal, o saldo residual é parcelado em{" "}
                        {resultado.parcelas} vezes.
                      </>
                    )}
                  </p>
                </>
              ) : (
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Informe o valor da dívida para visualizar o resultado estimado.
                </p>
              )}
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Cálculo sem juros, atualização monetária, entrada ou encargos adicionais. Resultado
              orientativo, sujeito à análise jurídica, fiscal e à aprovação do acordo.
            </p>
          </div>
        </div>

        <footer className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display tracking-[0.24em] text-foreground">DOUGLAS COUTO</span>
          <Link
            to="/"
            className="text-[11px] tracking-[0.22em] text-primary hover:underline"
          >
            VOLTAR AO INÍCIO →
          </Link>
        </footer>
      </div>
    </section>
  );
}
