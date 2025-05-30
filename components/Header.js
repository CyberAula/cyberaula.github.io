"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LangSwitcher from "./LangSwitcher";

import { useTranslation } from "react-i18next";

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  //get current language (currentLang will be: "en" or "es")
  const currentLang = i18n.language;

  const routes = [
    { route: "/research", key: "nav.item" },
    { route: "/courses", key: "nav.item2" },
    { route: "/tools", key: "nav.item3" },
    { route: "/projects", key: "nav.item4" },
    { route: "/team", key: "nav.item5" },
    { route: "/about", key: "nav.item6" },
  ];
  console.log(props.route);

  return (
    <header className={"nav_bar header_" + currentLang} id="header_fixed">
      <a href="/">
        <div className="imagotype">
          <div className="isotype">
            <img
              className="logoheader"
              src="/assets/img/iso_logo.png"
              alt="logo"
            />
          </div>
          <div className="logotype">
            <span>Cyber</span>Aula
          </div>
        </div>
      </a>

      <div className="menu_icon">
        <i
          className={
            "material-icons show " +
            (state.open ? "responsive-hidden" : "responsive-shown")
          }
          onClick={() => {
            setState({ open: !state.open });
          }}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </i>
        <i
          className={
            "material-icons close " +
            (state.open ? "responsive-shown" : "responsive-hidden")
          }
          onClick={() => {
            setState({ open: !state.open });
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </i>
      </div>

      <div
        className={`menu ${state.open ? "responsive-shown" : "responsive-hidden"}`}
      >
        <ul>
          {routes.map((route, index) => (
            <li
              key={index}
              className={route.route === props.route ? "li-selected" : ""}
            >
              <Link href={route.route} >{t(route.key)}</Link>
            </li>
          ))}
          <li><LangSwitcher /></li>

        </ul>
      </div>
    </header>
  );
}
