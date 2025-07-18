import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

const ICONS = [
  "/icons/services/mobile.svg",
  "/icons/services/telephone.svg",
  "/icons/services/clip.svg",
  "/icons/services/computer.svg",
  "/icons/services/chart.svg",
  "/icons/services/box.svg",
];

export default function ServicesReact() {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="services"
      className="w-full h-full flex justify-center items-center relative bg-sky flex-col text-deep-blue py-12 space-y-8 rounded-[60px] mt-40"
    >
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-5xl font-black">{t.services.title}</h2>
        <p className="text-3xl font-medium mt-4">{t.services.subtitle}</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {t.services.list.map((text, idx) => (
          <div
            key={idx}
            className="flex gap-4 justify-center items-center bg-light px-10 py-3 rounded-full hover:scale-105 transition-all duration-300"
          >
            <img src={ICONS[idx]} alt={text} />
            <span className="font-medium text-lg">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
