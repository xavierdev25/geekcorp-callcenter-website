import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

export default function HeroReact() {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="hero"
      className="w-full h-full flex justify-center items-center relative mt-20"
    >
      <div className="bg-primary rounded-[40px] w-full h-full justify-center flex">
        <img
          src="/assets/image-hero.webp"
          className="object-cover rounded-[40px] opacity-50 w-full h-[460px]"
          alt="hero"
        />
      </div>
      <div className="absolute inset-0 flex flex-col gap-4 text-white justify-center items-center">
        <h2 className="font-bold text-5xl w-[750px] text-center">
          {t.hero.title}
        </h2>
        <p className="font-normal text-2xl w-[800px] text-center leading-none">
          {t.hero.subtitle}
        </p>
        <button className="font-bold bg-orange px-6 rounded-[10px] text-xl py-2 mt-2 hover:scale-105 transition-all duration-200 cursor-pointer">
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}
