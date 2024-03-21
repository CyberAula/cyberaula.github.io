"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecentPublications from "@/components/RecentPublications";
import {mycarousel} from "@/constants/carousel.js";




export default function Home() {
  const [carousel, setCarousel] = useState(mycarousel);

	useEffect(() => {
		window.scrollTo(0,0);		
	}, []);
      
  return (
    <div className="App">
      
			<div className="home_page">
			  <div className="parallax" id="parallax">
        		<Header route={"/"}/>
			    <div className="parallax__layer parallax__layer--base">
			      <main>
			        <section className="home">
						<div className="head">
							<div className="group_logo">
								<img alt="logo" className="logo" src="/assets/img/group-logo.svg"/>
							</div>
							<div className="group_description">
								<h1>CYBERAULA GROUP</h1>
								<h2>
									An educational innovation group from the <a rel="noopener noreferrer"  href="http://www.dit.upm.es/" className="link2" target="_blank">   Telematics Engineering Department (DIT) </a>
									at    <a rel="noopener noreferrer"  href="http://www.upm.es/internacional" className="link2" target="_blank">
									Universidad Politécnica de Madrid (UPM) </a>
								</h2>
							</div>
						</div>
						<div className="body">
							<div className="carousel">								
								/* Carousel removed to remove bootstrap - see ging page to see how it was */
								<a href="https://www.etsit.upm.es/otros-elementos/noticias.html?tx_news_pi1%5Bnews%5D=696&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=4c592d8df53070d3e17090b296443b76" target="_blank" rel="noopener noreferrer">
									<img className="image" src="/assets/img/carousel/cyberaula.png" alt="Cyberaula"/>
									<div class="carousel-caption">
										<h3>Cyberaula</h3>
									<p>Awarded by the UPM as the best group of Educational Innovation of 2018</p>
									</div>									
								</a>
																
							</div>
							<div className="latest_publications">
								<h3>Latest publications</h3>
								<RecentPublications/>
								<a href="/#/research" rel="noopener noreferrer">
									<div className="more">
										more...
									</div>
								</a>
							</div>
						</div>
			            <Footer/> 	
			        </section>
			      </main>
			    </div>
  
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
