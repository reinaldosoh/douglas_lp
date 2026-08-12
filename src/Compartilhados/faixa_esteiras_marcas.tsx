import { EsteiraMarcas } from "./esteira_marcas";

export function FaixaEsteirasMarcas({ marcas }: { marcas: string[] }) {
  const metade = Math.ceil(marcas.length / 2);
  const primeiraLinha = marcas.slice(0, metade);
  const segundaLinha = marcas.slice(metade);

  return (
    <div className="relative space-y-3">
      <EsteiraMarcas marcas={primeiraLinha} direcao="esquerda" duracaoSegundos={38} />
      <EsteiraMarcas marcas={segundaLinha} direcao="direita" duracaoSegundos={46} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
