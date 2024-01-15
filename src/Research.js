import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Spinner from './Spinner';
import {useState, useEffect} from 'react';
import {useLocation } from "react-router-dom";
import { mypublications } from './constants/publications';

export default function Research() {
	const location = useLocation();
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
        		<Header route={location.pathname}/>
			    <main>
			        <section className="research">
					<Filters search = {search} year={year} type={type} papers={papers} changeSearch={search=>setState({...state, search: search})} changeYear={year=>setState({...state, year: year})} changeType={type=>setState({...state, type: type})} results={papersFiltered instanceof Array ? papersFiltered.length : 0}/>
			        	{	
			        		papersFiltered.map(({date,doi,content},ind)=>{
			        			return (
			        				<div key={ind} className="paper">
			        				    <div className="paper_date">
			        				        <h4>{date ? date[0] : ""}</h4>
			        				    </div>

			        				    <div className="paper_main">
			        				        <a rel="noopener noreferrer"  target="_blank" href={doi}>
			        				            <div className="paper_content">
			        				                <div className="paper_title">
			        				            	<h2 dangerouslySetInnerHTML={{__html: content}}></h2>
			        				                </div>
			        				            </div>
			        				        </a>
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