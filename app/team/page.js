"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { myteam } from "@/constants/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import useHeaderOffset from "@/hook/useHeaderOffset";

export default function Team(props) {
  const [team, setTeam] = useState(myteam);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const headerOffset = useHeaderOffset();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"team page_"+ currentLang}>
      <Header route={"/team"} />
      <main style={{ paddingTop: `${headerOffset}px` }}>
      <div className="banner">
        <h1>{t("team.title")}</h1>
      </div>
        <section className="teammates flex flex-col gap-auto sm:grid sm:grid-cols-2 md:grid-cols-3 md:place-content-center lg:grid-cols-4 
        mx-8 md:mx-14 lg:mx-34 xl:mx-44 2xl:mx-60 my-2 sm:my-8 md:my-8 lg:my-12 xl:my-16 2xl:my-20">
          {Object.values(team).map(({ members }) => {
            return members.map(
              ({
                name,
                description,
                role,
                position,
                photo,
                github,
                email,
                center,
                translationKey,
              }) => {
                const emailAddress = email ? email.split("@") : null;
                const translatedRole = t(`${translationKey}`);
                const translatedPosition = t(position);
                return (
                  <div className="teammate text-center" key={name}>
                    <div className="mate_img">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          alt={"Team member"}
                          src={process.env.PUBLIC_URL + photo}
                          className="grayscale"
                        />
                      </a>
                      <div className="mate_coordination">
                        <span
                          className={
                            position === "Coordinator" ? "coordinator" : ""
                          }
                        >
                          {translatedPosition}
                        </span>
                      </div>
                    </div>

                    <div className="mate_info">
                      <div className="mate_name">
                        <h4>{name}</h4>
                      </div>
                      <div className="mate_role">
                        <span>
                          <small>{translatedRole}</small>{" "}
                        </span>
                      </div>
                      <div className="mate_position">
                        <p>{center}</p>
                       
                      </div>
                      <div className="mate_email">
                      <a href={`mailto:${email}`}>
                          <small>{email}</small>
                          </a>
                        </div>
                      <div className="mate_description">
                        {/* <p>{description}</p> */}
                        <p>
                          <b>
                            {/*emailAddress ? 
														(<span>{emailAddress[0]}  <img alt="at" className="at" src={process.env.PUBLIC_URL + "/assets/img/arroba-symbol.svg"}/>
														 {emailAddress[1]}</span>
														):""*/}
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
