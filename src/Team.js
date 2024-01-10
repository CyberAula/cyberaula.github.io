import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import {useState, useEffect} from 'react';
import {useLocation } from "react-router-dom";

export default function Team (props){
	const location = useLocation();
	const [state, setState] = useState({team: [], loading: true});

	useEffect(() => {
		window.scrollTo(0,0);
		async function fetchData() {
		  	try {
				const response = await fetch(process.env.PUBLIC_URL+"/assets/team.json");
				if (response.ok) {
				const team = await response.json();   
				console.log("team", team.length);     
				setState({team: team, loading: false});
				} else {
				console.log('Respuesta de red OK pero respuesta de HTTP no OK');
				}        				
			} catch(e) {
				console.log("ERROR", e);
			}    
		}
	
		fetchData();
	}, []);

		return (
		<div className="team">
			<Header route={location.pathname}/>
		    <main>
		        <section className="teammates">
		        	{
		        		state.loading ? <Spinner/> :Object.values(state.team).map(({title,members})=>{
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