import React from 'react';

export default function Spinner(props) {
	return <div className="spinner"><img alt="spinner" src={process.env.PUBLIC_URL+"/spinner.svg"}/></div>
}