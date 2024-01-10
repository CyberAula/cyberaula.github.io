import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import {useLocation } from "react-router-dom";


export default function Projects (){
	const [state, setState] = useState({projects: [], loading: true});
	const location = useLocation();

	

	useEffect(() => {
		window.scrollTo(0,0);
		async function fetchData() {
		  	try {
				const response = await fetch(process.env.PUBLIC_URL+"/assets/projects.json");
				if (response.ok) {
					const projects = await response.json();   
					console.log("projects", projects.length);     
					setState({projects: projects, loading: false});
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
			<div className="projects">
			<Header route={location.pathname}/>
			    <main>
			        <section className="our_projects">
			        	{state.loading ? <Spinner/> : state.projects.map(({logo, title, description, route, noBlank})=>{
			        		return (<div key={title} className="project">
			                <div className="project_logo">
			                        <CreateLink route={route}><img alt={"Project Logo"} src={process.env.PUBLIC_URL+logo} /></CreateLink>
			                </div>

			                <div className="project_main">
			                    <CreateLink route={route}>
			                        <div className="project_content">
			                            <div className="project_title">
			                                <h2>{title}</h2>
			                            </div>
			                            <div className="project_description description">
			                                <h3>{description}</h3>
			                            </div>
			                        </div>
			                    </CreateLink>
			                </div>
			                </div>

			                );
			        	})}
			        </section>
			    </main>
		    <Footer/>
			</div>
		)


}

const CreateLink = (props) => {
	return props.route.match("http") ? (
		<a target="_blank" href={props.route} rel="noopener noreferrer">
			{props.children}
		</a>
	):(
		<Link to={props.route}>
			{props.children}
		</Link>
	);
}