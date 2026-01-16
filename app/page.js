"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridElement from "@/components/gridElement";
import Carousel from "react-bootstrap/Carousel";
import RecentPublications from "@/components/RecentPublications";
import { mycarousel } from "@/constants/carousel.js";
import BulletElement from "@/components/BulletElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import useHeaderOffset from "@/hook/useHeaderOffset";

import { useTranslation } from "react-i18next";

//SEO
import SEO from "@/components/SEOWrapper";
import StructuredData from "@/components/StructuredData";

//metadata for SEO
import { getPageMetadata } from "@/constants/metadata";
import { homePageSchema } from "@/constants/schemas";

export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const headerOffset = useHeaderOffset("#header_fixed");
  const metadata = getPageMetadata("home", currentLang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <SEO
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
      />
      <StructuredData data={homePageSchema} />
      <div className={"home_page page_" + currentLang}>
        <Header route={"/"} />
        <div className="parallax__layer parallax__layer--base">
          <main style={{ paddingTop: `${headerOffset}px` }}>
            <section className="home ">
              <div className="head ">
                <div className="group_description bg-ca_blue-100 block sm:flex sm:flew-row sm:justify-between md:gap-8 sm:items-center ">
                  <h1 className="mx-4 sm:mx-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24">
                    <b>{t("front.title")}, </b>
                    {t("front.title2")}
                  </h1>
                  <img
                    className="mt-4 sm:mt-0"
                    src="/assets/img/banner_prov.svg"
                    alt="Cyberaula UPM"
                  />
                </div>
              </div>

              <div className="body ">
                <section className="bg-ca_orange-50/60 standard_padding">
                  <h3 className="!text-black/90">
                    {t("front.descriptionTitle")}
                  </h3>
                  <h5 className="!font-medium !text-black/80">
                    {t("front.description")}
                  </h5>
                  <div className="award_section">
                    <FontAwesomeIcon className="award_icon" icon={faTrophy} />
                    <div className="award_title">
                      <div>
                        <h3> {t("front.awardH2")} </h3>
                        <h5>{t("front.awardTitle")}</h5>
                      </div>
                      <div className="award_card_text">
                        <small>{t("front.awardBody")}</small>
                      </div>
                    </div>
                    <a
                      href="https://innovacioneducativa.upm.es/premios-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="ml-2 award_link_wrapper"
                      />
                    </a>
                  </div>
                </section>

                <section className="latest_publications standard_padding">
                  <h3>{t("front.latestPublicationsTitle")}</h3>
                  <div className="recent_pubs_container">
                    <RecentPublications />
                  </div>
                </section>
                <section className="lines_of_act bg-ca_blue-600 standard_padding !pb-0 text-white">
                  <h3 className="!text-white">{t("front.linesOfActTitle")}</h3>
                  <p className="!text-white">{t("front.linesOfActBody")}</p>

                  <BulletElement></BulletElement>
                </section>
                <section className="our_goals standard_padding ">
                  <div>
                    <h3 className="title_text">{t("front.goalsTitle")}</h3>
                    <p>{t("front.goalsBody")}</p>
                  </div>

                  <GridElement />
                </section>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
