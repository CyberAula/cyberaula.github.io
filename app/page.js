"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from 'react-bootstrap/Carousel';
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
								<img alt="logo" className="logo" src="/assets/img/group-logo.png"/>
							</div>
							<div className="group_description">
								<h1>Next Generation Internet Group</h1>
								<h2>
									A research group from the <a rel="noopener noreferrer"  href="http://www.dit.upm.es/" className="link2" target="_blank">   Telematics Engineering Department (DIT) </a>
									at    <a rel="noopener noreferrer"  href="http://www.upm.es/internacional" className="link2" target="_blank">
									Universidad Politécnica de Madrid (UPM) </a>
								</h2>
							</div>
						</div>
						<div className="body">
							<div className="carousel">
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
