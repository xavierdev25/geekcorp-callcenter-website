import React, { useEffect, useState } from "react";

const LANGS = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export default function LangSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new Event("langchange"));
  }, [lang]);

  return (
    <div className="relative inline-block text-deep-blue">
      <button
        id="lang-select-btn"
        className="hover:text-orange transition-colors duration-200 flex items-center gap-1 px-3 py-2 rounded focus:outline-none text-xl"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {LANGS.find((l) => l.code === lang)?.label}
        <img
          id="lang-dropdown-arrow"
          src="/icons/chevron-down.svg"
          alt="chevron-down"
          className={`w-6 h-6 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id="lang-dropdown"
          className="absolute top-full left-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-orange transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              disabled={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
