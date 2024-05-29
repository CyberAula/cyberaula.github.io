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

export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const [tools, setTools] = useState([]);

  // Update tools when language changes
  useEffect(() => {
    const translatedTools = mytools.map(({ logo, route, title, translationKey, github, gradient, key, description }) => ({
      title,
      logo,
      route,
      github,
      gradient,
      key,
      description:t(translationKey)
    }));
    setTools(translatedTools);
  }, [i18n.language, t]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="tools">
      <Header route="/tools" />
      <div className="banner">
        <h1>{t('tools.title')}</h1>
      </div>
      <main>
        <section className="our_tools lg:mx-36 md:mx-14 sm:mx-8 mx-4 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20  xl:mx-44 2xl:mx-60">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 150: 1, 600: 2, 900: 3 }}
          >
            <Masonry gutter="12px">
              {tools.map(
                ({ title, description, route, logo, github, gradient }) => {
                  return (
                    <div className="tool">
                      <div className={`tool_logo ${gradient}`}>
                        <img alt={"Project Logo"} src={logo} />
                      </div>

                      <div class="tool_content">
                        <div className="tool_title">
                          <h2>{title}</h2>
                        </div>
                        <div className="tool_description">
                          <p>{description}</p>
                        </div>
                        <div className="tool_button_container">
                          <button className="tool_button">
                            <CreateLink route={route}>
                              <FontAwesomeIcon
                                className="award_icon"
                                icon={faArrowRight}
                              />

                               <span> Ir a herramienta </span>
                            </CreateLink>
                          </button>
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
