import React from 'react';
import {useState, useEffect} from 'react';
import { mypublications } from '../constants/publications';

export default function RecentPublications (props) {
    const [papers, setPapers] = useState(mypublications);

    useEffect(() => {
		window.scrollTo(0,0);		
	}, []);

        return <div className="_pubications _recent_publications">
            { papers.filter(paper => {
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