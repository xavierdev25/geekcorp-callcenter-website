"use client";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import Image from "next/image";

const Contact = () => {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="contact"
      className="w-full h-full flex justify-center items-center flex-col text-deep-blue mt-48"
    >
      <div className="mb-16">
        <div className="flex justify-center flex-col items-center gap-2 mb-6">
          <Image
            src="/decorations/star-contact-1.svg"
            alt="decoración estrella"
            width={40}
            height={40}
            className="w-12 absolute -translate-x-9/1 -translate-y-5/6"
          />
          <Image
            src="/decorations/star-contact-2.svg"
            alt="decoración estrella"
            width={40}
            height={40}
            className="w-12 absolute translate-x-9/1 -translate-y-5/3"
          />
          <h2 className="text-5xl font-black text-deep-blue">
            {t.contact.title}
          </h2>
          <p className="text-2xl font-light text-deep-blue">
            {t.contact.subtitle}
          </p>
          <Image
            src="/decorations/star-contact-3.svg"
            alt="decoración estrella"
            width={40}
            height={40}
            className="w-8 absolute translate-x-14/1 translate-y-6/8"
          />
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
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.email}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 flex items-center text-lg">
            <input
              inputMode="email"
              type="text"
              placeholder={t.contact.form.emailPlaceholder}
              className="w-[700px] bg-transparent outline-none"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.phone}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 flex items-center text-lg">
            <input
              inputMode="tel"
              type="text"
              placeholder={t.contact.form.phonePlaceholder}
              className="w-[700px] bg-transparent outline-none"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium text-orange">
            {t.contact.form.projectType}
          </span>
          <div className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 text-lg">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
              required
            >
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
            className="bg-light border-1 border-sky rounded-lg py-2.5 px-4 text-lg resize-none outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-deep-blue text-ivory py-1.5 px-4 rounded-lg text-lg font-bold border-1 border-deep-blue hover:bg-transparent hover:text-deep-blue transition-all duration-300 cursor-pointer"
        >
          {t.contact.form.submit}
        </button>
      </form>
    </section>
  );
};

export default Contact;
