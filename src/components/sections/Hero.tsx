"use client";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";

const Hero = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="hero"
      className="w-full h-full flex justify-center items-center relative mt-20"
    >
      <div className="relative w-full h-[350px] md:h-[460px] rounded-[40px] overflow-hidden bg-primary">
        <Image
          src="/assets/image-hero.webp"
          alt="hero"
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="absolute inset-0 flex flex-col gap-4 text-white justify-center items-center">
          <div className="transform translate-x-8/1 translate-y-2/1 hidden md:block">
            <Image
              src="/decorations/star-hero-1.svg"
              alt="decoración estrella izquierda"
              width={40}
              height={40}
              className="w-8 md:w-12"
            />
          </div>

          <div className="transform -translate-x-6/1">
            <Image
              src="/decorations/star-hero-3.svg"
              alt="decoración estrella central"
              width={40}
              height={40}
              className="w-14 hidden md:block"
            />
          </div>
          <h2 className="font-bold text-2xl md:text-5xl w-[300px] md:w-[750px] leading-none md:leading-normal text-center">
            {t.hero.title}
          </h2>
          <p className="font-normal text-lg md:text-2xl w-[300px] md:w-[800px] text-center leading-none">
            {t.hero.subtitle}
          </p>
          <button className="font-bold bg-orange px-4 md:px-6 rounded-[10px] text-lg md:text-xl md:py-2 py-1.5 mt-2 border-1 border-orange hover:text-orange hover:bg-transparent transition-all duration-300 cursor-pointer">
            {t.hero.cta}
          </button>
          <div className="-translate-x-3/1 -translate-y-6/6">
            <Image
              src="/decorations/star-hero-2.svg"
              alt="decoración estrella derecha"
              width={40}
              height={40}
              className="w-14 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
