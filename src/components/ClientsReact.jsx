import React from "react";
import { useLang, getI18n } from "../i18n/index.js";

export default function ClientsReact() {
  const lang = useLang();
  const t = getI18n(lang);
  return (
    <section
      id="clients"
      className="w-full h-full flex justify-center items-center flex-col space-y-8 mt-40"
    >
      <h1 className="text-5xl font-black text-deep-blue">{t.clients.title}</h1>
      <div className="flex gap-12">
        <img alt="Client 1" />
        <img alt="Client 2" />
        <img alt="Client 3" />
      </div>
    </section>
  );
}
