"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useMemo } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { mytools } from "@/constants/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import useHeaderOffset from "@/hook/useHeaderOffset";

// SEO
import SEO from "@/components/SEOWrapper";

// Metadata for SEO
import { getPageMetadata } from "@/constants/metadata";
import { toolsPageSchema } from "@/constants/schemas";

export default function Tools() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const headerOffset = useHeaderOffset();
  const metadata = getPageMetadata('tools', currentLang);

  const tools = useMemo(
    () => mytools.map((tool) => ({
      ...tool,
      description: t(tool.translationKey),
    })),
    [i18n.language, t]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
       <SEO 
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        ogImage="/assets/img/group-logo.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolsPageSchema).replace(/</g, "\\u003c"),
        }}
      />
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
          <div className="tools_grid">
            {tools.map(
              ({ title, description, route, logo, logoText, github, gradient }) => {
                return (
                  <div className="tool" key={title}>
                      <div className={`tool_logo ${gradient}`}>
                        {logo ? (
                          <img alt={`${title} logo`} src={logo} />
                        ) : (
                          <span className="tool_logo_text" aria-hidden="true">{logoText}</span>
                        )}
                      </div>

                      <div className="tool_content">
                        <div className="tool_title">
                          <h2>{title}</h2>
                        </div>

                        <div className="tool_description">
                          <p>{description}</p>
                        </div>
                        <div className="tool_button_container">
                          <div className="tool_github">
                            <CreateLink route={github}>
                              <FontAwesomeIcon
                                className="mr-2 "
                                icon={faGithub}
                                size="lg"
                              />
                              <span> Github </span>{" "}
                            </CreateLink>
                          </div>
                          <div className="tool_button">
                            <CreateLink route={route}>
                              <span> {t("tools.toolCards.button")}</span>
                              <FontAwesomeIcon
                                className="award_icon"
                                icon={faArrowRight}
                              />

                            </CreateLink>
                          </div>
                        </div>
                      </div>
                  </div>
                );
              }
            )}
          </div>
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
    <Link href={props.route}>{props.children}</Link>
  );
};
