import es from "./es.json";
import en from "./en.json";

export function getI18n(lang) {
  if (typeof window !== "undefined") {
    lang = window.localStorage.getItem("lang") || "es";
  } else {
    lang = lang || "es";
  }
  return lang === "en" ? en : es;
}

export function getCurrentLang() {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("lang") || "es";
  }
  return "es";
}

// Hook para React
import { useSyncExternalStore } from "react";
export function useLang() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("langchange", cb);
      return () => window.removeEventListener("langchange", cb);
    },
    getCurrentLang,
    getCurrentLang,
  );
}
