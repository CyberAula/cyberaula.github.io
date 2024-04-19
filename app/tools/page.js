"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from 'next/link';
import image from 'next/image';
import {useState, useEffect} from 'react';
import {mytools} from "@/constants/tools";

export default function Tools(props) {

	const [tools, setTools] = useState(mytools);

    useEffect(() => {
		window.scrollTo(0,0);		
	}, []);
    
	    return (
            <div className="tools">
                <Header route="/tools"/>
                <main>
                <div className='banner'><h1>Tools</h1></div>
                    <section className="our_tools">
                        
                        
                        
                        {tools.map(({title, description, route, logo})=>{
                            return (<div className="tool">
                                    <div className="tool_logo">
                                        <CreateLink route={route}><img alt={"Project Logo"} src={logo} /></CreateLink>
                                    </div>

                                    <div className="tool_main">
                                        
                                            <div className="tool_content">
                                                <div className="tool_title">
                                                    <h2>{title}</h2>
                                                </div>
                                                <div className="tool_description">
                                                    <h3>{description}</h3>
                                                </div>
                                                <div className='button_container'><CreateLink route={route}><button>see more</button></CreateLink></div>
                                            </div>
                                        
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