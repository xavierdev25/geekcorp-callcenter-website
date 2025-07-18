import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

export default function ContactReact() {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="contact"
      className="w-full h-full flex justify-center items-center flex-col text-deep-blue mt-40"
    >
      <div className="mb-16">
        <div className="flex justify-center flex-col items-center gap-2 mb-6">
          <h2 className="text-5xl font-black text-deep-blue">
            {t.contact.title}
          </h2>
          <p className="text-2xl font-light text-deep-blue">
            {t.contact.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-12">
          <div className="text-2xl flex flex-col justify-end items-end">
            <span className="font-light">
              <span className="font-medium">{t.contact.phones}</span> +51 966
              761 455 / +51 987 826 182
            </span>
            <span className="font-light">
              <span className="font-medium">{t.contact.email}</span>{" "}
              desarrollo@geekcorp.xyz
            </span>
          </div>
          <div className="w-1 h-20 bg-orange"></div>
          <span className="font-medium text-2xl leading-none w-[550px]">
            {t.contact.desc}
          </span>
        </div>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.name}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 flex items-center text-lg">
            <input
              type="text"
              placeholder={t.contact.form.namePlaceholder}
              className="w-[700px] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.email}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 flex items-center text-lg">
            <input
              type="text"
              placeholder={t.contact.form.emailPlaceholder}
              className="w-[700px] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.phone}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 flex items-center text-lg">
            <input
              type="text"
              placeholder={t.contact.form.phonePlaceholder}
              className="w-[700px] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.projectType}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 text-lg">
            <select name="" id="">
              <option value="">{t.contact.form.projectTypePlaceholder}</option>
              {t.contact.form.projectTypeOptions.map((opt, i) => (
                <option key={i} value="">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.help}
          </span>
          <textarea
            maxLength={512}
            name=""
            id=""
            placeholder={t.contact.form.helpPlaceholder}
            className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 text-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-deep-blue text-ivory py-1.5 px-4 rounded-lg text-lg font-bold"
        >
          {t.contact.form.submit}
        </button>
      </form>
    </section>
  );
}
