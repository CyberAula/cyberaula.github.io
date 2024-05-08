"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { myteam } from "@/constants/team";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Team(props) {
  const [team, setTeam] = useState(myteam);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="team">
      <Header route={"/team"} />
      <div className="banner">
        <h1>Team</h1>
      </div>
      <main>
        <section className="teammates block place-content-center sm:grid sm:grid-cols-2 md:grid-cols-3 md:mx-14 lg:grid-cols-4 gap-10 sm:mx-2 lg:mx-28">
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
                    }) => {
                      const emailAddress = email ? email.split("@") : null;
                      return (
                        <div className="teammate text-center sm:text-left" key={name}>
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
                          </div>

                          <div className="mate_info">
                            <div className="mate_name">
                              <h4>{name}</h4>
                            </div>
                            <div className="mate_role">
                              <span>
                                <small>{role}</small>{" "}
                              </span>
                            </div>
                            <div className="mate_position">
                              <p>
							  {center}
							  </p>
                              <span> {/*<FontAwesomeIcon icon={faEnvelope} />*/} {email}</span> <br></br>
                            </div>
							<div className="mate_coordination">
							<span className={position === "Coordinator" ? "coordinator" : ""}>{position}</span>
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
