"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import Link from 'next/link';
import { myteam } from '@/constants/team';


export default function Team (props){
	const [team, setTeam] = useState(myteam);

	useEffect(() => {
		window.scrollTo(0,0);		
	}, []);

	return (
		<div className="team">
			<Header route={"/team"}/>
		    <main>
		        <section className="teammates">
		        	{
		        		Object.values(team).map(({title,members})=>{
	        				return (<div className="teamgrouptitle" key={title}><h2>{title}</h2>
		        				{members.map(({name, description, photo, github, email})=>{
		        					const emailAddress = email ? email.split("@"):null;
				        			return (
				        				<div className="teammate" key={name}>
				        				    <div className="mate_img">
				        				        <a href={github} target="_blank" rel="noopener noreferrer">
				        				            <img alt={"Team member"} src={process.env.PUBLIC_URL + photo} className="grayscale"/>
				        				        </a>
				        				    </div>

				        				    <div className="mate_info">
				        				        <div className="mate_name">
				        				                <h3>{name}</h3>
				        				        </div>
				        				        <div className="mate_description">
				        				            <p>{description}</p>
													<p><b>{emailAddress ? 
														(<span>{emailAddress[0]}  <img alt="at" className="at" src={process.env.PUBLIC_URL + "/assets/img/arroba-symbol.svg"}/>
														 {emailAddress[1]}</span>
														):""}</b></p>
				        				        </div>
				        				    </div>
				        				</div>
				        			)})}
	        				 </div>)
	        			})
					}

		        </section>
		    </main>
			<Footer/>
		</div>
		)
	
}