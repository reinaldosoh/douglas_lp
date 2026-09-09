import { formatBRL } from "@/lib/currency";
import {
  CAPACIDADE_LABEL,
  type SimulacaoResultado,
} from "@/lib/simulador-transacao-individual";

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function gerarTextoSimulacao(resultado: SimulacaoResultado): string {
  const linhas = [
    "SIMULADOR DE TRANSAÇÃO INDIVIDUAL",
    "Douglas Couto — Estratégia Tributária Federal",
    "Simulação estimativa",
    "",
    "DADOS DA SIMULAÇÃO",
    `Valor da dívida em transação: ${formatBRL(resultado.valorDivida)}`,
    `Capacidade de pagamento: ${CAPACIDADE_LABEL[resultado.capacidade]}`,
    `Possui prejuízo fiscal: ${resultado.possuiPrejuizoFiscal ? "Sim" : "Não"}`,
  ];

  if (resultado.possuiPrejuizoFiscal) {
    linhas.push(`Saldo de prejuízo fiscal disponível: ${formatBRL(resultado.saldoPrejuizoFiscal)}`);
  }

  linhas.push(
    "",
    "RESULTADO ESTIMADO",
    `Saldo final após reduções: ${formatBRL(resultado.saldoFinal)}`,
    `Economia total estimada: ${formatBRL(resultado.economiaTotal)}`,
    "",
    "DETALHAMENTO",
    `1. Dívida consolidada: ${formatBRL(resultado.valorDivida)}`,
    `2. Redução Capag (${resultado.capacidade} · ${formatPercent(resultado.percentualReducao)}): − ${formatBRL(resultado.valorReducao)}`,
    `3. Saldo residual: ${formatBRL(resultado.saldoResidual)}`,
  );

  if (resultado.possuiPrejuizoFiscal) {
    linhas.push(
      `4. Abatimento com prejuízo fiscal (${formatPercent(0.7)} do residual · exige ${formatBRL(resultado.prejuizoFiscalNecessario)} de PF): − ${formatBRL(resultado.abatimentoPrejuizoAplicado)}`,
    );
  }

  linhas.push(
    "",
    `Parcela mensal estimada: ${resultado.parcelas} × ${formatBRL(resultado.valorParcela)}`,
    `Saldo parcelado: ${formatBRL(resultado.saldoFinal)}`,
    "",
    "Cálculo sem juros, atualização monetária, entrada ou encargos adicionais.",
    "Resultado orientativo, sujeito à análise jurídica, fiscal e à aprovação do acordo.",
    "",
    `Gerado em: ${new Date().toLocaleString("pt-BR")}`,
  );

  return linhas.join("\n");
}

export function exportarSimulacao(resultado: SimulacaoResultado): void {
  const conteudo = gerarTextoSimulacao(resultado);
  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const data = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `simulacao-transacao-individual-${data}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}
