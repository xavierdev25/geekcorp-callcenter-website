import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

export default function IntegrationReact() {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section className="w-full h-full flex justify-center items-center flex-col space-y-4 mt-40">
      <h2 className="text-5xl font-black text-deep-blue">
        {t.integration.title}
      </h2>
      <p className="text-2xl font-light text-deep-blue">{t.integration.desc}</p>
      <button className="bg-deep-blue px-8 py-2 rounded-xl font-bold text-ivory text-xl hover:scale-105 transition-all duration-200 cursor-pointer">
        {t.integration.cta}
      </button>
    </section>
  );
}
