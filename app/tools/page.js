"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import image from "next/image";
import { useState, useEffect } from "react";
import { mytools } from "@/constants/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import useHeaderOffset from "@/hook/useHeaderOffset";

export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [tools, setTools] = useState([]);
  const headerOffset = useHeaderOffset();

  // Update tools when language changes
  useEffect(() => {
    const translatedTools = mytools.map(
      ({
        logo,
        route,
        title,
        translationKey,
        github,
        gradient,
        key,
        description,
      }) => ({
        title,
        logo,
        route,
        github,
        gradient,
        key,
        description: t(translationKey),
      })
    );
    setTools(translatedTools);
  }, [i18n.language, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
      <Header route="/tools" />
      <main  style={{ paddingTop: `${headerOffset}px` }}>
      <div className="banner">
        <h1>{t("tools.title")}</h1>
      </div>
        <section className="our_tools lg:mx-36 md:mx-14 sm:mx-8 mx-16 my-16 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20  xl:mx-44 2xl:mx-60">
          <div className="tools_description text-slate-700 pb-8">
            <p>{t("tools.desc")}</p>
            <br />
            <p>{t("tools.desc2")} </p>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 150: 1, 690: 2, 1175: 3 }}
          >
            <Masonry gutter="12px">
              {tools.map(
                ({ title, description, route, logo, github, gradient }) => {
                  return (
                    <div className="tool" key={title}>
                      <div className={`tool_logo ${gradient}`}>
                        <img alt={"Project Logo"} src={logo} />
                      </div>

                      <div className="tool_content">
                        <h3 className="tool_title">
                       
                          <h3>{title}</h3>
                        </h3>

                        <div className="tool_description">
                          <small>{description}</small>
                        </div>
                        <div className="tool_button_container">
                          <button className="tool_github">
                            <CreateLink route={github}>
                              <FontAwesomeIcon
                                className="mr-2 "
                                icon={faGithub}
                                size="lg"
                              />
                              <span> Github </span>{" "}
                            </CreateLink>
                          </button>
                          <button className="tool_button">
                            <CreateLink route={route}>
                              <span> {t("tools.toolCards.button")}</span>
                              <FontAwesomeIcon
                                className="award_icon"
                                icon={faArrowRight}
                              />

                            </CreateLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match(/^http/) ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.route}>{props.children}</Link>
  );
};
