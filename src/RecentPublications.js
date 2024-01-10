import React from 'react';
import Spinner from "./Spinner";
import {useState, useEffect} from 'react';


export default function RecentPublications (props) {
    const [state, setState] = useState({papers: [], loading: true});

    useEffect(() => {
		window.scrollTo(0,0);
		async function fetchData() {
		  	try {
				const response = await fetch(process.env.PUBLIC_URL+"/assets/publications.json");
				if (response.ok) {
				const papers = await response.json();   
				console.log("PAPERS", papers.length);     
				setState({papers: papers, loading: false});
				} else {
				console.log('Respuesta de red OK pero respuesta de HTTP no OK');
				}        				
			} catch(e) {
				console.log("ERROR", e);
			}    
		}
	
		fetchData();
	}, []);

        return <div className="_pubications _recent_publications">
            {state.loading ? <Spinner/> : state.papers
                .filter(paper => {
                    return (
                        paper.type === "article-journal"
                    );
                })
                .filter((i, index) => (index < 3))
                .map(({doi, content}) => {
                    return (
                        <a key={doi} href={doi} target="_blank" rel="noopener noreferrer">
                            <p style={{ color: "black" }}dangerouslySetInnerHTML={{__html: content}}></p>
                        </a>
                     );
                 })}
            </div>    

}