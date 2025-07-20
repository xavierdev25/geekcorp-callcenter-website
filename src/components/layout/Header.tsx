"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import { getI18n } from "@/i18n/index";
import { useLang } from "@/i18n/client";
import {
  SOCIAL_MEDIA,
  CLIENT_ACCESS_IDS,
  CLIENT_ACCESS_HREFS,
} from "@/constants";
import type { ClientAccessOption } from "@/types";

const Header = () => {
  const lang = useLang();
  const t = getI18n(lang);
  const [clientAccessOpen, setClientAccessOpen] = useState(false);

  const clientAccessOptions: ClientAccessOption[] =
    t.header.clientAccessOptions.map((label, idx) => {
      const id = CLIENT_ACCESS_IDS[idx];
      const href = CLIENT_ACCESS_HREFS[idx];

      if (!id || !href) {
        console.warn(`Missing client access option at index ${idx}`);
        return {
          id: `fallback-${idx}`,
          label,
          href: "#",
        };
      }

      return {
        id,
        label,
        href,
      };
    });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const dropdownBtn = document.getElementById("client-access-btn");
      const dropdown = document.getElementById("client-access-dropdown");

      if (
        dropdownBtn &&
        dropdown &&
        !dropdownBtn.contains(target) &&
        !dropdown.contains(target)
      ) {
        setClientAccessOpen(false);
      }
    };

    // Cerrar dropdown al presionar Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setClientAccessOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      id="header"
      className="flex justify-between items-center z-50 sticky pt-8 w-full"
    >
      <a href="/" id="logo">
        <Image
          src="/assets/logo-header.webp"
          alt="logo"
          width={120}
          height={48}
          className="w-auto h-12 object-contain"
          priority
        />
      </a>
      <div id="menu" className="space-x-10 text-xl text-deep-blue">
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.home}
        </a>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.about}
        </a>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.services}
        </a>
        <div className="relative inline-block">
          <button
            id="client-access-btn"
            className="hover:text-orange transition-colors duration-300 flex items-center gap-1"
            onClick={(e) => {
              e.preventDefault();
              setClientAccessOpen(!clientAccessOpen);
            }}
          >
            {t.header.clientAccess}
            <Image
              id="dropdown-arrow"
              src="/icons/chevron-down.svg"
              alt="chevron-down"
              width={24}
              height={24}
              className={`w-6 h-6 transition-transform duration-300 ${
                clientAccessOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id="client-access-dropdown"
            className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 transform ${
              clientAccessOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            {clientAccessOptions.map((option) => (
              <a
                key={option.id}
                href={option.href}
                className="block px-4 py-3 text-lg text-deep-blue hover:bg-gray-50 hover:text-orange transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
        <a className="hover:text-orange transition-colors duration-300" href="">
          {t.header.contact}
        </a>
      </div>
      <div id="socials" className="flex gap-6">
        {SOCIAL_MEDIA.map((social) => (
          <a
            key={social.id_social}
            href={social.href || "#"}
            id={social.id_social}
          >
            <Image
              src={social.icon_social}
              alt={social.alt_social}
              width={24}
              height={24}
              className="w-6 h-6"
              style={{ color: "#335A83" }}
            />
          </a>
        ))}
      </div>
      <div className="relative inline-block text-deep-blue">
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
