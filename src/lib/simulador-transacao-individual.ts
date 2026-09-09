export type CapacidadePagamento = "A" | "B" | "C" | "D";

export const CAPACIDADE_REDUCAO: Record<CapacidadePagamento, number> = {
  A: 0.25,
  B: 0.25,
  C: 0.49,
  D: 0.65,
};

export const CAPACIDADE_LABEL: Record<CapacidadePagamento, string> = {
  A: "Capacidade A · 25% de redução",
  B: "Capacidade B · 25% de redução",
  C: "Capacidade C · 49% de redução",
  D: "Capacidade D · 65% de redução",
};

export const PARCELAS = 120;
export const ABATIMENTO_PREJUIZO_PERCENTUAL = 0.7;
export const PREJUIZO_FISCAL_MULTIPLICADOR = 3;

export interface SimulacaoInput {
  valorDivida: number;
  capacidade: CapacidadePagamento;
  possuiPrejuizoFiscal: boolean;
  saldoPrejuizoFiscal: number;
}

export interface SimulacaoResultado {
  valorDivida: number;
  capacidade: CapacidadePagamento;
  percentualReducao: number;
  valorReducao: number;
  saldoResidual: number;
  possuiPrejuizoFiscal: boolean;
  saldoPrejuizoFiscal: number;
  abatimentoMaximoPrejuizo: number;
  prejuizoFiscalNecessario: number;
  abatimentoPrejuizoAplicado: number;
  prejuizoFiscalUtilizado: number;
  saldoFinal: number;
  parcelas: number;
  valorParcela: number;
  economiaTotal: number;
  prejuizoFiscalSuficiente: boolean;
}

export function calcularSimulacao(input: SimulacaoInput): SimulacaoResultado | null {
  const { valorDivida, capacidade, possuiPrejuizoFiscal, saldoPrejuizoFiscal } = input;

  if (valorDivida <= 0) return null;

  const percentualReducao = CAPACIDADE_REDUCAO[capacidade];
  const valorReducao = valorDivida * percentualReducao;
  const saldoResidual = valorDivida - valorReducao;

  const abatimentoMaximoPrejuizo = saldoResidual * ABATIMENTO_PREJUIZO_PERCENTUAL;
  const prejuizoFiscalNecessario = abatimentoMaximoPrejuizo * PREJUIZO_FISCAL_MULTIPLICADOR;

  let abatimentoPrejuizoAplicado = 0;

  if (possuiPrejuizoFiscal && saldoPrejuizoFiscal > 0) {
    const abatimentoPossivelPorSaldoPF = saldoPrejuizoFiscal / PREJUIZO_FISCAL_MULTIPLICADOR;
    abatimentoPrejuizoAplicado = Math.min(abatimentoMaximoPrejuizo, abatimentoPossivelPorSaldoPF);
  }

  const prejuizoFiscalUtilizado = abatimentoPrejuizoAplicado * PREJUIZO_FISCAL_MULTIPLICADOR;
  const saldoFinal = saldoResidual - abatimentoPrejuizoAplicado;
  const valorParcela = saldoFinal / PARCELAS;
  const economiaTotal = valorDivida - saldoFinal;

  return {
    valorDivida,
    capacidade,
    percentualReducao,
    valorReducao,
    saldoResidual,
    possuiPrejuizoFiscal,
    saldoPrejuizoFiscal: possuiPrejuizoFiscal ? saldoPrejuizoFiscal : 0,
    abatimentoMaximoPrejuizo,
    prejuizoFiscalNecessario,
    abatimentoPrejuizoAplicado,
    prejuizoFiscalUtilizado,
    saldoFinal,
    parcelas: PARCELAS,
    valorParcela,
    economiaTotal,
    prejuizoFiscalSuficiente:
      !possuiPrejuizoFiscal ||
      saldoPrejuizoFiscal >= prejuizoFiscalNecessario ||
      abatimentoPrejuizoAplicado >= abatimentoMaximoPrejuizo,
  };
}
