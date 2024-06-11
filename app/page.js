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

import { useTranslation } from "react-i18next";

export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className={"home_page page_" + currentLang}>
        <Header route={"/"} />
        <div className="parallax__layer parallax__layer--base">
          <main>
            <section className="home">
              <div className="head ">
                <div className="group_description block sm:flex sm:flew-row sm:justify-between md:gap-8 sm:items-center ">
                  <h1 className="mx-4 sm:mx-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24">
                    <b>{t("front.title")}, </b>
                    {t("front.title2")}
                  </h1>
                  <img
                    className="mt-4 sm:mt-0"
                    src="/assets/img/banner_prov.svg"
                  />
                </div>
              </div>

              
              <div className="body lg:mx-36 md:mx-14 sm:mx-8 mx-4 lg:my-12 md:my-8 sm:my-4 my-4 xl:mx-44 2xl:mx-60">
                <section className="award_section">
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
                </section>

                <section className="latest_publications">
                  <h3>{t("front.latestPublicationsTitle")}</h3>
                  <div className="recent_pubs_container">
                    <RecentPublications />
                  </div>
                </section>
                <section className="lines_of_act">
                  <h3>{t("front.linesOfActTitle")}</h3>
                  <p>{t("front.linesOfActBody")}</p>

                  <BulletElement></BulletElement>
                </section>
                <section className="our_goals">
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
