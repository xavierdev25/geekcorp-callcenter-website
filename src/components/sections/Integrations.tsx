"use client";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import Image from "next/image";

const Integrations = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section className="w-full h-full flex justify-center items-center flex-col space-y-4 mt-48">
      <div className="flex items-center gap-8">
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14"
        />
        <h2 className="text-5xl font-black text-deep-blue">
          {t.integration.title}
        </h2>
        <Image
          src="/decorations/star-services.svg"
          alt="decoración estrella"
          width={40}
          height={40}
          className="w-14 rotate-180"
        />
      </div>
      <p className="text-2xl font-light text-deep-blue">{t.integration.desc}</p>
      <button className="bg-deep-blue px-8 py-2 rounded-xl font-bold text-ivory text-xl border-1 border-deep-blue hover:bg-transparent hover:text-deep-blue transition-all duration-300 cursor-pointer">
        {t.integration.cta}
      </button>
    </section>
  );
};

export default Integrations;
