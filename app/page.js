"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridElement from "@/components/gridElement";
import Carousel from "react-bootstrap/Carousel";
import RecentPublications from "@/components/RecentPublications";
import { mycarousel } from "@/constants/carousel.js";
import BulletElement from "@/components/BulletElement";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';


export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);
  const { t } = useTranslation();


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
                    <b>{t('front.title')}, </b>{t('front.title2')}
                  </h1>
                </div>
              </div>

              <div className="body  sm:mx-2 md:mx-14  lg:mx-36 xl:mx-44 2xl:mx-60">
                <section className="award_section">
                  <h2> {t('front.awardH2')} </h2>
                  <div className="award_card">
                    <div className="award_icon_container">
                  <FontAwesomeIcon className="award_icon" icon={faAward} />
                  </div>
                    <div className="award_card_text">
                      <h4>{t('front.awardTitle')}</h4>
                      <p>
                      {t('front.awardBody')}
                        
                      </p>
                    </div>
                  </div>
                </section>
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
                  <h3>{t('front.latestPublicationsTitle')}</h3>
                  <div className='recent_pubs_container'><RecentPublications /></div>

                </div>
                <section className="lines_of_act">
                  <h4>{t('front.linesOfActTitle')}</h4>
                  <p>
                  {t('front.linesOfActBody')}
                  </p>

                  <BulletElement></BulletElement>
                </section>
                <section className="our_goals">
                  <div className="text_content">
                    <h4 className="title_text">{t('front.goalsTitle')}</h4>
                    <div className="body_text">
                    {t('front.goalsBody')}
                    </div>
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
