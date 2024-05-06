"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { myteam } from '@/constants/team';


export default function Team (props){
	const [team, setTeam] = useState(myteam);

	useEffect(() => {
		window.scrollTo(0,0);		
	}, []);

	return (
		<div className="team">
			<Header route={"/team"}/>
			<div className="banner">
        <h1>Team</h1>
      </div>
		    <main>
		        <section className="teammates grid grid-cols-4 gap-10 mx-28">
		        	{
		        		Object.values(team).map(({title,members})=>{
	        				return (<div className="">
								{/*<h2 className="mb-10">{title}</h2>*/}
							<div className="teamgrouptitle" key={title}>
		        				{members.map(({name, description, role, position, photo, github, email,center})=>{
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
				        				                <h4>{name}</h4>
				        				        </div>
												<div className="mate_role"> 
													<span>
														<small>{role}</small>  </span>
												</div>
												<div className="mate_position">
													<p><span>{position}</span> <br></br>
													{center}</p>
												</div>
				        				        <div className="mate_description">
				        				            {/* <p>{description}</p> */}
													<p><b>{/*emailAddress ? 
														(<span>{emailAddress[0]}  <img alt="at" className="at" src={process.env.PUBLIC_URL + "/assets/img/arroba-symbol.svg"}/>
														 {emailAddress[1]}</span>
														):""*/}</b></p>
				        				        </div>
				        				    </div>
				        				</div>
				        			)})}
	        				 </div>
							 </div>)
	        			})
					}

		        </section>
		    </main>
			<Footer/>
		</div>
		)
	
}