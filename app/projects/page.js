"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import ProjectCard from "@/components/projectCard";
import {myprojectCards} from "@/constants/projectsCards.js";


export default function Projects (){
	const [projects, setProjects] = useState(myprojectCards);
	

	useEffect(() => {
		window.scrollTo(0,0);		
	}, []);

		return (
			<div className="projects">
			<Header route={"/projects"}/>
			    <main>
			        {/* <section className="our_projects">
						<div>
							project filter
						</div>
			        	{projects.map(({logo, title, description, route, noBlank})=>{
			        		return (<div key={title} className="project">
			                <div className="project_logo">
			                        <CreateLink route={route}><img alt={"Project Logo"} src={logo} /></CreateLink>
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
			        </section> */}
					<section>
						<ProjectCard/>
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
		<Link href={props.route}>
			{props.children}
		</Link>
	);
}