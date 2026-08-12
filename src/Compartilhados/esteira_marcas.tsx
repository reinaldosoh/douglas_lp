import { LogoTextoEmpresa } from "./logo_texto_empresa";

type PropriedadesEsteira = {
  marcas: string[];
  direcao?: "esquerda" | "direita";
  duracaoSegundos?: number;
};

export function EsteiraMarcas({
  marcas,
  direcao = "esquerda",
  duracaoSegundos = 40,
}: PropriedadesEsteira) {
  const sequencia = [...marcas, ...marcas];

  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-3 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${direcao === "esquerda" ? "esteira-esquerda" : "esteira-direita"} ${duracaoSegundos}s linear infinite`,
        }}
      >
        {sequencia.map((marca, indice) => (
          <div key={`${marca}-${indice}`} className="w-52 shrink-0">
            <LogoTextoEmpresa nome={marca} />
          </div>
        ))}
      </div>
    </div>
  );
}
