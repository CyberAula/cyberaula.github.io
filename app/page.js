"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridElement from "@/components/gridElement";
import Carousel from "react-bootstrap/Carousel";
import RecentPublications from "@/components/RecentPublications";
import { mycarousel } from "@/constants/carousel.js";
import BulletElement from "@/components/BulletElement";
export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className="home_page">
        <Header route={"/"} />
        <div className="parallax__layer parallax__layer--base">
          <main>
            <section className="home">
              <div className="head">
                <div className="group_description">
                  <h1>
                    <b>Bienvenido a cyberaula, </b>la iniciativa de innovación
                    educativa de la UPM.
                  </h1>
                </div>
              </div>
              <div className="body">
                {/* <div className="carousel">
								<Carousel>
									{carousel.map(({label, description, image, url})=>{
										return (
											<Carousel.Item key={label}>
												<a href={url} target="_blank" rel="noopener noreferrer">
													<img className="image" src={image} alt={label}/>
													<Carousel.Caption>
														<h3>{label}</h3>
														<p>{description}</p>
													</Carousel.Caption>
												</a>
											</Carousel.Item>
										);
									})
									}
									</Carousel>								
							</div> */}
                <div className="latest_publications">
                  <h3>Latest publications</h3>
                  <RecentPublications />
                  <a href="/#/research" rel="noopener noreferrer">
                    <div className="more">more...</div>
                  </a>
                </div>
                <section className="lines_of_act">
                  <h4>Lines of action</h4>
                  <p>
                    Cyberaula group initiatives approach towards the educational
                    environment and its relationship with the use of new
                    technologies, aiming to develop new ways of learning and the
                    creation and delivery of new MOOCs, amongst other services
                    of collaborative resources for teaching.
                  </p>
                  
                <BulletElement></BulletElement>
                </section>
                <section className="our_goals">
                  <div className="text_content">
                    <h4 className="title_text">Our goals</h4>
                    <div className="body_text">
                      The CyberAula group focuses its activities in the
                      application of ICTs(information and communication
                      technology) in education, encouraging e-learning.
                    </div>
                  </div>
                  
                    <GridElement/>
                  
                </section>
              </div>
              
            </section>
            <Footer />
          </main>

          <div className="parallax__layer parallax__layer--back">
            <div className="background">
              <div className="triangle"></div>
              <div className="circle"></div>
              <div className="rectangle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
