import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

export default function AboutReact() {
  const lang = useLang();
  const t = getI18n(lang);
  const percents = t.about.percents.map((title, idx) => ({
    number: ["0%", "+0", "+0"][idx],
    title,
    class: ["", "", "col-span-2"][idx],
  }));
  const benefits = t.about.benefits.map((b, idx) => ({
    number: (idx + 1).toString(),
    title: b.title,
    description: b.desc,
  }));
  return (
    <section
      id="services"
      className="w-full h-full flex justify-center items-center flex-col text-deep-blue mt-40"
    >
      <div>
        <h2 className="text-5xl font-black flex justify-center mb-4">
          {t.about.why}
        </h2>
        <p className="leading-none text-2xl text-center w-[750px]">
          {t.about.desc}
        </p>
      </div>
      <div className="flex flex-row justify-start items-start mt-16">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center justify-center">
          {percents.map((percent, idx) => (
            <div
              key={idx}
              className={`${percent.class} ${idx === 2 ? " flex flex-col items-center justify-center" : ""}`}
            >
              <div className="flex justify-center">
                <div className="h-36 w-36 rounded-full border-1 flex items-center justify-center">
                  <p className="font-bold text-xl">{percent.number}</p>
                </div>
              </div>
              <span className="leading-none text-lg flex justify-center items-center text-center mt-4">
                {percent.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-[1px] h-[500px] bg-orange justify-start items-start flex mx-24"></div>
        <div className="flex flex-col">
          <h2 className="text-5xl font-black flex justify-center mb-4">
            {t.about.benefitsTitle}
          </h2>
          <div className="flex flex-col gap-12">
            {benefits.map((benefit) => (
              <div
                className="flex flex-row items-center gap-4"
                key={benefit.number}
              >
                <div className="flex px-3 py-6.5 items-center justify-center border-1 rounded-full">
                  <h3 className="text-xl">{benefit.number}</h3>
                </div>
                <div>
                  <span className="font-medium text-2xl">{benefit.title}</span>
                  <p className="font-light text-xl leading-none w-[620px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
