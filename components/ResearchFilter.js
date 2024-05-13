import React from 'react';

export default function Filters (props) {
	
	function getYears(papers) {
		let yearSet = new Set()
		for (let i in papers) {
			try {
				const date = papers[i].date[0];
				yearSet.add(date.toString())
			} catch(e) {
			}
		}
		return Array.from(yearSet);
	}

		let years = getYears(props.papers);		

		return (<div className="filters">
			<div className="filter">
				<label htmlFor="search">Search</label>
				<input key={" "} type={"text"} value ={props.search}
					   onChange={e => props.changeSearch(e.target.value === "" ? undefined: e.target.value)}
				/>
			</div>
			<div className="filter">
				<label htmlFor="publication">Publication type</label>
				<select id="publication" name="publication" onChange={(e)=>props.changeType(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>All</option>
					<option key={"journal"} value={"article-journal"}>Journal article</option>
					<option key={"conference"} value={"paper-conference"}>Conference proceedings</option>
				</select>
			</div>
			<div className="filter">
				<label htmlFor="year">Year</label>
				<select id="year" name="year" onChange={(e)=>props.changeYear(e.target.value === "all" ? undefined: e.target.value)}>
					<option key={"all"} value={"all"}>All</option>
					{years.map(y=><option key={y} value={y}>{y}</option>)}
				</select>
			</div>
			{props.results === undefined ? null:<div className='research_results'><div>Results: <b> {props.results} </b> </div></div>}
		</div>)
	
}