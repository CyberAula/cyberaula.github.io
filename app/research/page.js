"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/components/Filters";
import Link from 'next/link';
import { mypublications } from '@/constants/publications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Research() {
	const [state, setState] = useState({papers: mypublications, search: "", year: undefined, type: undefined});
	
	useEffect(() => {
		window.scrollTo(0,0);		
	}, []);

		const {papers, search, year, type } = state;

		let papersFiltered = null;
		
			papersFiltered=papers.filter(paper => {
    				return (!search || search.toLowerCase()
							.replace(new RegExp(/\s/g),"")
							.replace(new RegExp(/[àáâãäå]/g),"a")
							.replace(new RegExp(/æ/g),"ae")
							.replace(new RegExp(/ç/g),"c")
							.replace(new RegExp(/[èéêë]/g),"e")
						    .replace(new RegExp(/[ìíîï]/g),"i")
							.replace(new RegExp(/ñ/g),"n")
							.replace(new RegExp(/[òóôõö]/g),"o")
							.replace(new RegExp(/œ/g),"oe")
							.replace(new RegExp(/[ùúûü]/g),"u")
							.replace(new RegExp(/[ýÿ]/g),"y")
							.replace(new RegExp(/\W/g),"")
							.split(" ").every(item => paper.content.toLowerCase()
							.replace(new RegExp(/\s/g),"")
							.replace(new RegExp(/[àáâãäå]/g),"a")
							.replace(new RegExp(/æ/g),"ae")
							.replace(new RegExp(/ç/g),"c")
							.replace(new RegExp(/[èéêë]/g),"e")
						    .replace(new RegExp(/[ìíîï]/g),"i")
							.replace(new RegExp(/ñ/g),"n")
							.replace(new RegExp(/[òóôõö]/g),"o")
							.replace(new RegExp(/œ/g),"oe")
							.replace(new RegExp(/[ùúûü]/g),"u")
							.replace(new RegExp(/[ýÿ]/g),"y")
							.replace(new RegExp(/\W/g),"")
							.includes(item)))
					&& (!year || (paper.date && paper.date[0] && paper.date[0].toString() === year))
					&& (!type || (paper.type && paper.type === type));
			});
		


		return (
			<div className="research">
        		<Header route={"/research"}/>
			    <main>
				<div className='banner'><h1>Publications</h1></div>
			        <section className="research">
					<Filters search = {search} year={year} type={type} papers={papers} changeSearch={search=>setState({...state, search: search})} changeYear={year=>setState({...state, year: year})} changeType={type=>setState({...state, type: type})} results={papersFiltered instanceof Array ? papersFiltered.length : 0}/>
			        	{	
			        		papersFiltered.map(({date,doi,content},ind)=>{
			        			return (
			        				<div key={ind} className="paper">
			        				    <div className="paper_date">
			        				        <h5 className="year">{date ? date[0] : ""}</h5>
			        				    </div>

			        				    <div className="paper_main">
			        				        
			        				            <div className="paper_content">
			        				                <div className="paper_title">
			        				            	<h2 ></h2>
			        				                </div>
													<div dangerouslySetInnerHTML={{__html: content}} className="paper_subtitle"></div>
													<div className="links"><a rel="noopener noreferrer"  target="_blank" href={doi}> <p>Read publication </p><FontAwesomeIcon icon={faArrowRight} /> </a></div>
			        				            </div>
			        				       
			        				    </div>
			        				</div>
			        			);
			        		})
			        	}
			        </section>
			    </main>
				<Footer/>
			</div>
		)

}