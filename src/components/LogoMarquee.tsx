import { cn } from "@/lib/utils";
import { LOGOS_CLIENTES } from "@/lib/imagens";

interface LogoMarqueeProps {
  className?: string;
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  const duplicatedLogos = [...LOGOS_CLIENTES, ...LOGOS_CLIENTES];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-card to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-card to-transparent sm:w-32" />

      <div className="marquee flex w-fit gap-6 py-6 sm:gap-12 sm:py-8">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-20 w-36 shrink-0 items-center justify-center border border-primary/25 bg-background px-5 py-4 transition-all duration-500 hover:border-primary/50 sm:h-28 sm:w-52 sm:px-6 sm:py-5"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
