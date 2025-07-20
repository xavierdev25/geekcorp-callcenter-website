"use client";
import Image from "next/image";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
const ICONS = [
  "/icons/services/mobile.svg",
  "/icons/services/telephone.svg",
  "/icons/services/clip.svg",
  "/icons/services/computer.svg",
  "/icons/services/chart.svg",
  "/icons/services/box.svg",
];

const Services = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="services"
      className="w-full h-full flex justify-center items-center relative bg-sky flex-col text-deep-blue py-12 space-y-8 rounded-[60px] mt-44"
    >
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center gap-8">
          <Image
            src="/decorations/star-services.svg"
            alt="decoración estrella"
            width={40}
            height={40}
            className="w-14"
          />
          <h2 className="text-5xl font-black">{t.services.title}</h2>
          <Image
            src="/decorations/star-services.svg"
            alt="decoración estrella"
            width={40}
            height={40}
            className="w-14 rotate-180"
          />
        </div>
        <p className="text-4xl font-medium mt-6">{t.services.subtitle}</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {t.services.list.map((text, idx) => {
          const iconSrc = ICONS[idx];
          return (
            <div
              key={idx}
              className="flex gap-4 justify-center items-center bg-light px-10 py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              {iconSrc && (
                <Image
                  src={iconSrc}
                  alt={text}
                  className="w-7 h-7"
                  width={32}
                  height={32}
                />
              )}
              <span className="font-medium text-lg">{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
