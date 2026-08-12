import { FotoDestaqueDouglas } from "./foto_destaque_douglas";
import { FotoHeroMobile } from "./foto_hero_mobile";
import { TextoHero } from "./texto_hero";

export function SecaoHero() {
  return (
    <header className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden lg:block lg:min-h-[92svh]">
      <FotoDestaqueDouglas />
      <FotoHeroMobile />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-[44svh] sm:px-8 sm:pb-20 sm:pt-[42svh] md:pt-[38svh] lg:px-6 lg:pb-24 lg:pt-0">
        <div className="lg:flex lg:min-h-[92svh] lg:flex-col lg:justify-center">
          <TextoHero />
        </div>
      </div>
    </header>
  );
}
